import React from 'react';

export default function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                  <a href="#1" className="navbar-brand">
                  CyberSoft
                 </a>
                 <button
                 className="navbar-toggler"
                    data-toggle="collapse"
                  data-target="#myMenu"
                  >
                  <span className="navbar-toggler-icon" />
                 </button>
                 <div className="collapse navbar-collapse" id="myMenu">
                 <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                      <a href="#1" className="nav-link active">
                            Home
                      </a>
                        </li>
                        <li className="nav-item">
                     <a href="#1" className="nav-link">
                          News
                     </a>
                     </li>
                     <li className="nav-item dropdown">
                          <a href="#1" className="nav-link" data-toggle="dropdown">
                         Products
                         </a>
                      <div className="dropdown-menu">
                         <a href="#1" className="dropdown-item">
                          Smarphone
                         </a>
                         <a href="#1" className="dropdown-item">
                           Laptop
                          </a>
                      </div>
                         </li>
                      <li className="nav-item">
                      <a href="#1" className="nav-link">
                        Forum
                     </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
    );
}