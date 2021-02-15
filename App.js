import React, {Component} from 'react';
import { Header } from 'react-native-elements';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import dictionary from '../database';
export default class HomeScreen extends Component{}
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
var word=dictionary[text]["word"]
var lexicalCategory= dictionary [text]["lexicalCategory"]
var definition=dictionary[text]["definition"]
this.setState({
  "word": word,
  "lexicalCategory": lexicalCategory,
  "definition": definition
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBoxContainer: {
    flex:0.3,
    alignItems: 'center'
  },
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
  }
});
