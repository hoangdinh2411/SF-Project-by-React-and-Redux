import { fetchLessons, fetchSuccess, fetchError } from '../actions/lessonActions'
import { getAllDocuments } from '../../utils/services'

export const fetchRequest = () => {
    return dispatch => {
        dispatch(fetchLessons())
        return (getAllDocuments('lessons')
            .then(docs => {
                if(docs){
                    return dispatch(fetchSuccess(docs))
                }else{
                    dispatch(fetchError('The document not found. Please try again'))
                }
            }))
    }
} 