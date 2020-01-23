import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { ThemeProvider, Button, Icon } from 'react-native-elements';

import MyHeader from "./MyHeader"
import CodeList from "./CodeList"
import RoundButton from "./RoundButton"

export default class ProfilView extends React.Component {

  render() {
    return (
        <Image style={{flex: 1, width: 420}} source={require('../assets/bob.jpg')}/>
    );
  }
}