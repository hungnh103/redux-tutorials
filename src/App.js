import { connect } from 'react-redux'
import { useState, useEffect } from 'react'

function App({ dispatch, posts }) {
  const [value, setValue] = useState('')
  const [id, setId] = useState(2)

  useEffect(() => {
    fetchData()
  })

  const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({
        type: 'LOAD_POSTS',
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }

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
        {posts.map((post, index) =>
          <li key={post.id}>{index} {post.title}</li>
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps)(App)
