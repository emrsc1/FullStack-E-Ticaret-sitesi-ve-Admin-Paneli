import './sliders.css'
import SliderItem from './SliderItem'
const sliders = () => {
  return (
    <section className="slider">
    <div className="slider-elements">
      <SliderItem/>
      <div className="slider-buttons">
        <button >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      <div className="slider-dots">
        <button className="slider-dot active">
          <span></span>
        </button>
        <button className="slider-dot" >
          <span></span>
        </button>
        <button className="slider-dot" >
          <span></span>
        </button>
      </div>
    </div>
  </section>
  )
}

export default sliders