import * as React from "react";

import { NarwhalRoute } from "../routes";
import { NavDrawer } from "../../components/NavDrawer";
import { NavRow } from "../../components/NavRow";

export const VoterRegistrationView: NarwhalRoute = () => {
  return (
    <NavDrawer>
      <NavRow
        navTo={"Registration/Registration"}
        label={" General Registration"}
      />
      <NavRow
        navTo={"Registration/AbsenteeBallots"}
        label={"Absentee Ballots"}
      />
      <NavRow
        navTo={"Registration/AgeRequirements"}
        label={"Age Requirements"}
      />
      <NavRow
        navTo={"Registration/MilitaryInfo"}
        label={"Military and Civilians Abroad"}
      />
      <NavRow navTo={"Registration/StudentInfo"} label={"Student Voters"} />
    </NavDrawer>
  );
};

VoterRegistrationView.navigationOptions = {
  title: "Registration Information",
};
