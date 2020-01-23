// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { ThemeProvider, Button, Icon } from 'react-native-elements';

export default class CodeList extends React.Component {
  render() {
    const code = this.props.code
    return (
        <View style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.title_text}>{code.title}</Text>
            </View>
        <View style={styles.main_container}>
            <View style={styles.dates}>
              <Text>Start : 20/02/40</Text>
              <Text>End : 20/02/40</Text>
            </View>
          <View style={styles.content_container}>
                <Text style={styles.description_text} numberOfLines={2}>{code.title}</Text>
          </View>
        </View>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        height: 100,
        paddingBottom: 20,
      },
    title_container: {
        flex: 1
      },
    main_container: {
      flex:1,
      flexDirection: 'row'
    },
    dates: {
      flex: 1,
    },
    content_container: {
      flex: 2,
    },
    title_text: {
      fontWeight: 'bold',
      textAlign: "center",
      fontSize: 20,
      flex: 1,
      flexWrap: 'wrap',
      paddingRight: 5
    },
      description_text: {
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
      },
})