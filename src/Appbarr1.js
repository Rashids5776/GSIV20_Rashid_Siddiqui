import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import BackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      display: 'inline',
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: '50vw',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        //width: 'auto',
      },
    },
    homeIcon: {

      width: '50vw',
      textAlign: 'end',

    }
}));

const Appbarr1 = ({onInput, query}) => {

  const history = useHistory();

  const classes = useStyles();

    return (
    <div className="Appbarr">
        <AppBar position="static">
            <Toolbar>
                <BackIcon onClick={() => {history.goBack()}} />
                <div className={classes.search}>
                   <h3>Movie Details</h3>
                </div>
                <div className={classes.homeIcon}>
                    <HomeIcon onClick={() => {history.push('/')}}/>
                </div>
            </Toolbar>
        </AppBar>
    </div>
    );
}

export default Appbarr1
