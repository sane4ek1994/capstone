import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../assets/img/crown.svg'
import './navigation.styles.scss'

export const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container ' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            shop
          </Link>
          <Link className='nav-link' to='/sing-in'>
            sing in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}
