import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.text_2]}>Clarusway</Text>
        <Text style={styles.text}>Components</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 40, fontWeight: 'bold'},
  text_2: {color: 'rgb(170,71,126)', fontSize: 35}
});