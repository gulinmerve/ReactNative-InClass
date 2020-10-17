// Overall - 1
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Button from './components/Button';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 50}}>Hello World</Text>
      </View>

      <Button
        users={[1, 2, 3, 4, 5]}
        count={189}
        number={3}
        color="#81d4fa"
        banner="Press"
      />

      <Button
        users={[1, 2, 3, 4, 5]}
        count={189}
        number={3}
        // color="#81d4fa"
        banner="Press"
      />
    </SafeAreaView>
  );
};

export default App;
