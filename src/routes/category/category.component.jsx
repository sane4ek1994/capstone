import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components'

import { selectCategoriesMap } from '../../store/categories/categories.selectors'

import { CategoryContainer, CategoryTitle } from './category.styles'

export const Category = () => {
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
        {products && products.map(product => <ProductCard key={product.id} product={product} />)}
      </CategoryContainer>
    </>
  )
}
