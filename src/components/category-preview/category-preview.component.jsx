import { Link } from 'react-router-dom'
import { ProductCard } from '../../components'

import { CategoryPreviewContainer, CategoryPreviewTitle, Preview } from './category-preview.styles'

export const CategoryPreview = ({ title, product }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryPreviewTitle>
        <Link to={title}>{title.toUpperCase()}</Link>
      </CategoryPreviewTitle>
      <Preview>
        {product.slice(0, 4).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}
