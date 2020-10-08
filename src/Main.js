import React from 'react';
import {SafeAreaView, Text, View, StyleSheet } from 'react-native';

import MyBanner from './components/MyBanner';

const App = () => {
    return(
        <SafeAreaView style={{flex:1}}>
            <View>
               <MyBanner title="Çorbalar"
                         desc ="Birbirinden leziz çorbalar!"
                         color= "#e57373"
                         isActive ={false}
                />
                <MyBanner title="Ara Sıcaklar"
                         desc ="Birbirinden leziz aparetifler!"
                         color= "#81d4fa"
                         isActive ={true}
                />

                <MyBanner title="Ana Yemekler"
                         desc ="Doyurucu lezzetler!"
                         color= "#ffd54f"
                         isActive ={false}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;



{/* title = attribute içine yazdıklarım MyBanner fonksyonundaki "props" a gidiyor */}