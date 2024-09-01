import styles from './Header.module.css'
import logo from '../assets/SportNews.png'
import search from '../assets/Vector.png'

const Header = () =>{
    return(
        <header>
            
            <img src={logo} className={styles.logos}
                 alt=''/>
            <ul className={styles.nav}>
                <li>
                    <a href="" >Home</a>
                </li>
                <li>
                    <a href="">Category</a>
                </li>
                <li>
                    <a href="">Trending News</a>
                </li>
                <li>
                    <a href="">Recent News</a>
                </li>
                <li>
                    <a href="">Clubs Ranking</a>
                </li>
                <li>
                    <a href="">Sports Article</a>
                </li>
            </ul>
            
                <button className={styles.search}>
                    <img src={search}
                    alt=''/>
                    Search
                </button>
            
        </header>
    )
}

export default Header