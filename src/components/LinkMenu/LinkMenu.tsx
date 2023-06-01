import { NavLink } from 'react-router-dom'
import styles from './linkMenu.module.scss'

type Props = {

}

function LinkMenu({ }: Props) {

    return (
        <div className={styles.linkMenuContainer} >
            <nav className={styles.navContainer}>
                <div className={styles.link}>
                    <NavLink
                        to="/shop"

                    >
                        Shop
                    </NavLink>
                </div>
                <div className={styles.link}>
                    <NavLink
                        to="/connection"

                    >
                        Connection
                    </NavLink>
                </div>
            </nav>

        </div>
    )
}

export default LinkMenu
