import { connect } from 'react-redux'
import { useState } from 'react'

function App({ dispatch, posts }) {
  const [value, setValue] = useState('')
  const [id, setId] = useState(2)

  const handleInputData = (e) => {
    setValue(e.target.value)
  }

  const handleAddPost = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_POST',
      payload: {
        id: id,
        title: value
      }
    })
    setValue('')
    setId(id + 1)
  }

  return (
    <div className="App">
      <form onSubmit={handleAddPost}>
        <input
          type="text"
          value={value}
          onChange={handleInputData}
        />
        <input type="submit" value='Add post' />
      </form>

      <ul>
        {posts.map(post =>
          <li key={post.id}>{post.title}</li>
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps)(App)
