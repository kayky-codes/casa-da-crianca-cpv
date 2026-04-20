import { useState, useEffect } from 'react'
import Editor from './Editor'
import { supabase } from '../../lib/supabaseClient'
import { useNavigate, useParams } from 'react-router-dom'

function PostForm() {
  const [titulo, setTitulo] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [imagens, setImagens] = useState([])
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { id } = useParams() // 🔥 se tiver id = edição

  // 🔥 carregar post para edição
  useEffect(() => {
    if (id) {
      carregarPost()
    }
  }, [id])

  async function carregarPost() {
    setLoading(true)

    const { data: post, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      alert("Erro ao carregar post")
      setLoading(false)
      return
    }

    setTitulo(post.titulo)
    setConteudo(post.conteudo)

    // 🔥 carregar imagens
    const { data: imgs } = await supabase
      .from('post_imagens')
      .select('*')
      .eq('post_id', id)

    if (imgs) {
      setImagens(imgs.map(i => i.imagem_url))
    }

    setLoading(false)
  }

  // 🔥 evita duplicação
  function adicionarImagem(url) {
    setImagens(prev => {
      if (prev.includes(url)) return prev
      return [...prev, url]
    })
  }

  async function salvar(e) {
    e.preventDefault()

    if (!titulo || !conteudo) {
      alert("Preencha todos os campos!")
      return
    }

    setLoading(true)

    let postId = id

    // 🔥 EDITAR
    if (id) {
      const { error } = await supabase
        .from('posts')
        .update({ titulo, conteudo })
        .eq('id', id)

      if (error) {
        alert("Erro ao atualizar: " + error.message)
        setLoading(false)
        return
      }
    }

    // 🔥 CRIAR
    else {
      const { data, error } = await supabase
        .from('posts')
        .insert([{ titulo, conteudo, criado_em: new Date() }])
        .select()
        .single()

      if (error) {
        alert("Erro ao salvar: " + error.message)
        setLoading(false)
        return
      }

      postId = data.id
    }

    // 🔥 salvar imagens
    if (imagens.length > 0) {
      // remove antigas (no caso de edição)
      if (id) {
        await supabase
          .from('post_imagens')
          .delete()
          .eq('post_id', postId)
      }

      const { error: imgError } = await supabase
        .from('post_imagens')
        .insert(
          imagens.map(url => ({
            post_id: postId,
            imagem_url: url
          }))
        )

      if (imgError) {
        alert("Erro ao salvar imagens: " + imgError.message)
        setLoading(false)
        return
      }
    }

    setLoading(false)

    alert(id ? "Post atualizado!" : "Post criado!")

    navigate('/admin/posts')
  }

  if (loading) return <p>Carregando...</p>

  return (
    <form onSubmit={salvar}>
      <h2>{id ? "Editar Post" : "Novo Post"}</h2>

      <input 
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
      />

      <Editor 
        value={conteudo} 
        onChange={setConteudo}
        onUploadImagem={adicionarImagem}
      />

      <button disabled={loading}>
        {loading ? "Salvando..." : "Salvar"}
      </button>
    </form>
  )
}

export default PostForm