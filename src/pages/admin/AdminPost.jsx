import AdminLayout from '../../components/AdminLayout'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import './admin.css'

function AdminPost() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    carregarPosts()
  }, [])

  async function carregarPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('criado_em', { ascending: false })

    if (error) {
      console.error('Erro ao carregar posts:', error)
    } else {
      setPosts(data)
    }
  }

  async function excluirPost (id) {
    if(!window.confirm('Tem certeza que deseja excluir esta doação?')) {
      return
    }

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Erro ao excluir post:', error)
    } else {
      alert('Post excluído com sucesso!')
      carregarPosts()
    }
  }

  return (
    <AdminLayout>
      <div className="container">
        <button onClick={() => navigate('novo')}>Novo Post</button>
      </div>
      <div className="container">
        <h2>Postagens no site</h2>

        { posts.length === 0 ? (
          <p>Nenhum post encontrado ou ainda esta carregando...</p>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Data</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.titulo}</td>
                    <td>{new Date(post.criado_em).toLocaleDateString()}</td>
                    <td>
                      <button onClick={() => navigate(`editar/${post.id}`)}>Editar</button>
                      <button onClick={() => excluirPost(post.id)}>Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </AdminLayout>
  )
}

export default AdminPost