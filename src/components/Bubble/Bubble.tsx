import styles from './bubble.module.scss'


function Bubble() {

    return (
        <div className={styles.bubbleContainer}>
            {
                [...Array(50)].map((num: number) => <div key={num} className={styles.bubble}>
                    <span></span>
                    <span></span>
                </div>)
            }
        </div>
    )
}

export default Bubble
