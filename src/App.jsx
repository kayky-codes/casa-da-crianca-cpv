import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './services/privateRoute.jsx'
import Login from './pages/public/Login'
import Home from './pages/public/Home'
import Qsomos from './pages/public/Qsomos'
import AdminInformacoes from './pages/admin/AdminInformacoes'
import AdminPost from './pages/admin/AdminPost'
import AdminUsuarios from './pages/admin/AdminUsuarios'
import AdminDoacoes from './pages/admin/AdminDoacoes'
import AdminPostForm from './pages/admin/PostForm.jsx'
import AdminPrestarContas from './pages/admin/AdminContas.jsx'
import AdminColaborador from './pages/admin/AdminColaboradores.jsx'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* Publico */}
        <Route path="/" element={<Home />} />
        <Route path="/Qsomos" element={<Qsomos />} />
        <Route path="/logar" element={<Login />} />

        {/* Administrador */}
        <Route path="/admin" element={<PrivateRoute> <AdminDoacoes /> </PrivateRoute>} />
        <Route path="/admin/posts" element={<PrivateRoute> <AdminPost /> </PrivateRoute>} />
        <Route path="/admin/informacoes" element={<PrivateRoute> <AdminInformacoes /> </PrivateRoute>} />
        <Route path="/admin/usuarios" element={<PrivateRoute> <AdminUsuarios /> </PrivateRoute>} />
        <Route path="/admin/posts/novo" element={<PrivateRoute> <AdminPostForm /> </PrivateRoute>} />
        <Route path="/admin/posts/editar/:id" element={<PrivateRoute> <AdminPostForm /> </PrivateRoute>} />
        <Route path="/admin/contas" element={<PrivateRoute> <AdminPrestarContas /> </PrivateRoute>} />
        <Route path="/admin/colaboradores" element={<PrivateRoute> <AdminColaborador /> </PrivateRoute>} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;