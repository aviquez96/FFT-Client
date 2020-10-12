import React, {useState, useEffect} from 'react';
import TopBar from '../components/TopBar'
import Activity from '../components/Activity'

import Container from '@material-ui/core/Container';

const Board = () => {

    useEffect(() => {
        const apiUrl = 'http://localhost:5000/activities'
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => console.log(data));
    })

    return (
        <Container maxWidth='xl' disableGutters={true}>
            <TopBar />
            <Activity />
        </Container>
    )
}

export default Board