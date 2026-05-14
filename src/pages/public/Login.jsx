import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import './public.css';

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  async function entrar(e) {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha
    })

    if (error) {
      alert("erro:" + error.message)
    } else {
      navigate('/admin')
    }
  }

  return (
    <>
      <header>

      </header>
      <main className='conteiner_logar column jc_center gradiente'>
        <div className='div_bloco column' style={{ "background-color": "#88888859" }}>
          <form onSubmit={entrar}>
            <h1 className='azul bold'><b>Login</b></h1>
            
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>

            <button className='f_cinza azul'>Entrar</button>
          </form>
        </div>
      </main>
    </>
  )

}

export default Login