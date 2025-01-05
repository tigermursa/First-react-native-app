import {
  Text,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const App = () => {
  const theName = 'Mursalin Hossain';
  let a = 5;
  let b = 7;
  return (
    <SafeAreaView>
      <Text>Mursalin Hossain</Text>
      <Text> Ekhon Andorid kapabo</Text>
      <Image
        style={{width: 200, height: 300}}
        source={{
          uri: 'https://images-ng.pixai.art/images/orig/3dc58a3c-d852-4b11-80ae-5af7f75d65ce',
        }}
      />
      <Button title="Hello world" />
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'red'}}
        onPress={() => Alert.alert('HEllo')}>
        <Text>Hello Bangladesh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 10, backgroundColor: 'green'}}>
        <Text>Hello Bangladesh</Text>
      </TouchableOpacity>
      <Pressable style={{padding: 10, backgroundColor: 'red'}}>
        <Text>Best</Text>
      </Pressable>
      <Text>
        {theName}" "{a + b}
      </Text>
    </SafeAreaView>
  );
};

export default App;
