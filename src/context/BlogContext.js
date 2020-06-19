import React, { Component } from 'react'
import createContextData from './createContextData'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }]
        default:
            return state;
    }
}

const addBlogPosts = () => {
    dispatch({ type: 'add_blogpost' })
}



export default { Context, Provider } = createContextData(blogReducer, { addBlogPosts }, [])