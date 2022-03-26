
import React from 'react'
import "./_header.scss"
import TopMenu from '../TopMenu'

const Header =()=>(
  <>
    <header className="header">
    <div className="container-fluid">
      {/* adding the brand name */}
      <div className="row">
        <div className="col-xl-3 col-lg-2 ">
          <div className="header_logo">estore</div>
        </div>
        {/* adding search bar */}
        <div className="col-xl-6 col-lg-7 ">
          <div className="input-group">
            {/*Prepending input group */}
            <div className="input-group-prepend ">
              <select className="form-control btn btn-success  dropdown-toggle">
                <option>ALL</option>
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>

            <input type="text" className="form-control" />
            {/* appending the serach icon with input group */}
            <div className="input-group-append">
              <button className="btn btn-success">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="header__right ">
            <div className="header__right__auth">
              <a href="#">Sign-in</a>
              <a href="#">Sign-up</a>
            </div>
            <ul className="header__right__widget">
              <li>
                <i className="fa fa-heart"></i>
              </li>
              <li>
                <i className="fa fa-shopping-cart"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*row*/}
    </div>
  </header>
  <TopMenu/>
  </>
)
  
export default Header;
