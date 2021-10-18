import React from 'react';
import {CircularProgress} from '@material-ui/core';
import './Loader.scss';

export default function Loader() {
  return (
    <div className="preloader-wrapper">
      <CircularProgress className="preloader"/>
    </div>
  );
}
