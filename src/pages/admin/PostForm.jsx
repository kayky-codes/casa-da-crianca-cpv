import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

function PostForm() {
  const { id } = useParams() // 🔥 pega o ID da URL
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [conteudo, setConteudo] = useState('')

  const editando = !!id // se tem id → edição

  useEffect(() => {
    if (editando) {
      buscarPost()
    }
  }, [])

  async function buscarPost() {
    const { data } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()

    if (data) {
      setTitulo(data.titulo)
      setConteudo(data.conteudo)
    }
  }

  async function salvar(e) {
    e.preventDefault()

    if (editando) {
      // 🔄 UPDATE
      await supabase
        .from('posts')
        .update({ titulo, conteudo })
        .eq('id', id)

    } else {
      // 🆕 INSERT
      await supabase
        .from('posts')
        .insert([{ titulo, conteudo }])
    }

    navigate('/posts')
  }

  return (
    <form onSubmit={salvar}>
      <h2>{editando ? "Editar Post" : "Novo Post"}</h2>

      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
      />

      <textarea
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        placeholder="Conteúdo"
      />

      <button type="submit">
        {editando ? "Atualizar" : "Criar"}
      </button>
    </form>
  )
}

export default PostForm