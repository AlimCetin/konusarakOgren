import React, { useState, useEffect } from "react";

import {Text, View,Image } from "react-native";

export default function Character({ route, navigation }) {
  const [datacharacter, setDatacharacter] = useState({});

  const getListcharacter = async () => {
    try {
      const response = await fetch(route.params);
      const json = await response.json();
      setDatacharacter(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getListcharacter();
  }, []);

  return (
    <View>
      <Text> id  : {datacharacter?.id}</Text>
      <Text> name : {datacharacter?.name}</Text>
      <Text> gerder : {datacharacter?.gender}</Text>
      <Text> species : {datacharacter?.species}</Text>
      <Text> status : {datacharacter?.status}</Text>
      <Text> type : {datacharacter?.type}</Text>
      <Text> url : {datacharacter?.url}</Text>
      <Image source={require(datacharacter?.image)} />
    </View>
  );
}
