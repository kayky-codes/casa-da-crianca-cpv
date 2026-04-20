import { useState} from 'react';
import AdminLayout from '../../components/AdminLayout';
import './admin.css';
import { supabase } from '../../lib/supabaseClient';


function Usuario() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  async function cadastrar(e) {
    e.preventDefault()

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!")
      return
    }

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password: senha
    })

    if (error) {
      alert(error.message)
    } else {
      alert("Usuário cadastrado!")
      setEmail('')
      setSenha('')
      setConfirmarSenha('')
    }
  }


  return (
    <AdminLayout>
      <div className="container">
      <h2>Cadastrar Novo Administrador</h2>

      <form className="container-form" onSubmit={cadastrar}>

        <div className="form-group">
        <label>Email</label>
        <input type="email" value={email} placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
        <label>Senha</label>
        <input type="password" value={senha} placeholder="Digite sua senmha" onChange={(e) => setSenha(e.target.value)} />
        </div>

        <div className="form-group">
        <label>Confirme a senha</label>
        <input type="password" value={confirmarSenha} placeholder="Repita a senha" onChange={(e) => setConfirmarSenha(e.target.value)} />
        </div>

        <button type="submit" className="btn-salvar">Cadastrar</button>

      </form>
      </div>
    </AdminLayout>
  )
}

export default Usuario