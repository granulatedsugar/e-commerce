import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

const CallToAction = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.container}>
            <Typography variant="h4">A message to our community about COVID-19</Typography>
            <Typography variant="subtitle1">Learn what we’re doing to navigate this unprecedented situation.</Typography>
        </Grid>
    )
}

export default CallToAction;
