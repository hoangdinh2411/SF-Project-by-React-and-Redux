import { useSelector } from 'react-redux'
import { Items } from '../../../common/components'
import { lessonDataSelector } from '../../../redux/selector';
import { Lessons } from '../../'

import { Title } from '../../../common/components/'
import { Link } from 'react-router-dom';
import { changeTextToLink } from '../../../common/hooks';
function Home() {
    const { data, message } = useSelector(lessonDataSelector)

    return (
        <div className="row">
            <div className="col l-12">
                <Title text='Videos'/>
            </div>
            <Lessons />
        </div >

    )
}
export default Home