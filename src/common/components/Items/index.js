import { Link } from 'react-router-dom';
import styles from './Items.module.css'
function LessonContent({ lesson }) {
    const { title, photoURL, description } = lesson;
    
    return (
            <div className={styles.lessonWrapper} >
                <div className={styles.imageContainer}>
                    <div className={styles.image}  >
                        <img src={photoURL} alt={title} title={title} />
                    </div>
                </div>

                <div className={styles.details}>
                    <p className={styles.title}>{title}</p>
                    <span className={styles.description}>
                        {description}
                    </span>
                </div>
            </div>
    )
}

export default LessonContent;
