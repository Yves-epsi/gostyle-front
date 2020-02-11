import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { ThemeProvider, Button, Icon, Header } from 'react-native-elements';

import CodeList from "./CodeList"
import RoundButton from "./RoundButton"

import codes from "./data"

export default class MainView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
 
        }
    }

    gotToPromotions = () => {
        this.props.navigation.navigate('Promotions');
    };
      
  render() {
    return (
    <View style={{flex:1}}>
        <Header
            centerComponent={{ text: 'GoStyle', style: { color: '#fff', fontSize: 20 } }}
            rightComponent={<Button
              onPress={() => this.gotToPromotions()}
              icon={
                  <Icon
                  name="list"
                  color="white"
                  />
              }/>}
        />
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