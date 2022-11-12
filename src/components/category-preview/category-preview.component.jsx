import { Link } from 'react-router-dom'
import { ProductCard } from '../../components'

import './category-preview.styles.scss'

export const CategoryPreview = ({ title, product }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {product.slice(0, 4).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
