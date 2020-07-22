import React, { Component } from 'react'
import styled from 'styled-components'

//css style
const Styled = styled.div`
    /* don't touch the window and center the content*/
    margin: 2rem auto;
    width: 80vw;
`
export default function TeamMates({ key, details }) {
    if (!details) {
        return <h3>Workingg fetching your TeamMates details</h3>
    }

    return (
        <Styled className='team-mates-container' key={key}>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </Styled>
    )
}