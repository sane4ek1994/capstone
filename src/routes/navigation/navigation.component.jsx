import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { UserContex } from '../../contexts/user.context'
import { singOutUser } from '../../utils'

import { ReactComponent as CrwnLogo } from '../../assets/img/crown.svg'
import './navigation.styles.scss'

export const Navigation = () => {
  const { currentUser } = useContext(UserContex)

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
          {currentUser ? (
            <span className='nav-link' onClick={singOutUser}>
              sing out
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              sing in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}
