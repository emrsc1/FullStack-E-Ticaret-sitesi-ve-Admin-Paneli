import './CategoryItem.css'
const CategoryItem = () => {
  return (
    <ul className="category-list">
        <li className="category-item">
          <a href="#">
            <img src="img/categories/categories1.png" alt="" className="category-image" />
            <span className="category-title">Smartphone</span>
          </a>
        </li>
        <li className="category-item">
          <a href="#">
            <img src="img/categories/categories6.png" alt="" className="category-image" />
            <span className="category-title"> Fashion </span>
          </a>
        </li>
      </ul>
  )
}

export default CategoryItem