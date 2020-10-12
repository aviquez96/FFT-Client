import React from 'react';
import TopBar from '../components/TopBar'
import Activity from '../components/Activity'

import Container from '@material-ui/core/Container';

const Board = () => {
    return (
        <Container maxWidth='xl' disableGutters="true">
            <TopBar />
            <Activity />
        </Container>
    )
}

export default Board