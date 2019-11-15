import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { HomeView } from "./views/home";
import { NarwhalRoute, useNavigation } from "./views/routes";
import { AbsenteeBallotsView } from "./views/voting/AbsenteeBallots/AbsenteeBallots";
import { VoterRegistrationView } from "./views/registration/VoterRegistrationView";
import { MyRepsView } from "./views/myreps/MyRepsView";
import { DisabilityInfoView } from "./views/faq/DisabilityInfo";
import { FAQView } from "./views/faq/FAQView";
import { FAQMiscView } from "./views/faq/Misc";
import { FAQTransInfoView } from "./views/faq/TransInfo";
import { FAQVoterId } from "./views/faq/VoterID";
import { LGBTDetroitView } from "./views/lgbtdetroit/LGBTDetroit";

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
    FAQ: { screen: FAQView },
    "FAQ/DisabilityInfo": { screen: DisabilityInfoView },
    "FAQ/Misc": { screen: FAQMiscView },
    "FAQ/TransInfo": { screen: FAQTransInfoView },
    "FAQ/VoterId": { screen: FAQVoterId },
    LGBTDetroit: { screen: LGBTDetroitView },
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
