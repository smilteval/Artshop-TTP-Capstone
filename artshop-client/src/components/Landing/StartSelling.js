import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './imgCard';
import images from '../Landing/imageSrc';
import useWindowPosition from './useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="image-buttons">
      <ImageCard images={images[1]} checked={checked} />
      <ImageCard images={images[0]} checked={checked} />
    </div>
  );
}