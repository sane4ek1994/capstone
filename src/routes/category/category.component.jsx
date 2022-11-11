import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components'

import { CategoriesContext } from '../../contexts/categories.context'

import './category.styles.scss'

export const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <div className='categories-container'>
      {products && products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}
