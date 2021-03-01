import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import View1 from './components/View1'
import View2 from './components/View2'
import View3 from './components/View3'

const Stack = createStackNavigator();

export default class StackNavigation extends Component {
  render() {
    return (
      <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen name="View1" component={View1} />
          <Stack.Screen name="View2" component={View2} options={{ title: 'Title for View 2' }} />
          <Stack.Screen name="View3" component={View3} />
        </Stack.Navigator>
      </NavigationContainer>      
    )
  }
}
