import styles from './title.module.scss'

type Props = {
    text: String;
}

function Title({ text }: Props) {

    return (
        <h1 className={styles.title}>{text}</h1>
    )
}

export default Title
