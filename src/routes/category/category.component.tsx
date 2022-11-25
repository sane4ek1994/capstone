import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductCard, Spinner } from '../../components'

import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/categories.selectors'

import { CategoryContainer, CategoryTitle } from './category.styles'

type CategoryRouteParams = {
  category: string
}

export const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsCategoriesLoading)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products && products.map(product => <ProductCard key={product.id} product={product} />)}
        </CategoryContainer>
      )}
    </>
  )
}
