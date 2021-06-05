const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault()
  }
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label>Age (years)</label>
      <input type="number" id="age" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddUser
