import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { useQuery } from 'react-query'


function App(props) {

  return (
    <SafeAreaView>
      <Text>Welcome to cards</Text>
      {/* <Button title='Go to account' onPress={() => props.navigation.goBack()} /> */}
    </SafeAreaView>
  );
}

export default App;
