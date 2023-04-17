import React from 'react'
import logo from '../../assets/freshcart-logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar({ userD,logOut }) {
  console.log(userD)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">Products</Link>
              </li>
              {userD ? <li className="nav-item">
                <Link className="nav-link" to="cart">Cart</Link>
              </li> : ''}


            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cart">
                  <i className="fab fa-google"></i>
                </Link>
              </li>
              {userD ? <li className="nav-item"  >
                <p className="nav-link" onClick={logOut}>
                  LogOut
                </p>
              </li> : <><li className="nav-item">
                <Link className="nav-link" to="register">
                  Register
                </Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="login">
                    Login
                  </Link>
                </li></>}



            </ul>



          </div>
        </div>
      </nav>

    </div>
  )
}
