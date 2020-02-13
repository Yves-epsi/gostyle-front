import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Camera({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  fetchData = async (id) => {
    const url = "http://192.168.43.252:3000/qrcode/" + id;
    const res = await fetch(url, {
      method: "GET",
      headers: {
          "access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNTgxNTgyMjE2fQ.4HI5V13UwnijIdJG8qzS8PkcOP5B1WcwptXHbVAf7BI",
          "Content-Type": "application/json"
      }})
    if(res.status == 200) {
      return res.json()
    } else {
      throw "The code isn't registered";
    }
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    fetchData(data).
    then((res) => {
      const action = { type: "ADD_CODE", value: res[0] }
      navigation.setParams({action: action})
      navigation.navigate("Home", {
        action: action
      })
    }).catch(() => {
      alert("The code isn't registered");
    })
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}