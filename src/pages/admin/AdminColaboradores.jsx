import { useState, useEffect } from "react";
import AdminLayout from "../../components/AdminLayout";
import { supabase } from "../../lib/supabaseClient";
import './admin.css'

function AdminColaborador() {
    const [diretores, setDiretores] = useState([])
    const [conselheiros, setConselheiros] = useState([])
    const [suplentes, setSuplentes] = useState([])

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [ordem, setOrdem] = useState('')
    const [foto, setFoto] = useState(null)

    useEffect(() => {
        carregarDiretores()
    }, [])

    async function carregarDiretores() {
        const { data: dataDiretores, error: errorD } = await supabase
            .from('diretoria')
            .select('*')
            .eq('ordem', 'Diretoria')

        const { data: dataConselho, error: errorC } = await supabase
            .from('diretoria')
            .select('*')
            .eq('ordem', 'Conselho Fiscal')

        const { data: dataSuplentes, error: errorS } = await supabase
            .from('diretoria')
            .select('*')
            .eq('ordem', 'Suplentes')

        if (errorD || errorC || errorS) {
            console.error('Erro ao carregar dados')
        } else {
            setDiretores(dataDiretores || [])
            setConselheiros(dataConselho || [])
            setSuplentes(dataSuplentes || [])
        }
    }

    function comprimirImagem(file) {
        return new Promise((resolve, reject) => {
            const img = new Image()
            const reader = new FileReader()

            reader.onload = (e) => {
                img.src = e.target.result
            }

            img.onload = () => {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')

                const MAX_WIDTH = 600
                const scale = Math.min(1, MAX_WIDTH / img.width)

                canvas.width = img.width * scale
                canvas.height = img.height * scale

                ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

                canvas.toBlob((blob) => {
                    if (!blob) {
                        reject('Erro ao comprimir imagem')
                        return
                    }
                    resolve(blob)
                }, 'image/jpeg', 0.7) // 🔥 qualidade 70%
            }

            reader.onerror = reject
            img.onerror = reject

            reader.readAsDataURL(file)
        })
    }

    async function Cadastrar(e) {
        e.preventDefault()
        if (!nome || !cargo || !ordem || !foto) {
            alert('Preencha todos os campos!')
            return
        }

        const nomeLimpo = foto.name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '_')
            .replace(/[^a-zA-Z0-9._-]/g, '')

        const fileName = `colaboradores/${Date.now()}-${nomeLimpo}`

        // comprime antes
        const imagemComprimida = await comprimirImagem(foto)

        //upload no Storage
        const { error: uploadError } = await supabase.storage
            .from('foto-perfil')
            .upload(fileName, imagemComprimida, {
                contentType: 'image/jpeg'
            })
        if (uploadError) {
            alert('Erro ao enviar foto: ' + uploadError.message)
            return
        }

        if (uploadError) {
            alert('Erro ao enviar foto: ' + uploadError.message)
            return
        }

        const { data: urlData } = supabase.storage
            .from('foto-perfil')
            .getPublicUrl(fileName)

        const url = urlData.publicUrl

        // Salvar no banco
        const { error: dbError } = await supabase
            .from('diretoria')
            .insert({
                nome: nome,
                cargo: cargo,
                foto_url: url,
                ordem: ordem
            })

        if (dbError) {
            alert('Erro ao salvar colaborador: ' + dbError.message)
        } else {
            alert('Colaborador salvo com sucesso!')
            setNome('')
            setCargo('')
            setOrdem('')
            setFoto(null)
            carregarDiretores()
        }
    }

    async function excluirColaborador(id, fotoUrl) {
        if (!window.confirm('Tem certeza que deseja excluir este colaborador?')) {
            return
        }

        // Excluir do banco
        const { error: dbError } = await supabase
            .from('diretoria')
            .delete()
            .eq('id', id)

        if (dbError) {
            alert('Erro ao excluir do banco: ' + dbError.message)
            return
        }

        // Excluir do Storage
        const filePath = fotoUrl.split('/storage/v1/object/public/')[1]
        const { error: storageError } = await supabase.storage
            .from('foto-perfil')
            .remove([filePath])

        if (storageError) {
            alert('Erro ao excluir foto do Storage: ' + storageError.message)
        } else {
            alert('Colaborador excluído com sucesso!')
            carregarDiretores()
        }
    }

    return (
        <AdminLayout>
            <div className="container">
                <form onSubmit={Cadastrar}>
                    <div className="form-group">
                        <h2>Cadastrar novo colaborador</h2>

                        <label>Nome:</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do colaborador" />

                        <label>Cargo:</label>
                        <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Cargo do colaborador"
                        />

                        <label>Tipo:</label>
                        <select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="Diretoria">Diretoria</option>
                            <option value="Conselho Fiscal">Conselho Fiscal</option>
                            <option value="Suplentes">Suplentes</option>
                        </select>

                        <label>Foto:</label>
                        <input type="file" onChange={(e) => setFoto(e.target.files[0])} />
                    </div>

                    <button type="submit" className="btn-salvar"> Salvar </button>
                </form>
            </div>

            <div className="container">
                <h2>Colaboradores Cadastrados</h2>

                <h3>Diretoria</h3>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {diretores.map((d) => (
                            <tr key={d.id}>
                                <td>{d.nome} - {d.cargo}</td>
                                <td><button onClick={() => excluirColaborador(d.id, d.foto_url)}>Excluir</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3>Conselho Fiscal</h3>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {conselheiros.map((c) => (
                            <tr key={c.id}>
                                <td>{c.nome} - {c.cargo}</td>
                                <td><button onClick={() => excluirColaborador(c.id, c.foto_url)}>Excluir</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3>Suplentes</h3>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {suplentes.map((s) => (
                            <tr key={s.id}>
                                <td>{s.nome} - {s.cargo}</td>
                                <td><button onClick={() => excluirColaborador(s.id, s.foto_url)}>Excluir</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </AdminLayout>
    )
}

export default AdminColaborador