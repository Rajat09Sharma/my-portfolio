import { useState } from "react"


export default function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false);
    let sidebarClass = "collapse navbar-collapse "

    function togglerButtonClickHandler() {
        setShowSidebar(true);
    }
    function closeHandler() {
        setShowSidebar(false);
    }

    if (showSidebar) {
        sidebarClass = "sidebar"
    }


    return (
        <>
            {/* <nav className="navbar navbar-light navbar-expand-lg nvabar-color ">
                <div className="container-fluid">
                    <a className="navbar-brand show" href="#hero">Rajat Sharma.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text mt-0" tabIndex="-1" data-bs-scroll="false" data-bs-keyboard="false" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <a id="cross-btn">

                                <button type="button" className="btn-close  btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </a>
                        </div>
                        <div className="offcanvas-body">

                        </div>
                    </div>

                </div>
            </nav> */}
            <nav className="navbar navbar-light navbar-expand-lg nvabar-color">
                <div className="container-fluid">
                    <a className="navbar-brand show" href="#hero">Rajat Sharma.</a>
                    <button className="navbar-toggler" type="button" onClick={togglerButtonClickHandler} data-bs-toggle="collapse" data-bs-target="" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={sidebarClass} id="navbarTogglerDemo02">
                        {showSidebar && <a href="javascript:void(0)" onClick={closeHandler} className="cross-button"><span>&times;</span></a>}
                        <ul className="navbar-nav nav-list-margin mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#about"  onClick={closeHandler}><em>About</em></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills"  onClick={closeHandler}><em>Skills</em></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#project" onClick={closeHandler}><em>Projects</em></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact"  onClick={closeHandler}><em>Contact Me</em></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
