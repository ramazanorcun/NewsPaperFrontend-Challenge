import React from "react";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <div id="headerİd" className="container-fluid">
        <div className="row">
          <div  className="col-4  ">
            <h4 className="isim">Ramazan Orçun</h4>
          </div>
          <div   className="col-8 d-flex justify-content-end ">
            <div className="search-btn">
              <input  className="search"  type="search" placeholder="search" />

              <button id="btn1"  className="btn btn-success " type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
