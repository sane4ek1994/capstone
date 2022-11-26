import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '..'
import { CategoryItem } from '../../store/categories/categories.types'

import { CategoryPreviewContainer, CategoryPreviewTitle, Preview } from './category-preview.styles'

type CategoryPreviewProps = {
  title: string
  product: CategoryItem[]
}

export const CategoryPreview: FC<CategoryPreviewProps> = ({ title, product }) => {
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
