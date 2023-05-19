import classNames from 'classnames';
import styles from './button.module.scss'

type Props = {
    text: string;
    onClick: () => void;
    customStyles?: string;
    type?: "button" | "submit" | "reset" | undefined;
}

function Button({ text, onClick, customStyles, type }: Props) {

    return (
        <button type={type} onClick={() => onClick()} className={classNames(styles.button, customStyles)}>{text}</button>
    )
}

export default Button
