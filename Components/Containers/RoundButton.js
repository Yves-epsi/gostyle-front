import React from 'react'
import { ThemeProvider, Button, Icon } from 'react-native-elements';

export default class RoundButton extends React.Component {
    
    gotToCamera = () => {
        this.props.navigation.navigate('Camera');
      };

  render() {
    return (
    <ThemeProvider theme={theme}>
        <Button
            onPress={() => this.gotToCamera()}
            icon={
                <Icon
                name="camera-alt"
                color="white"
                />
            }/>
    </ThemeProvider>
    )
  }
}

const theme = {
    Button: {
        buttonStyle :{
            width:64,
            height:64,
            borderRadius:32,
            right: 5,
            bottom: 15,
            position:"absolute",
            zIndex: 5
        }
    },
  };