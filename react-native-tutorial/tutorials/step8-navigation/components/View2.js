import React from 'react'
import { View, Text, Button } from 'react-native'


const View2 = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>View 2</Text>
      <Button
        title="Go to View 3"
        onPress={() => props.navigation.navigate('View3')}
      />
    </View>
  )
}

export default View2
