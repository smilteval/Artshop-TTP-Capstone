
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import background from "../assets/back3.jpeg";
import Header from '../components/Landing/Header';
import StartSelling from '../components/Landing/StartSelling'

//console.log(`url(${  process.env.PUBLIC_URL + '/back3.jpg'})`)
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    backgroundImage: `url(${background})`, 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        
      <CssBaseline />
      <Header />
      <StartSelling/>
      
</div>
  );

}
