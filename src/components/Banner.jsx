import styles from './Banner.module.css'
// import bac from '../assets/beautiful-young-african-woman-sports-clothing-running-against-gray-background 1.png';

const Banner = () => {

    

    return(
        <div className={styles.banner}>
            <div className={styles.photos}>
                <img src={require('../assets/Group 143726072.png')} 
                 alt='' className={styles.ball}/>
                 
            </div>

            <div className={styles.newest}>
                <p className={styles.headest}>Today</p>
                
                <div className={styles.newscard}
                        style={{ 
                            backgroundImage: `url(${require('../assets/b.png')})` }}>
                                
                    <div className={styles.newstitle}>

                        <p className={styles.date}>Race98 - 03 June 2023</p>
                        <p className={styles.titlen}>Ethiopian runners took the top four sports.</p>
                    </div>
                </div>

                <div    className={styles.newscard}
                        style={{ 
                            backgroundImage: `url(${require('../assets/f.png')})` }}>
                                
                    <div className={styles.newstitle}>

                        <p className={styles.date}>Race98 - 03 June 2023</p>
                        <p className={styles.title}>Ethiopian runners took the top four sports.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner