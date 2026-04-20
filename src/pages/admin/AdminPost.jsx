import AdminLayout from '../../components/AdminLayout'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import './admin.css'

function AdminPost() {
  return (
    <AdminLayout>
        <div className="container">
          <button onClick={() => navigate('/posts/novo')}>Novo Post</button>
        </div>
    </AdminLayout>
  )
}

export default AdminPost