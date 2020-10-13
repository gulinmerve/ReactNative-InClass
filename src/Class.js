import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <SafeAreaView>
                <Text>Merhaba Full Stack</Text>
            </SafeAreaView>
        )
    }
}

export default App;