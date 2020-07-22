import React, { Component } from 'react'


export default function TeamMates({ key, details }) {
    if (!details) {
        return <h3>Workingg fetching your TeamMates details</h3>
    }

    return (
        <div className='team-mates-container' key={key}>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}