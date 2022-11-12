import { createContext, useState, useEffect } from 'react'
import { getCategoriesAndDocument } from '../utils'

export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocument()
      setcategoriesMap(categoryMap)
    }

    getCategoriesMap()
  }, [])

  const value = { categoriesMap }
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
