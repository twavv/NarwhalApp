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
import { AbsenteeBallView } from "./views/registration/AbsenteeBallots"
import { AgeRequirementsView } from "./views/registration/AgeRequirements"
import { MilitaryInfoView } from "./views/registration/MilitaryInfo"
import { StudentInfoView } from "./views/registration/StudentInfo"
import { RegistrationView } from "./views/registration/VoterRegistration"

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
    RegInfo: { screen: VoterRegistrationView },
    "Registration/AbsenteeBallots": { screen: AbsenteeBallView},
    "Registration/AgeRequirements": { screen: AgeRequirementsView },
    "Registration/MilitaryInfo": { screen: MilitaryInfoView },
    "Registration/StudentInfo": { screen: StudentInfoView },
    "Registration/Registration": { screen: RegistrationView },
    FAQ: { screen: FAQView },
    "FAQ/DisabilityInfo": { screen: DisabilityInfoView },
    "FAQ/Misc": { screen: FAQMiscView },
    "FAQ/TransInfo": { screen: FAQTransInfoView },
    "FAQ/VoterId": { screen: FAQVoterId },
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
