import { useSelector } from 'react-redux'
import { CategoryPreview, Spinner } from '../../components'
import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/categories.selectors'

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsCategoriesLoading)
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map(title => {
          const product = categoriesMap[title]
          return <CategoryPreview key={title} title={title} product={product} />
        })
      )}
    </>
  )
}
