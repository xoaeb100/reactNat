import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SingleTodo() {
  return (
    <View style= {styles.todo} >
      <Text>{todo.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  todo:{}
})