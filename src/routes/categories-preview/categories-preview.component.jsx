import { useSelector } from 'react-redux'
import { CategoryPreview } from '../../components'
import { selectCategoriesMap } from '../../store/categories/categories.selectors'

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const product = categoriesMap[title]
        return <CategoryPreview key={title} title={title} product={product} />
      })}
    </>
  )
}
