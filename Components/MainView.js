import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { ThemeProvider, Button, Icon } from 'react-native-elements';

import MyHeader from "./MyHeader"
import CodeList from "./CodeList"
import RoundButton from "./RoundButton"

export default class MainView extends React.Component {
    static navigationOptions = {
        headerShown: false,
    }

      
  render() {
    return (
    <View style={{flex:1}}>
        <MyHeader navigation={this.props.navigation}/>
            <FlatList
            data={[{key: 'a', title:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", url:"bondour.com"}, {key: 'b', title:"bbbbbbbbbbbb", url:"bondour.com"}, {key: 'c', title:"aaaaaa", url:"bondour.com"}, {key: 'd', title:"aaaaaa", url:"bondour.com"}, {key: 'e', title:"aaaaaa", url:"bondour.com"}, {key: 'f', title:"aaaaaa", url:"bondour.com"}, {key: 'g', title:"gaaaaa", url:"bondour.com"}, {key: 'h', title:"haaaaa", url:"bondour.com"}]}
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