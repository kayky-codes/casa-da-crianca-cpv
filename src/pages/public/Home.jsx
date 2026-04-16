import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import Loading from '../../components/Loading'
import './public.css';

function Home() {
  const [posts, setPosts] = useState([])
  const [imagens, setImagens] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    buscarDados()
  }, [])

  async function buscarDados() {
    try {
      const { data: postsData, error: errorPosts } = await supabase
        .from('posts')
        .select('*')

      const { data: imagensData, error: errorImagens } = await supabase
        .from('post_imagens')
        .select('*')

        if (errorPosts) alert(errorPosts)
        if (errorImagens) alert(errorImagens)

        setPosts(postsData || [])
        setImagens(imagensData || [])

    } catch (error) {
      if(loading) return <Loading />
      if (error) return <h1>{error}</h1>
    } finally {
      setLoading(false)
    }
}

    if(loading) return <Loading />
    if (error) return <h1>{error}</h1>

  return (
    <div>
        <div className="h1">
          <div className="text">

          </div>
          <img src="" alt="" />
        </div>

        <div className="h2">
          <div className="text">

          </div>
          <img src="" alt="" />
        </div>
        
        <div className="mural">
          <h1>Mural</h1>
          <h2>Cada sorriso aqui carrega uma historia de cuidado, esperança e transformação</h2>
          <div className="img">

          </div>
        </div>

        <div className="h3">
          <div className="doacao">

          </div>

          <div className="historia">

          </div>
        </div>

    </div>
  )
}

export default Home