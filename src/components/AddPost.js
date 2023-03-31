import { connect } from 'react-redux'
import { addPost } from '../actions/post'

const AddPost = ({ categories, addPost }) => {
  const handleAddPost = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    addPost({
      title: data.get('title'),
      category_id: data.get('category'),
      description: data.get('description')
    })

    form.reset()
  }

  return (
    <div>
      <form onSubmit={handleAddPost}>
        <label htmlFor="post_title" className='form-label'>Title</label>
        <input name='title' id='post_title' type="text" />

        <br />
        <br />

        <label htmlFor="post_category" className='form-label'>Category</label>
        <select name='category' id="post_category">
          {categories.map(category =>
            <option key={category.id} value={category.id}>
              {category.content}
            </option>
          )}
        </select>

        <br />
        <br />

        <label htmlFor="post_description" className='form-label'>Description</label>
        <textarea
          name='description'
          id="post_description"
          cols="30"
          rows="10"
          placeholder='Input description'
        ></textarea>

        <br />
        <br />

        <input type="submit" value='add post' />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({ categories: state.categories })

const mapDispatchToProps = { addPost }

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
