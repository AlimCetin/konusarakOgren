import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button } from 'react-native';


const List = ({ navigation,route  }) => {

    const [dataList, setDataList] = useState([])
    const renderItem = ({ item }) => (
        <View style={{
            backgroundColor: 'red',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        }}>

            <Text style={{
                fontSize: 32,
            }}>
                {item.name}
            </Text>
            <Button
                title="detaya git"
                onPress={() => navigation.navigate('Detail', item)}
            />
        </View>


    );

    const getList = async () => {
        try {
            const response = await fetch(
                'https://rickandmortyapi.com/api/episode'
            );
            const json = await response.json();
            setDataList(json.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getList()
    }, [])


    return (
        <FlatList
            data={dataList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />

    );
}
const styles = StyleSheet.create({

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default List;