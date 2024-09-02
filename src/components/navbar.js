import React from 'react'

function Navbar() {
    return (
        <>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <a className="navbar-brand text-warning mx-3" href="/"><b>BlogSpot By Raunak</b></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-light" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Courses</a>
                            </li>
                            
                        </ul>
                        
                    </div> */}
                </nav>
            


        </>
    );
}

export default Navbar;
