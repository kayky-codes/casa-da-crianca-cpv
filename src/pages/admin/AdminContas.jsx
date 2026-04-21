import { useState, useEffect } from "react";
import AdminLayout from "../../components/AdminLayout";
import { supabase } from "../../lib/supabaseClient";
import './admin.css'

function PrestarContas() {
  const [titulo, setTitulo] = useState('')
  const [contas, setContas] = useState([])
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    carregarContas()
  }, [])

    function limparNomeArquivo(nome) {
        return nome
            .normalize("NFD")                 // remove acentos
            .replace(/[\u0300-\u036f]/g, '')  // remove diacríticos
            .replace(/\s+/g, '_')             // espaço → _
            .replace(/[^a-zA-Z0-9._-]/g, '')  // remove caracteres inválidos
    }

    async function carregarContas() {
        const { data, error } = await supabase
            .from('prestacoes_conta') 
            .select('*')
            .order('criado_em', { ascending: false })

        if (error) {
            console.error('Erro ao carregar contas:', error)
        } else {
            setContas(data)
        }
    }

async function salvar(e) {
    e.preventDefault()

    if (!file || !titulo) {
      alert('Preencha todos os campos!')
      return
    }

    if (file.type !== 'application/pdf') {
      alert('Selecione um arquivo PDF!')
      return
    }

    setLoading(true)

    const nomeLimpo = limparNomeArquivo(file.name)
    const fileName = `pdf/${Date.now()}-${nomeLimpo}`

    // Upload no Storage
    const { error: uploadError } = await supabase.storage
      .from('Prestacao_contas') 
      .upload(fileName, file)

    if (uploadError) {
      alert('Erro ao enviar PDF: ' + uploadError.message)
      setLoading(false)
      return
    }

    // Pegar URL pública
    const { data: urlData } = supabase.storage
      .from('Prestacao_contas') 
      .getPublicUrl(fileName)

    const url = urlData.publicUrl

    // Salvar no banco
    const { error: dbError } = await supabase
      .from('prestacoes_conta')
      .insert([{
        titulo,
        arquivo_url: url,
        criado_em: new Date()
      }])

    if (dbError) {
      alert('Erro ao salvar no banco: ' + dbError.message)
      setLoading(false)
      return
    }

    alert('PDF enviado com sucesso!')

    setTitulo('')
    setFile(null)
    setLoading(false)

    carregarContas()
}

  async function excluirConta(id, arquivoUrl) {
    if (!window.confirm('Tem certeza que deseja excluir esta conta?')) {
      return
    }
    // Excluir do banco
    const { error: dbError } = await supabase
      .from('prestacoes_conta')
      .delete()
      .eq('id', id)

    if (dbError) {
      alert('Erro ao excluir do banco: ' + dbError.message)
      return
    }

    // Excluir do Storage
    const filePath = arquivoUrl.split('Prestacao_contas/')[1]
    const { error: storageError } = await supabase.storage
      .from('Prestacao_contas')
      .remove([filePath])
    
    if (storageError) {
      alert('Erro ao excluir do storage: ' + storageError.message)
      return
    }

    alert('Conta excluída com sucesso!')
    carregarContas()
  }

  return (
    <AdminLayout>
      <form onSubmit={salvar}>
        <div className="container">
          <h2>Prestar Contas</h2>

          <div className="form-group">
            <input type="text" placeholder="Digite o título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />

            <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} />
          </div>

          <button type="submit" className="btn-salvar" disabled={loading}>
            {loading ? "Enviando..." : "Salvar"}
          </button>
        </div>
      </form>

      <div className="container">
        <h2>Contas Prestadas</h2>

        {contas.length === 0 ? (
          <p>Nenhuma conta encontrada.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Criado em</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {contas.map((conta) => (
                <tr key={conta.id}>
                  <td>
                    <a
                      href={conta.arquivo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {conta.titulo}
                    </a>
                  </td>

                  <td>
                    {new Date(conta.criado_em).toLocaleString()}
                  </td>

                  <td>
                    <button onClick={() => excluirConta(conta.id, conta.arquivo_url)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  )
}

export default PrestarContas