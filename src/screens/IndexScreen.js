import React, { Component, useContext } from 'react'
import { Text, View, FlatList, Button,StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import Icon from 'react-native-vector-icons/AntDesign'

export const IndexScreen = () => {
    const { state, addBlogPosts } = useContext(Context)
    const {row} = styles


    const renderBlogs = (item) => {
        return (
            <View style={row}>
                <Text>{item.title}</Text>
                <Icon size={20} name={'delete'}  />
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

const styles=StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:5,
        paddingVertical:13,
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    title:{
        fontSize:18
    }
})
