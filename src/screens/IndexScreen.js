import React, { Component, useContext } from 'react'
import { Text, View, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'

export const IndexScreen = () => {
    const { data, addBlogPost, deleteBlogPost } = useContext(BlogContext)
    return (
        <View  >
            <Button title='Add Blog Post' onPress={addBlogPost} />
            <FlatList
                data={data}
                keyExtractor={data => data.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />

        </View>
    )

}
