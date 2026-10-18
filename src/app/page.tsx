import React from 'react'
import FeaturedProducts from './_component/FeaturedProducts/FeaturedProducts';
import Slider from './_component/Slider/Slider'
import img1 from '../assets/blog-img-2.jpeg'
import img2 from '../assets/banner-4.jpeg'
import img3 from '../assets/blog-img-1.jpeg'
import ShopCategory from './_component/ShopCategory/ShopCategory';

export default function Home() {
  return (
    <>
    <Slider spaceBetween={0} slidesPerView={1}
     pageList={[img1.src, img2.src , img3.src]} className="hero-slider" hasOverlay = {true}
  overlayColor = 'rgba(66, 180, 105, .6)'/> 
  <ShopCategory/>
    <FeaturedProducts/>
    </>
  );
}
