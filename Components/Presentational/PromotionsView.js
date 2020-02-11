import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { ThemeProvider, Button, Icon, Header } from 'react-native-elements';

import CodeList from "./CodeList"
import RoundButton from "./RoundButton"

import codes from "./data"

export default class PromotionsView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
 
        }
    }

  render() {
    return (
    <View style={{flex:1}}>
            <FlatList
            data={codes}
            renderItem={({item}) => <CodeList code={item}/>}
            />
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