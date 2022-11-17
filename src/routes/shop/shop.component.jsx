import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { CategoriesPreview, Category } from '../../routes'
import { getCategoriesAndDocument } from '../../utils'
import { fetchCategoriesStart } from '../../store/categories/categories.action'

import './shop.styles.scss'

export const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}
