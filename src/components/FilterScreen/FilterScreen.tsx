import styles from './filterScreen.module.scss'

type Props = {
    children: any;
}

function FilterScreen({ children }: Props) {

    return (
        <div className={styles.container}>{children}</div>
    )
}

export default FilterScreen
