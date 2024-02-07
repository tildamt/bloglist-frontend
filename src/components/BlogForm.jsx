import { useState } from 'react'

const BlogForm = ( { createBlog, currentUser/*addBlog, author, title, url, handleAuthorChange, handleTitleChange, handleUrlChange*/ }) => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()

    const blogObject = {
      author: author,
      title: title,
      url: url,
      userId: currentUser.id
    }

    createBlog(blogObject)

    setAuthor('')
    setTitle('')
    setUrl('')

  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
        <div>
          title: <input
            placeholder='enter title'
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          author: <input
            placeholder='enter author'
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          url: <input
            placeholder='enter url'
            value={url}
            onChange={handleUrlChange}
          />
        </div>
        <div>
          <button type="submit">create</button>
        </div>
      </form>
    </div>
  )
}

export default BlogForm