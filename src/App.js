import { Routes, Route } from 'react-router-dom'

import { Home, Navigation, Authentication } from './routes'

const Shop = () => {
  return <h1>Im shop!</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
