import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { ThemeProvider, Button, Icon } from 'react-native-elements';

import MyHeader from "./MyHeader"
import CodeList from "./CodeList"
import RoundButton from "./RoundButton"

export default class ProfilView extends React.Component {

  render() {
    return (
    <View style={{flex:1}}>
        <Text>ProfilView</Text>
    </View>
    )
  }
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
});