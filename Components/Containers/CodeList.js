// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { ThemeProvider, Button, Icon } from 'react-native-elements';

export default class CodeList extends React.Component {
  render() {
    const code = this.props.code
    const date = new Date();
    const endDate = new Date(code.date_end)
    return (
        <View style={[styles.container, endDate < date ? styles.invalid : null, code.archived == true ? styles.invalid : null]}>
            <View style={styles.title_container}>
                <Text style={styles.title_text}>{code.name}</Text>
            </View>
        <View style={styles.main_container}>
            <View style={styles.dates}>
              <Text>Start : {new Date(code.date_start).getDate()}/{new Date(code.date_start).getMonth() + 1}/{new Date(code.date_start).getFullYear()}</Text>
              <Text>End : {new Date(code.date_end).getDate()}/{new Date(code.date_end).getMonth() + 1}/{new Date(code.date_end).getFullYear()}</Text>
            </View>
          <View style={styles.content_container}>
                <Text style={styles.description_text} numberOfLines={2}>{code.description}</Text>
          </View>
        </View>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        height: 100,
        paddingBottom: 10,
      },
    invalid: {
        backgroundColor: 'lightgrey',
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