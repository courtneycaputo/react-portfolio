import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  const headerStyle = {
    background: "black",
  }
  
  const headerLinkStyle = {
    background: "black",
    color: "#FF00CC"
  }

  return (

<nav className="navbar navbar-expand-lg " style={headerStyle}>
  <div className="container-fluid" style={headerStyle}>
    <div className="navTitle">Courtney Caputo</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNav" 
    //style={headerLinkStyle}
    >
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <a href="#about" 
          //style={headerLinkStyle}
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'mynavlinkactive' : 'mynavlink'}
          >
            About
            </a>
        </li>

        <li className="nav-item">
          <a href="#portfolio" 
          //style={headerLinkStyle}
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'mynavlinkactive' : 'mynavlink'}
          >
            Portfolio</a>
        </li>

        <li className="nav-item">
          <a href="#resume" 
          //style={headerLinkStyle}
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'mynavlinkactive' : 'mynavlink'}
          >
            Resume</a>
        </li>
        
        <li className="nav-item">
          <a href="#contact" 
         // style={headerLinkStyle}
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'mynavlinkactive' : 'mynavlink'}
          >
            Contact</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
  );
}

export default NavTabs;