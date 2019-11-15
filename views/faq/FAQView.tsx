import * as React from "react";

import { NarwhalRoute } from "../routes";
import { NavDrawer } from "../../components/NavDrawer";
import { NavRow } from "../../components/NavRow";

export const FAQView: NarwhalRoute = () => {
  return (
    <NavDrawer>
      <NavRow navTo={"FAQ/VoterId"} label={"Voter ID"} />
      <NavRow navTo={"FAQ/DisabilityInfo"} label={"Disability Info"} />
      <NavRow navTo={"FAQ/TransInfo"} label={"Transgender Info"} />
      <NavRow navTo={"FAQ/Misc"} label={"Miscellaneous"} />
    </NavDrawer>
  );
};

FAQView.navigationOptions = {
  title: "Voting FAQs",
};
