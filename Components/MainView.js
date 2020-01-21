import React from 'react'
import { View, TextInput, Text, Button } from 'react-native'
import { Header } from 'react-native-elements';

import MyHeader from "./MyHeader"

export default class MainView extends React.Component {
  render() {
    return (
      <View>
          <MyHeader/>
      </View>
    )
  }
}