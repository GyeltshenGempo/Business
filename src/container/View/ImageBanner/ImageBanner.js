import React from 'react';
import './ImageBanner.scss';

export default function ImageBanner() {
  return (
    <div className='mt-5'>
      <div className='flex'>
        <div className='banner-image'>
          <img className='banner-three banner-1' src={require('../../../assets/Image/banner-one.jpeg').default}
               alt="banner one"/>
        </div>
        <div className='banner-image'>
          <img className='banner-three banner-two' src={require('../../../assets/Image/banner-two.jpeg').default}
               alt="banner one"/>
        </div>
        <div className='banner-image'>
          <img className='banner-three' src={require('../../../assets/Image/banner-three.jpeg').default}
               alt="banner one"/>
        </div>
        <div className='banner-image'>
          <img className='banner-three banner-four' src={require('../../../assets/Image/banner-four.jpeg').default}
               alt="banner one"/>
        </div>
        <div className='banner-image'>
          <img className='banner-three banner-five' src={require('../../../assets/Image/banner-one.jpeg').default}
               alt="banner one"/>
        </div>
      </div>
    </div>
  );
}
