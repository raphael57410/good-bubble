import styles from './buttonContainer.module.scss'

type Props = {
    children: any;
}

function ButtonContainer({ children }: Props) {

    return (
        <div className={styles.container}>{children}</div>
    )
}

export default ButtonContainer
