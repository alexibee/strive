import { Outlet, Link } from "react-router-dom"

import { ReactComponent as StriveLogo } from "../../assets/strive_logo.svg";

const Navigation = () => {

  return (
    <>
      <div className='navigation'>
      <Link className='logo-container' to='/'>
          <StriveLogo />
      </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>

        </div>
      </div>
      <Outlet />
    </>
  )
}
export default Navigation
