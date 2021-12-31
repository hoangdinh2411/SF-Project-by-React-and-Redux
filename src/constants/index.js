import React from "react"

const PROFILE_FIELDS = [
    {
        key: "fullName",
        type: "text",
        ref: React.createRef()
    },
    {
        key: "email",
        type: "email",
        ref: React.createRef()
    },
    {
        key: "displayName",
        type: "text",
        ref: React.createRef()
    },
    {
        key: "phoneNumber",
        type: "text",
        ref: React.createRef()
    },
    {
        key: "avatar",
        type: "file",
        ref: React.createRef()
    },
]



export { PROFILE_FIELDS }