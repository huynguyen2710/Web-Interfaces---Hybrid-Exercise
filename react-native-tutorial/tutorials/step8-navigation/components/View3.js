import React from 'react'
import { View, Text, Button } from 'react-native'

const View3 = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>View 3</Text>
      <Button
        title="Back"
        onPress={() => props.navigation.goBack()}
      />

      <Button
        title="To start"
        onPress={() => props.navigation.reset({
          index: 0,
          routes: [{ name: 'View1' }],
        })}
      />
    </View>
  )
}

export default View3
