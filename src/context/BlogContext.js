import React, { Component } from 'react'
import createContextData from './createContextData'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogposts) => blogposts.id !== action.payload)
        case 'add_blogpost':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: `Blog Post #${state.length + 1}`
            }]
        default:
            return state;
    }
}

const addBlogPosts = dispatch => {
    return () => {
        dispatch({ type: 'add_blogpost' })
    }
}

const deleteBlogPosts = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}



export const { Context, Provider } = createContextData(blogReducer, { addBlogPosts ,deleteBlogPosts}, [])