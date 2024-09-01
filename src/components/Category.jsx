import styles from './Category.module.css'

const Category = () =>{
    return(
        <div className={styles.category}>
            <p className={styles.categorytitle}>Category</p>
            <div className={styles.categorymap}>
                <div className={styles.sporttab}>
                    <p className={styles.sporttitle} >Football</p>
                    <img className={styles.sportimage} src={require('../assets/category/soccer-ball-green-grass-soccer-field-generative-ai 1.png')} alt=''/>
                </div>
                <div className={styles.sporttab}>
                    <img className={styles.sportimage} src={require('../assets/category/close-up-basketball-outdoors 1.png')} alt=''/>
                    <p className={styles.sporttitle} >Basket <br/>ball</p>
                </div>
                <div className={styles.sporttab}>
                <p className={styles.sporttitle} >Car Sport</p>
                    <img className={styles.sportimage} src={require('../assets/category/sport-car-is-drifting-track-with-smoke-around-it 1.png')} alt=''/>
                </div>
                <div className={styles.sporttab}>
                    <img className={styles.sportimage} src={require('../assets/category/Group 143726073.png')} alt=''/>
                    <p className={styles.sporttitle} >Table tennis</p>
                </div>
            </div>
        </div>
    )
}

export default Category