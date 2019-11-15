import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { HomeView } from "./views/home";
import { NarwhalRoute, useNavigation } from "./views/routes";
import { AbsenteeBallotsView } from "./views/voting/AbsenteeBallots/AbsenteeBallots";
import { VoterRegistrationView } from "./views/registration/VoterRegistrationView";
import { MyRepsView } from "./views/myreps/MyRepsView";

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
    Root: { screen: AbsenteeBallotsView },
    Home: { screen: HomeView },
    VoterRegistration: { screen: VoterRegistrationView },
    MyReps: { screen: MyRepsView },
  },
  { initialRouteName: "Home" },
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
