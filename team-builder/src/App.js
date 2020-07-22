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
  fname: '',
  lname: '',
  role: '',
  about: ''
}
const initialTeam = [{
  id: uuid(),
  fname: 'Royer',
  lname: 'Adames',
  role: 'react 1',
  about: 'Excited to work with you.'
}]
function App() {
  //states
  const [teamMemberFormValues, setTeamMemberFormValues] = useState({})
  const [teamMates, setTeamMates] = useState(initialTeam)

  const updateForm = (inputName, inputValue) =>{
    const updatedFormValues = {...teamMemberFormValues, [inputName]:inputValue}
    setTeamMemberFormValues(updatedFormValues)
  }
  const submitForm = (inputName, inputValue) => {

    // new entry to be added to teamMemberFormValues state
    const newFriend = {
      fname: teamMemberFormValues.fname.trim(),
      lname: teamMemberFormValues.lname.trim(),
      role: teamMemberFormValues.role,
      about: teamMemberFormValues.about.trim()
    }

    //prevent further action if all of the fills are not fill in
    const isAllFillFilledIn = (!newFriend.fname || !newFriend.lname || !newFriend.role || !newFriend.about)
    if(isAllFillFilledIn) return

    //adding new entry to teamMemberFormValues state
    setTeamMates([newFriend, ...teamMates])
    //clear form
    setTeamMemberFormValues(initialFormValues)
  }

  return (
    <Styled className="form-container">
      <TeamMemberForm 
        TeamMemberFormValues={teamMemberFormValues} 
        update={updateForm}
        submit={submitForm}
      />
    </Styled>
  );
}

export default App;
