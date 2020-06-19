import React, { Component, useContext } from 'react'
import { Text, View, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import Icon from 'react-native-vector-icons/AntDesign'

export const IndexScreen = () => {
    const { state, addBlogPosts, deleteBlogPosts } = useContext(Context)
    const { row } = styles


    const renderBlogs = (item) => {
        return (
            <View style={row}>
                <Text>{item.title}{item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPosts(item.id)}>
                    <Icon size={25} name={'delete'} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View  >
            <Button title='Add Blog Post' onPress={addBlogPosts} />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return renderBlogs(item)
                }}

            />

        </View>
    )

}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    title: {
        fontSize: 18
    }
})
