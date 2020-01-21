// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { ThemeProvider, Button, Icon } from 'react-native-elements';

export default class CodeList extends React.Component {
  render() {
    const code = this.props.code
    return (
        <View style={styles.main_container}>
          <Image
            style={styles.image}
            source={{uri: "image"}}
          />
          <View style={styles.content_container}>
            <View style={styles.code_container}>
              <Text style={styles.title_text}>{code.title}</Text>
            </View>
            <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={3}>{code.title}</Text>
            </View>
            <View style={styles.redirection_container}>
                <Button
                onPress={ () => {}}
                title={code.url}
                />
            </View>
          </View>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    main_container: {
      height: 150,
      flexDirection: 'row'
    },
    image: {
      width: 140,
      height: 140,
      margin: 5,
      backgroundColor: 'gray'
    },
    content_container: {
      flex: 1,
      margin: 5
    },
    code_container: {
      flex: 3,
      flexDirection: 'row'
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 20,
      flex: 1,
      flexWrap: 'wrap',
      paddingRight: 5
    },
    description_container: {
        flex: 7,
        flexDirection: 'row'
      },
      description_text: {
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
      },
    redirection_container: {
      flex: 7
    }
})