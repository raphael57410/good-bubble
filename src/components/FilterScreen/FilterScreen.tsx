import styles from './filterScreen.module.scss'

type Props = {
    children: any;
    fn?: (bool: boolean) => void
}

function FilterScreen({ children, fn }: Props) {

    return (
        <div className={styles.container} onClick={() => fn ? fn(false) : ''}>{children}</div>
    )
}

export default FilterScreen
