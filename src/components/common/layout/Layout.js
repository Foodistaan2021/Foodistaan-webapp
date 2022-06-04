import React from 'react';
import Header from '../header';
import Footer from '../footer';

import './Layout.css';

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={props.noPad ? '' : 'main'}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
