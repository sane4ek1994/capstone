import { Routes, Route } from 'react-router-dom'

import { Home, Navigation, SingIn } from './routes'

const Shop = () => {
  return <h1>Im shop!</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sing-in' element={<SingIn />} />
      </Route>
    </Routes>
  )
}

export default App
