import {BsCart2} from 'react-icons/bs'

import './index.css'

const NavBar = () => (
  <div className="navItems-space-between">
    <div className="nav-display-flex">
      <h1>Reeco</h1>
      <p className="par-details">Store</p>
      <p className="par-details">Orders</p>
      <p className="par-details">Analytics</p>
    </div>
    <div className="nav-display-flex">
      <BsCart2 size="25" className="margin-top-25" />

      <p className="par-details">Hello, James</p>
    </div>
  </div>
)

export default NavBar
