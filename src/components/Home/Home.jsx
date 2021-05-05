import React from 'react';
import CallToAction from '../CallToAction/CallToAction';
import Hero from '../Hero/Hero';
import useStyles from './styles';


const Home = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.toolbar} />
            <Hero />
            <CallToAction />
        </>
    )
}

export default Home;
