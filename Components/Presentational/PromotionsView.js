import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import CodeList from "../Containers/CodeList"

export default class PromotionsView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          promotions: [],
        }
    }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async() => {
    const res = await fetch("http://192.168.43.252:3000/qrcode", {
      method: "GET",
      headers: {
          "access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNTgxNTgyMjE2fQ.4HI5V13UwnijIdJG8qzS8PkcOP5B1WcwptXHbVAf7BI",
          "Content-Type": "application/json"
      }})
    const json = await res.json()
    const promotionsValides = json.filter(element => {
      return new Date(element.date_end) > new Date() && element.archived == false
    });
    this.setState({promotions: promotionsValides})
  }

  render() {
    return (
    <View style={{flex:1}}>
            <FlatList
            data={this.state.promotions}
            renderItem={({item}) => <CodeList code={item}/>}
            />
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