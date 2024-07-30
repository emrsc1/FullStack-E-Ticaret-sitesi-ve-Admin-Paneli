import { useState } from 'react'
import ProductItem from './ProductItem'
import productsData from '../../../data.json'
import './Products.css'
import Slider from "react-slick";
import PropTypes from 'prop-types'
const Products = () => {
  const [products]=useState(productsData)


   function NextBtn({onClick}){
    return (
      <button className="glide__arrow glide__arrow--right" data-glide-dir=">" onClick={onClick}>
        <i className="bi bi-chevron-right"></i>
      </button>
    )
   }
   NextBtn.propTypes={
      onClick:PropTypes.func
   }
    function PrevBtn({onClick}){
      return (
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<" onClick={onClick}>
          <i className="bi bi-chevron-left"></i>
        </button>
      )
    }
    PrevBtn.propTypes={
      onClick:PropTypes.func
   }

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow:<NextBtn/>,
      prevArrow:<PrevBtn/>,
      autoplay:true,
      autoPlaySpeed:3000,
      responsive:[
        {
          breakpoint:992,
          settings:{
            slidesToShow:2

          }
        },
        {
          breakpoint:520,
          settings:{
            slidesToShow:1

          }
        }
      ]
    };

  return (
    <section className="products">
    <div className="container">
      <div className="section-title">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
      </div>
      <div className="product-wrapper product-carousel">
          <Slider {...settings}>
          {products.map((product)=>(
            <ProductItem productItem={product} key={product.id}/>
          ))}
            </Slider>
          

        <div className="glide__arrows" data-glide-el="controls">
        
     
        </div>
      </div>
    </div>
  </section>
  )
}

export default Products