import { Routes, Route } from 'react-router-dom'

import { Home, Navigation, Authentication, Shop, Checkout } from './routes'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
