import React from 'react'
import { View, Text, Button } from 'react-native'

const View1 = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>View 1</Text>
      <Button
        title="Go to View 2"
        onPress={() => props.navigation.navigate('View2')}
      />
    </View>
  )
}

export default View1
