import React from 'react'
import { Header } from 'react-native-elements';

export default class MyHeader extends React.Component {
  render() {
    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'GoStyle', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
  }
}