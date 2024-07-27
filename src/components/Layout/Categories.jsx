import './Categories.css'
import CategoryItem from './CategoryItem'
const Categories = () => {
  return (
    <section className="categories">
    <div className="container">
      <div className="section-title">
        <h2>All Categories</h2>
        <p>Summer Collection New Morden Design</p>
      </div>
      <CategoryItem/>
    </div>
  </section>
  )
}

export default Categories