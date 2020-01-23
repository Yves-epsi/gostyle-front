import React from 'react'
import { Header, Button, Icon } from 'react-native-elements';

export default class MyHeader extends React.Component {
  gotToProfile = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
        <Header
            leftComponent={<Button
              onPress={() => this.gotToProfile()}
              icon={
                  <Icon
                  name="person"
                  color="white"
                  />
              }/>}
            centerComponent={{ text: 'GoStyle', style: { color: '#fff', fontSize: 20 } }}
            rightComponent={{ icon: 'filter-list', color: '#fff' }}
        />
    )
  }
}