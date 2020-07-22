//libraries
import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'


//component
import TeamMemberForm from './components/TeamMemberForm'

//css style
const Styled = styled.div`
  .form{
    margin: 2rem auto;
    width: 80vw;
  }
`
function App() {
  return (
    <Styled className="form-container">
      <TeamMemberForm/>
    </Styled>
  );
}

export default App;
