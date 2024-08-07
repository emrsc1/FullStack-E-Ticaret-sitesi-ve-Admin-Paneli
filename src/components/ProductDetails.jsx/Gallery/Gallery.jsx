import './Gallery.css'
import { useState } from 'react'
import productsData from "../../../../data.json"
import Slider from "react-slick";
import PropTypes from 'prop-types'
const Gallery = () => {
    const [activeImage, setActiveImage] = useState({
        img:productsData[0].img.singleImage,
        imgIndex:0
    })

    function NextBtn({onClick}){
        return (
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">" onClick={onClick} style={{zIndex:2}}>
            <i className="bi bi-chevron-right"></i>
        </button>
        )
       }
       NextBtn.propTypes={
          onClick:PropTypes.func
       }
        function PrevBtn({onClick}){
          return (
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<" onClick={onClick} style={{zIndex:2}}>
                        <i className="bi bi-chevron-left"></i>
                    </button>
          )
        }
        PrevBtn.propTypes={
          onClick:PropTypes.func
       }

    var sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<NextBtn/>,
        prevArrow:<PrevBtn/>,
      };

    return (
        <div className="product-gallery">
            <div className="single-image-wrapper">
                <img src={activeImage.img} id="single-image" alt="" onError={(e) => console.log('Image failed to load:', e.target.src)}/>
            </div>
            <div className="product-thumb">
                <div className="glide__track" data-glide-el="track">
                    <ol className="gallery-thumbs glide__slides">
                        <Slider {...sliderSettings}>
                        {productsData[0].img.thumbs.map((itemImg,index)=>(

                        <li className="glide__slide glide__slide--active" key={index} onClick={()=>{setActiveImage({
                            img:productsData[0].img.thumbs[index],
                            imgIndex:index
                        })}}>
                            <img src={itemImg}
                             alt=""
                             className={`img-fluid ${activeImage.imgIndex===index ?"active":""}`}
                             
                             />
                        </li>
                        ))}
                        </Slider>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Gallery