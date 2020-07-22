//libraries
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'


//component
import TeamMemberForm from './components/TeamMemberForm'

//css style
const Styled = styled.div`
  .form{
    /* don't touch the window and center the content*/
    margin: 2rem auto;
    width: 80vw;
  }
`
const initialFormValues = {
  username: '',
  role: '',
  email: ''
}
const initialTeam = [{
  id: uuid(),
  username: 'Royer',
  role: 'r1',
  email: 'royeraadames@gmail.com'
}]
function App() {
  //states
  const [teamMemberFormValues, setTeamMemberFormValues] = useState(initialFormValues)
  const [teamMates, setTeamMates] = useState(initialTeam)

  const updateForm = (inputName, inputValue) =>{
    const updatedFormValues = {...teamMemberFormValues, [inputName]:inputValue}
    setTeamMemberFormValues(updatedFormValues)
  }
  const submitForm = (inputName, inputValue) => {

    // new entry to be added to teamMemberFormValues state
    debugger
    const newFriend = {
      username: teamMemberFormValues.username.trim(),
      role: teamMemberFormValues.role,
      email: teamMemberFormValues.email.trim()
    }

    //prevent further action if all of the fills are not fill in
    const isAllFillFilledIn = (!newFriend.username || !newFriend.role || !newFriend.email)
    if(isAllFillFilledIn) return

    //adding new entry to teamMemberFormValues state
    setTeamMates([newFriend, ...teamMates])
    //clear form
    setTeamMemberFormValues(initialFormValues)
  }

  return (
    <Styled className="form-container">
      <TeamMemberForm 
        values={teamMemberFormValues} 
        update={updateForm}
        submit={submitForm}
      />
    </Styled>
  );
}

export default App;
