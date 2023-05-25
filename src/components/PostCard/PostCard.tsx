import styles from './postCard.module.scss'

type Props = {
    title: string;
    email: string;
    img: string;
    description: string;
}

function PostCard({ title, email, img, description }: Props) {


    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <p>{email}</p>
            <div className={styles.imageContainer}>
                <img src={`http://127.0.0.1:3001/static/${img}`} alt='post_image'></img>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default PostCard
