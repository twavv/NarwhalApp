import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { createAppContainer, NavigationComponent } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { HomeView } from "./views/home";
import { NarwhalRoute, useNavigation } from "./views/routes";

const SplashScreen: NarwhalRoute = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
      <Button
        title={"asjflkasjf;"}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

SplashScreen.navigationOptions = {
  title: "Splash Page",
};

const MainNavigator = createStackNavigator(
  {
    Root: { screen: SplashScreen },
    Home: { screen: HomeView },
  },
  { initialRouteName: "Root" },
);

const App = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
