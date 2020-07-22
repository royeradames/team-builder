import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'


export default function TeamMemberForm({ values, update, submit}) {

  //helper functions
  const onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    update(name,value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    submit()
  }
  debugger
  const areAllFildsEmpty = (!values.fname || !values.lname || !values.role || !values.email)
  debugger


  return (
  <form className='form container' onSubmit={onSubmit}>
    <div className='form-group submit'>
      <h2>Add a Friend</h2>
      <button disabled={areAllFildsEmpty}>submit</button>
    </div>
    <label htmlFor='usernameInput'>First name:&nbsp;
          <input
            id='usernameInput'
            name='username'
            type='text'
            placeholder='Enter First Name'
            maxLength='20'
            value={values.fname}
            onChange={onChange}
          />
    </label>
    <label htmlFor='emailInput'>Email:&nbsp;
      <input
        id='emailInput'
        name='email'
        type='email'
        placeholder='Enter email'
        maxLength='20'
        value={values.email}
        onChange={onChange}
      />
    </label>
    <label>Role:&nbsp;
      <select name='role' value={values.role} onChange={onChange}> 
        <option disabled value=''>Selec a role</option>
        <option value='r1'>React 1</option>
        <option value='r2'>React 2</option>
        <option value='be'>Back-End</option>
        <option value='tl'>Team Lead</option>
      </select>
    </label>

  </form>

  )
}

