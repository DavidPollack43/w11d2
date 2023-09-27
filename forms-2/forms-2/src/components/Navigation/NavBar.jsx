import logo from './images/logo.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
        <div className="nav">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="title">
                <h1>Survey Tool</h1>
                <h3>Home</h3>
            </div>
        </div>
        <nav>
            <ul>
                <li key="nav-home">Home</li>
                <li key="nav-sample">Sample Survey</li>
                <li key="nav-sensory">Sensory Preferences</li>
                <li key="nav-report">Report</li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;