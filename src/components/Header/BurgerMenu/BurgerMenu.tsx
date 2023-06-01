import styles from './burgerMenu.module.scss'
import { useBurgerMenuStore } from '../../../store/burgerMenuStrore';
import classNames from 'classnames';
import { useAddStore } from '../../../store/addStore';

const BurgerMenu = () => {
    const [burgerIsOpen, setBurgerIsOpen] = useBurgerMenuStore((state) => [state.burgerIsOpen, state.setBurgerIsOpen]);
    const [isOpen] = useAddStore((state) => [state.isOpen])

    return (
        <>
            {!isOpen && <div className={styles.bugerMenuContainer}>
                <div className={styles.burgerMenuButton} onClick={() => setBurgerIsOpen(!burgerIsOpen)}>
                    <span className={classNames(burgerIsOpen ? styles.barBurger1Open : styles.barBurger1)}></span>
                    {!burgerIsOpen && <span className={styles.barBurger2}></span>}
                    <span className={classNames(burgerIsOpen ? styles.barBurger3Open : styles.barBurger3)}></span>
                </div>
            </div>}
        </>

    );
};

export default BurgerMenu;