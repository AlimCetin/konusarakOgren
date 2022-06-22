import React, { useState, useEffect } from "react";

import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

export default function Karakter({ route, navigation }) {
  const [dataDetail, setDataDetail] = useState({});

  const getListDetails = async () => {
    try {
      const response = await fetch(route.params);
      const json = await response.json();
      setDataDetail(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getListDetails();
  }, []);

  return (
    <View>
      <Text>id : ({dataDetail?.id})</Text>
      <Text>name : ({dataDetail?.name})</Text>
      <Text>gerder : ({dataDetail?.gender})</Text>
    </View>
  );
}
