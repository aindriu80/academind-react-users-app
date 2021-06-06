import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault()
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label>Age (years)</label>
        <input type="number" id="age" />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  )
}

export default AddUser
