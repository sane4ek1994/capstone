import { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import { CategoryPreview } from '../../components'

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const product = categoriesMap[title]
        return <CategoryPreview key={title} title={title} product={product} />
      })}
    </>
  )
}
