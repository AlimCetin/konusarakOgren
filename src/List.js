import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button, Card } from "galio-framework";

const List = ({ navigation, route }) => {
  const [dataList, setDataList] = useState([]);
  //   const renderItem = ({ item }) => (
  //     <View
  //       style={{
  //         backgroundColor: "red",
  //         padding: 20,
  //         marginVertical: 8,
  //         marginHorizontal: 16,
  //       }}
  //     >
  //       <Text
  //         style={{
  //           fontSize: 32,
  //         }}
  //       >
  //         {item.name}
  //       </Text>
  //       <Button
  //         title="detaya git"
  //         onPress={() => navigation.navigate("Detail", item)}
  //       />
  //     </View>
  //   );
  const renderItem = ({ item }) => (
    <TouchableOpacity   onPress={() => navigation.navigate("Detail", item)}>
      <Card
        flex
        borderless
        title={item.name}
        caption={item.created}
        location={item.episode}
      />
    </TouchableOpacity>
  );

  const getList = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode");
      const json = await response.json();
      setDataList(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <FlatList
      data={dataList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default List;
