import React from "react";
import "./_sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar_category ">
      <div className="section-title">
        <h4>Categories</h4>
      
      <div className="category_accordian">
        <div className="accordian ">
          <div className="card ">
              <div className="card-heading">
                <a >Women</a>
              </div>
              <div className="card-body">
                <ul>
                    <li><a href="#">Coats</a></li>
                    <li><a href="#">Jackets</a></li>
                    <li><a href="#">Dresses</a></li>
                    <li><a href="#">Shirts</a></li>
                    
                </ul>
              </div>
          </div>{/*card*/}
           
          </div> 

        </div>
      </div>{/**Section title */}
    </div>
  );
}

export default Sidebar;
