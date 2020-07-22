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


export default function TeamMemberForm({value, update, submit}) {

  

  //options for role
  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

  //helper functions
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    update(name,value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    submit()
  }
  debugger
  const areAllFildsEmpty = (!value.fname || !value.lname || !value.role || !value.about)

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group widths='equal'>
        <Form.Field
          control={Input}
          label='First name'
          placeholder='First name'
          value={value.fname}
        />
        <Form.Field
          control={Input}
          label='Last name'
          placeholder='Last name'
          value={value.lname}

        />
        <Form.Field
          control={Select}
          label='Gender'
          options={options}
          placeholder='Gender'
        />
      </Form.Group>
      <Form.Group inline>
        <label>Role</label>
        <Form.Field
          control={Radio}
          label='React 1'
          value='react 1'
          checked={value === 'react 1'}
          onChange={handleChange}
        />
        <Form.Field
          control={Radio}
          label='React 2'
          value='react 2'
          checked={value === 'react 2'}
          onChange={handleChange}
        />
        <Form.Field
          control={Radio}
          label='Back end'
          value='Back end'
          checked={value === 'Back end'}
          onChange={handleChange}
        />
        <Form.Field
          control={Radio}
          label='HTML and CSS front end'
          value='HTML and CSS front end'
          checked={value === 'HTML and CSS front end'}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label='About'
        placeholder='Tell us more about you...'
        value={value.about}
      />
      <Form.Field control={Button} disabled={areAllFildsEmpty}>Submit</Form.Field>
    </Form>
  )
}

