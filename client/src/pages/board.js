import React, {useState, useEffect} from 'react';
import TopBar from '../components/TopBar'
import Activity from '../components/Activity'

import Container from '@material-ui/core/Container';

const Board = () => {
    const [data, setData] = useState({activities: []})

    useEffect(() => {
        const apiUrl = 'http://localhost:5000/activities'
        fetch(apiUrl)
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
    },[])

    return (
        <Container maxWidth='xl' disableGutters={true}>
            <TopBar />
            {data.activities && data.activities.map((activity) => <Activity activity={activity} key={activity.id}/>)}
        </Container>
    )
}

export default Board