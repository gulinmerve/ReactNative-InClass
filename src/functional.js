import React, { useState }from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';


const App = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 250}}>{counter}</Text>

        <Button 
            title="Up!"
            onPress={ () => setCounter(counter + 1)}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
