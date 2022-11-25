import { Outlet } from 'react-router-dom'

import { Directory } from '../../components'

export const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  )
}
