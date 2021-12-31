import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { changeTextToLink } from '../common/hooks';
import { Profile, PageSetting, Home, Lessons, LessonContent } from '../pages/'
import { lessonDataSelector, userDataSelector } from '../redux/selector';

function Routers() {
    const { userInfo } = useSelector(userDataSelector)
    const { data } = useSelector(lessonDataSelector)

    return (
        <Routes >
            <Route path="/">
                <Route path="/" element={<Home />} />
                <Route path="lessons" element={<Lessons />} />
                <Route path="lessons/*">
                    {
                        data && 
                        data.map((lesson, index) => {
                            const lessonURL = changeTextToLink(lesson.title)

                            return (< Route key={index} path={`${lessonURL}`} element={< LessonContent lesson={lesson} />} />
                            )
                        }
                        )
                    }
                </Route>
                <Route path="tutorial" element={<h1>tutorial</h1>} />
                <Route path="about" element={<h1>about</h1>} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>

            {

                (userInfo !== null &&
                    <Route path={`${userInfo.uid}/*`} >
                        <Route path="profile" element={<Profile />} />
                    </Route>
                ) || null
            }
            <Route path="setting" element={<PageSetting />} />

        </Routes >


    );
};
export default Routers;
