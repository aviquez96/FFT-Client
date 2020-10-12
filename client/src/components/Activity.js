import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropUpTwoToneIcon from '@material-ui/icons/ArrowDropUpTwoTone';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';

const Activity = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item xs={2} container direction="column" alignItems="center">
                        <IconButton color="primary" aria-label="add one hour" size="small">
                            <ArrowDropUpTwoToneIcon fontSize='large'/>
                        </IconButton>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography>
                                    2
                                </Typography>
                            </CardContent>
                        </Card>
                        <IconButton color="primary" aria-label="add one hour" size="small">
                            <ArrowDropDownTwoToneIcon fontSize='large'/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={8} sm container alignItems="center">
                        <Grid item xs container>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Skill Name
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "auto",
        marginTop: 20,
        marginLeft: 150
    },
    paper: {
        maxWidth: 800,
        spacing: theme.spacing(1)
    },
    card: {
        width: 65,
        height: 65,
        display: 'flex',
    },
    cardContent: {
        display: 'flex',
        width: '100%',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

export default Activity