import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const Home = ({children}) => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </React.Fragment>
  );
};
