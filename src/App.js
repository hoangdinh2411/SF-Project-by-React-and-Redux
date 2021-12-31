import { PageHeader } from './pages/'
import Modal from './common/components/Modal/Modal'
import Routers from './routes/Routers'
import { Loading } from './common/components'
//react
import React, { useState, useEffect } from 'react'
import { fetchRequest } from './redux/thunk/lessonThunk'
import { useSelector, useDispatch } from 'react-redux'
import { lessonDataSelector, userDataSelector } from './redux/selector'
import { useNavigate } from 'react-router-dom';
import { addDocument, getDocument } from './utils/services'
import { getUserInfo, noUserLoggedIn } from './redux/actions/userAction'

import { onAuthStateChanged } from 'firebase/auth'
import { serverTimestamp } from 'firebase/firestore'
import { auth, } from './utils/firebase';

function App() {
  const navigate = useNavigate();
  const { isFetching, message } = useSelector(lessonDataSelector)
  const userInfo = useSelector(userDataSelector)

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, user => {
      if (user !== null) {
        getDocument('users/' + user.uid)
          .then(doc => {
            if (doc) {
              const { fullName, displayName, email, phoneNumber, photoURL, uid } = doc
              dispatch(getUserInfo({ fullName, displayName, email, photoURL, phoneNumber, uid }))
            } else {

              const { displayName, email, phoneNumber, uid, photoURL, providerId } = user
              const data = {
                fullName: null,
                photoURL: photoURL,
                uid: uid,
                displayName: displayName,
                email: email,
                phoneNumber: phoneNumber,
                providerId: providerId,
                createdAt: serverTimestamp(),
              }
              addDocument('users', data)
              dispatch(getUserInfo({ displayName, email, photoURL, phoneNumber, uid }))
            }
          })

      } else {
        dispatch(noUserLoggedIn())
        navigate('/')
      }
    })

    return () => {
      unsubscribeAuth()

    }
  }, [userInfo])

  useEffect(() => {
    dispatch(fetchRequest())
  }, []);


  const [showModal, setShowModal] = useState({
    isShowed: false,
    showLoginForm: false,
    showRegisterForm: false
  })


  return (

    <React.StrictMode>
      {
        (userInfo.isLoading && <Loading />) ||
        <>
          <header>
            <PageHeader setShowModal={setShowModal} />

          </header>
          <section className="dashBoardWrapper">
            <div className="grid wide">
              <Routers />
            </div>
          </section>
          {
            (showModal.isShowed &&
              <Modal showModal={showModal} setShowModal={setShowModal} />)
            || null
          }
          <footer>

          </footer>

        </>
      }
    </React.StrictMode>
  )
}

export default App;
