import React from 'react';
import { Header, Slider } from '../index';

const Layout = () => {
  return (
    <div className="layout">
        <Slider>
            <div className="container">
                <Header />
            </div>
        </Slider>
  </div>
  )
}

export default Layout