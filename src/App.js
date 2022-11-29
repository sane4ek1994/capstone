import { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Spinner } from './components'
import { checkUserSession } from './store/user/user.action'

import './App.scss'

const Shop = lazy(() =>
  import('./routes').then(module => ({
    default: module.Shop
  }))
)

const Checkout = lazy(() =>
  import('./routes').then(module => ({
    default: module.Checkout
  }))
)

const Navigation = lazy(() =>
  import('./routes').then(module => ({
    default: module.Navigation
  }))
)

const Home = lazy(() =>
  import('./routes').then(module => ({
    default: module.Home
  }))
)

const Authentication = lazy(() =>
  import('./routes').then(module => ({
    default: module.Authentication
  }))
)

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
