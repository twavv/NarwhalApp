import { NarwhalRoute } from "../routes";
import React from "react";
import Markdown from "react-native-markdown-renderer";
import { ScrollView } from "react-native";

export const VoterRegistrationView: NarwhalRoute = () => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <Markdown>{COPY}</Markdown>
    </ScrollView>
  );
};

VoterRegistrationView.navigationOptions = {
  title: "Voter Registration",
};

const COPY = `## Under 18? Don't stress.

You must be 18 by Election Day to register to vote for the upcoming election.
The next election is March 10, 2020.

[Get registered!](Register2Vote)

## Election dates/schedule

| Deadline | Expectation |
|----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| By January 25, 2020 | Begin delivery of military and overseas ballots |
| February 24, 2020 | Deadline for voter registration, except for in-person registration with the local clerk. |
| February 25 through 8:00 p.m. March 10, 2020 | Register in-person with the local clerk with proof of residency. |
| Up to 5:00 p.m., March 6, 2020 | Electors may obtain an absent voter ballot via First Class mail. |
| Up to 4:00 p.m., March 9, 2020 | Electors may obtain an absent voter ballot in person in the clerk’s office. |
| Up to 8:00 p.m., March 10, 2020 | Election Day registrants with proof of residency may obtain and vote an absent voter ballot in person in the clerk’s office or vote in person in the proper precinct. |
| Up to 4:00 p.m., March 10, 2020 | Emergency absentee voting for Presidential Primary. |
| March 10, 2020 | Presidential Primary |

[Source: michigan.gov](https://www.michigan.gov/documents/sos/Pres_Prim_Date_2020_08022019_662286_7.pdf)

## Under 18? Don't stress.

You must be 18 by Election Day to register to vote for the upcoming election.
The next election is March 10, 2020.

## Under 18? Don't stress.

You must be 18 by Election Day to register to vote for the upcoming election.
The next election is March 10, 2020.
`;
