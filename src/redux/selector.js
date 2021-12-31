import { createSelector } from "@reduxjs/toolkit"


const useData = state => state.userInfo
const lessonData = state=>  state.lessons

export const userDataSelector = createSelector(useData, (useData) => {
    return useData
})
export const lessonDataSelector = createSelector(lessonData, (lessonData) => {
    return lessonData
})


