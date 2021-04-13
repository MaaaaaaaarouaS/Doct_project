import React, {component} from 'react' ;
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
          return(
<div>

    <header className="top-header">
        <nav className="navbar header-nav navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                <img src="assets/images/logo.png" alt="image"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
                    <ul className="navbar-nav">
                        <li>
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li>
                            <Link to="/course" className="nav-link">Courses</Link>
                        </li>
                        <li>
                            <Link to="/reaserch" className="nav-link">Reaserch</Link>
                        </li>
                        <li>
                            <Link to="/news" className="nav-link">News</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link">Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div className="search-box">
                    <input type="text" className="search-txt" placeholder="Search"/>
                    <a className="search-btn">
                        <img src="assets/images/search_icon.png" alt="#" />
                    </a>
                </div>
            </div>
        </nav>
    </header>
   
</div>

          )
    }
}
export default Header;