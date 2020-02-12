import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Camera from "../Containers/Camera"

class CameraView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          promotions: [],
        }
    }
    
  render() {
    return (
    <View style={{flex:1}}>
           <Camera navigation={this.props.navigation}/>
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
    return {
        scannedCodes: state.scannedCodes
      }
  }

export default connect(mapStateToProps)(CameraView)