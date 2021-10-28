import * as React from 'react';
import './Main.scss';
import {ProtectedHeader} from "../ProtectedHeader/ProtectedHeader";
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  content: {
    margin: 15
  }
}));
export const ProtectedMain = props => {
  const {children} = props;
  const classes = useStyles();
  return (
    <div>
      <ProtectedHeader/>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
};
