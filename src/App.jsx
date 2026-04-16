import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './services/privateRoute.jsx'
import Login from './pages/public/Login'
import Home from './pages/public/Home'
import Dashboard from './pages/admin/Home'
import AdminInformacoes from './pages/admin/AdminInformacoes'
import AdminPost from './pages/admin/AdminPost'
import AdminUsuarios from './pages/admin/AdminUsuarios'
import Doacoes from './pages/admin/AdminDoacoes'
import Header from "./pages/public/Header";
import Footer from "./pages/public/Footer";

function App() {
  return (
    <BrowserRouter>
      
      <Header />

      <Routes>
        {/* Publico */}
        <Route path="/" element={<Home />} />
        <Route path="/logar" element={<Login />} />

        {/* Administrador */}
        <Route path="/admin" element={<PrivateRoute> <Doacoes /> </PrivateRoute>} />
        <Route path="/admin/posts" element={<PrivateRoute> <AdminPost /> </PrivateRoute>} />
        <Route path="/admin/informacoes" element={<PrivateRoute> <AdminInformacoes /> </PrivateRoute>} />
        <Route path="/admin/usuarios" element={<PrivateRoute> <AdminUsuarios /> </PrivateRoute>} />


      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App