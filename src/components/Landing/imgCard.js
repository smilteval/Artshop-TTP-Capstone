import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import Images from '../Landing/imageSrc'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActions, Collapse } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Tenor Sans',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Tenor Sans',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  buttons: {
    backgroundColor: '#000000',
  }
});

export default function ImageCard({ images, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={images.imageUrl}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {images.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {images.description}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={images.link} >
                 <Button size= 'large' color="secondary" className = {classes.buttons} >
                {images.button}
                
                </Button> 
                </Link> 
        </CardActions>
      </Card>
    </Collapse>
  );
}