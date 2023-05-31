import styles from './header.module.scss'

//TODO changer le type any
function Bubble({ children }: any) {

    return (
        <header className={styles.headerContainer}>
            {children}
        </header>
    )
}

export default Bubble
