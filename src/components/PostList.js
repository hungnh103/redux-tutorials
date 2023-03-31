import { connect } from 'react-redux'

const PostList = ({ posts, categories }) => {
  return (
    <div>
      <ul>
        {posts.map(post =>
          <li
            key={post.id}
            style={{ marginBottom: '20px' }}
          >
            <ul>
              <li>Title: {post.title}</li>
              <li>Category: {categories.find(c => c.id === post.category_id).content}</li>
              <li>Description: {post.description}</li>
            </ul>
          </li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({ posts: state.posts, categories: state.categories })

export default connect(mapStateToProps)(PostList)
