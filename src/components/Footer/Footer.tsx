import { useTranslation } from 'react-i18next';
import styles from './footer.module.scss'


function Footer() {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <p className={styles.text}>{t<string>('footer.text')}</p>
        </footer>
    )
}

export default Footer
