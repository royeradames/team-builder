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


export default function TeamMemberForm({TeamMemberFormValues, update, submit}) {
  
  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    update(name,value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    submit()
  }
  const { value } = TeamMemberFormValues
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group widths='equal'>
        <Form.Field
          control={Input}
          label='First name'
          placeholder='First name'
        />
        <Form.Field
          control={Input}
          label='Last name'
          placeholder='Last name'
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
          value='back end'
          checked={value === 'back end'}
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
      />
      <Form.Field control={Button}>Submit</Form.Field>
    </Form>
  )
}

