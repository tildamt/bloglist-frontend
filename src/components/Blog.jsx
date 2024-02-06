import { useState } from 'react'

const Blog = ({ blog, user, likeBlog, deleteBlog }) => {
  const [show, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!show)
  }

  return (
    <div style={{
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }}>
      <p>{blog.title}</p>
      <button onClick={toggleDetails}>
        {show ? 'hide' : 'view'}
      </button>
      {show && (
        <div>
          <p>author: {blog.author}</p>
          <p>url: {blog.url}</p>
          <p>likes: {blog.likes}<button type="submit" onClick={() => likeBlog(blog.id)}>like</button></p>
          <p>added by: {blog.user.username}</p>
          {user.id === blog.user.id && (
            <p><button type="submit" onClick={() => deleteBlog(blog.id)}>delete</button></p>
          )}
        </div>
      )}
    </div>
  )
}

export default Blog