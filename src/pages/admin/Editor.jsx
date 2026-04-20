import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import { useEffect } from 'react'
import { supabase } from '../../lib/supabaseClient'

function Editor({ value, onChange, onUploadImagem }) {

  // 🔥 Reduz imagem antes do upload
  function reduzirImagem(file) {
    return new Promise((resolve, reject) => {
      const img = new window.Image()
      const reader = new FileReader()

      reader.onload = (e) => {
        img.src = e.target.result
      }

      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        const MAX_WIDTH = 800
        const scale = Math.min(1, MAX_WIDTH / img.width)

        canvas.width = img.width * scale
        canvas.height = img.height * scale

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        canvas.toBlob((blob) => {
          if (!blob) {
            reject('Erro ao processar imagem')
            return
          }
          resolve(blob)
        }, 'image/jpeg', 0.7)
      }

      reader.onerror = reject
      img.onerror = reject

      reader.readAsDataURL(file)
    })
  }

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: false,
        allowBase64: true,
      })
    ],
    content: value || '<p></p>',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    }
  })

  // 🔄 sincroniza conteúdo (edição)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '<p></p>')
    }
  }, [value, editor])

  async function uploadImagem(e) {
    try {
      const fileOriginal = e.target.files[0]

      if (!fileOriginal) return

      // 🔒 valida tipo
      if (!fileOriginal.type.startsWith('image/')) {
        alert('Selecione uma imagem válida!')
        return
      }

      // ⚠️ aviso (não bloqueia)
      if (fileOriginal.size > 5 * 1024 * 1024) {
        alert('Imagem grande, será reduzida automaticamente, pode demor um pouco...')
      }

      // 🔥 reduz imagem
      const file = await reduzirImagem(fileOriginal)

      const fileName = `post/${Date.now()}.jpg`

      // 🔥 upload
      const { error } = await supabase.storage
        .from('imagens-site')
        .upload(fileName, file)

      if (error) {
        alert('Erro ao subir imagem: ' + error.message)
        return
      }

      // 🔗 pegar URL pública
      const { data: urlData } = supabase.storage
        .from('imagens-site')
        .getPublicUrl(fileName)

      const url = urlData.publicUrl

      console.log("URL:", url)

      if (!editor || !editor.isEditable) return

    // ✅ INSERÇÃO CORRETA (100% confiável)
    editor.commands.insertContent(`
    <figure class="resizable">
        <img src="${url}" />
    </figure>
    `)
      // 🔁 envia pro PostForm (opcional)
      if (onUploadImagem) {
        onUploadImagem(url)
      }

      // 🧹 limpa input
      e.target.value = null

    } catch (err) {
      console.error(err)
      alert('Erro ao processar imagem')
    }
  }

  if (!editor) return <p>Carregando editor...</p>

  return (
    <div>
      <EditorContent editor={editor} className="tiptap" />

      <input type="file" onChange={uploadImagem} />
    </div>
  )
}

export default Editor