
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import List from "./src/List"
import Detail from "./src/Detail"
import Character from "./src/Character"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Character" component={Character} />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
