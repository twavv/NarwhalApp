import { NarwhalRoute } from "../routes";
import React from "react";
import Markdown from "react-native-markdown-renderer";
import { ScrollView } from "react-native";

import COPY_VoterRegistration from "./VoterRegistration";
import COPY_AgeRequirements from "./AgeRequirements";
import COPY_MilitaryInfo from "./MilitaryInfo";

const COPY =
  `${COPY_VoterRegistration}\n\n` +
  `${COPY_AgeRequirements}\n\n` +
  `${COPY_MilitaryInfo}\n\n`;

export const VoterRegistrationView: NarwhalRoute = () => {
  return (
    <ScrollView style={{ padding: 15 }}>
      <Markdown>{COPY}</Markdown>
    </ScrollView>
  );
};

VoterRegistrationView.navigationOptions = {
  title: "Voter Registration",
};
