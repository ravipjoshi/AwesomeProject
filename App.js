import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import logo from './assets/logo.jpg';

export default function App() {
  const [outputText,setOutputText] = useState('Awesome App tunred into Hello World');
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{width:300, height:159}}/>
      <Text style={{color: '#888', fontSize: 18}}>
       {outputText}
      </Text>
      <Button
             title="ChangeText"
             onPress={()=>setOutputText('Hello World is changed')} 
              />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
