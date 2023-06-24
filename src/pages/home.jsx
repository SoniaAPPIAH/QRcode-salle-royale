import { NavLink } from 'react-router-dom'
import homepageImage from '../assets/imageAccueil.jpg'
import '../styles/home.css'

function Home () {
    return (
        <div>
            <div className="titleArea">
                <img className="homepageImage" src={homepageImage} alt="Photo de la Salle Royale"/>
                <p>¡Le damos la bienvenida a la Sala Real!</p>
                <p>欢迎来到皇家展厅（Salle royale）！</p>
            </div>
            <nav className="navBar">
                <NavLink className="navLink" to="/ES">Español</NavLink>
                <NavLink className="navLink" to="/ZH">中文</NavLink>
            </nav>
        </div>
        
    )
}

export default Home