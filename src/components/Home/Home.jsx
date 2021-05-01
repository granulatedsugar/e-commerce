import React from 'react';
import Hero from '../Hero/Hero';
import useStyles from './styles';


const Home = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.toolbar} />
            <Hero />
        </>
    )
}

export default Home;
