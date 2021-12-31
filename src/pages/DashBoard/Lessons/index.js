import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Items } from '../../../common/components'
import { changeTextToLink } from '../../../common/hooks'
import { lessonDataSelector } from '../../../redux/selector'

function Lessons() {
    const { data, message } = useSelector(lessonDataSelector)
    return (
        <div className="row">
            {
                (!data &&
                    <div className="col l-6 l-0-3">
                        <p>{message}</p>
                    </div>
                )||
                data.map((lesson, index) => {
                    
                    const lessonURL = changeTextToLink(lesson.title)
                    return (
                        < Link key={index} to={`/lessons/${lessonURL}`} className="col l-4" >
                            <Items lesson={{...lesson}} />
                        </Link>
                    )
                }
                )
            }
        </div>

    )
}
export default Lessons