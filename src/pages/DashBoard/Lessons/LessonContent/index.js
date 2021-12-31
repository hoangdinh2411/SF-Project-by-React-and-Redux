import { Input } from '../../../../common/components';
import styles from './LessonContent.module.css'

function LessonContent({ lesson }) {
    const { videoURL, title, description } = lesson
    const URL = `${videoURL}`
    return (
        <div className="row">
            <div className="col l-7">
                <div className={styles.videoContainer}>
                    <iframe width="100%" height="315" src={URL} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;control" allowFullScreen></iframe>
                </div>
                <div className={styles.details}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
            <div className="col l-5">
                <div className={styles.exercisesContainer}>
                    <p className={styles.title}>Exercises</p>
                    <div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LessonContent;
