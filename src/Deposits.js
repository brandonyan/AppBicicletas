import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

function GetCurrentDate(){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    let fecha =`${year}/${month<10?`0${month}`:`${month}`}/${date}`;
    return fecha
    }

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Kilometros recorridos</Title>
      <Typography component="p" variant="h4">
        134
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        <GetCurrentDate />
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver balance
        </Link>
      </div>
    </React.Fragment>
  );
}