import AddPost from './AddPost'
import PostList from './PostList'

const PostContainer = () => {
  return (
    <div className='post-wrapper'>
      <h2>Post</h2>
      <AddPost />
      <PostList />
    </div>
  )
}

export default PostContainer
