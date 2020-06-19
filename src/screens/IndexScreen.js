import React, { Component, useContext } from 'react'
import { Text, View } from 'react-native'
import BlogContext from '../context/BlogContext'

export const IndexScreen = () => {
    const value = useContext(BlogContext)
    console.log(value)
    return (
        <View  >
            <Text > Index.jssssss </Text>
        </View>
    )

}
