import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { ThemeProvider, Button, Icon } from 'react-native-elements';

import MyHeader from "./MyHeader"
import CodeList from "./CodeList"
import RoundButton from "./RoundButton"

import codes from "./data"

export default class MainView extends React.Component {
      
  render() {
    return (
    <View style={{flex:1}}>
        <MyHeader navigation={this.props.navigation}/>
            <FlatList
            data={codes}
            renderItem={({item}) => <CodeList code={item}/>}
            />
        <RoundButton navigation={this.props.navigation}/>
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