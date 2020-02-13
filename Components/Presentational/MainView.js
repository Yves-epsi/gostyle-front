import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { ThemeProvider, Button, Icon, Header } from 'react-native-elements';
import { connect } from 'react-redux'

import CodeList from "../Containers/CodeList"
import RoundButton from "../Containers/RoundButton"

import codes from "../data"

class MainView extends React.Component {


    constructor(props) {
        super(props)
    }

componentDidUpdate() {
    console.log(this.props)
    if(this.props.navigation.state.params.action){
        this.props.dispatch(this.props.navigation.state.params.action)
    }
}

    gotToPromotions = () => {
        this.props.navigation.navigate('Promotions');
    };
      
  render() {
    const { params } = this.props.navigation.state
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
            data={this.props.scannedCodes}
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

const mapStateToProps = (state) => {
    return state
  }

  export default connect(mapStateToProps)(MainView)