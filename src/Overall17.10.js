// Overall - 1
import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import proudctData from './product_data.json'
import { ProductCard } from './components'
const App = () => {
    const renderListItem = ({ item }) => <ProductCard product={item} />
    return (
        <SafeAreaView>
            <View>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={proudctData}
                    renderItem={renderListItem}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}
export default App;