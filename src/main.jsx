/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Profile from "./components/profile.jsx"
import data from "./user.json"
import './index.css'

ReactDOM.createRoot(document.querySelector("#root"))
    .render(
        <Profile 
            username = {data.username}
            tag = {data.tag}
            location = {data.location}
            avatar = {data.avatar}
            stats = {data.stats}
        />
    )

