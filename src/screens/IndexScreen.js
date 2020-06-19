import React, { Component, useContext } from 'react'
import { Text, View, FlatList, Button } from 'react-native'
import {Context} from '../context/BlogContext'

export const IndexScreen = () => {
    const { state, addBlogPosts } = useContext(Context)
    console.log(state)
    
    return (
        <View  >
            <Button title='Add Blog Post' onPress={addBlogPosts} />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />

        </View>
    )

}
