import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const App = (props) => {
  const [counter, setCounter] =useState(0);
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 80 }}>{counter}</Text>
                <Button
                title="up!" onPress={()=>setCounter(counter+1)}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;