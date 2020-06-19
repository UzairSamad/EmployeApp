import React, { Component } from 'react'

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }]]
        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {

    const [blogPosts, dispatch] = React.useReducer(blogReducer, [])

    const addBlogPosts = () => {
        dispatch({ type: 'add_blogpost' })
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPosts }}>{children}</BlogContext.Provider>
}

export default BlogContext