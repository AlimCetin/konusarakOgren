import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import { Button, Card } from "galio-framework";

export default function Detail({ navigation, route }) {
  const [dataDetail, setDataDetail] = useState({});

  const { name, id } = route.params;

  const getListDetails = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
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
      <Text>air_date : {dataDetail?.air_date}</Text>
      <Text>created : {dataDetail?.created}</Text>
      <Text>episode : {dataDetail?.episode}</Text>
      <Text>name : {dataDetail?.name}</Text>
      <ScrollView>
        {dataDetail?.characters?.map((url) => {
          return (
            <Button
              round
              size="large"
              color="success"
              onPress={() => navigation.navigate("Character", url)}
            >
              {url}
            </Button>
          );
        })}
      </ScrollView>
    </View>
  );
}
