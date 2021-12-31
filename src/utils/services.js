import { doc, setDoc, updateDoc, getDocs, getDoc, collection } from 'firebase/firestore'
import { updateProfile } from 'firebase/auth'
import { auth, db } from './firebase'
export const addDocument = async (docName, data) => {
    const docRef = doc(db, docName, data.uid)
    await setDoc(docRef, data)
}

export const updateDocument = async (docName, userId, field, data) => {
    const docRef = doc(db, docName, userId)

    if (field === 'fullName') {
        await updateDoc(docRef, {
            [field]: data,
        })
    } else {
        await updateDoc(docRef, {
            [field]: data,
        })
        await updateProfile(auth.currentUser, {
            [field]: data,
        })
    }


}

export const getDocument = async (docName) => {
    const docRef = doc(db, docName)
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return false
    }
}
export const getAllDocuments = async (docName) => {
    const docRef = collection(db, docName)
    const docSnap = await getDocs(docRef);
    const docs = docSnap.docs
    if (docs.length) {
        const data = []
        docs.forEach(doc => data.push(doc.data()))
        return data
    } else {
        return false
    }
} 