import React, { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState()
  const [EnteredAge, setEnteredAge] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()
    console.log(enteredUsername, EnteredAge)
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label>Age (years)</label>
        <input type="number" id="age" onChange={ageChangeHandler} />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  )
}

export default AddUser
