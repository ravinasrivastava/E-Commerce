import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [MobilePhones, setMobilePhones] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>
          <div className='navlink'>
            <ul className={MobilePhones ? "nav-links-MobilePhones" : "link f_flex capitalize"} onClick={() => setMobilePhones(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/pages'>Pages</Link>
              </li>
              <li>
                <Link to='/user'>User account</Link>
              </li>

              <li>
                <Link to='/track'>Track my order</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
export default Navbar;