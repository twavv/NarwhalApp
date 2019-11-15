import * as React from "react";

import { NarwhalRoute } from "../routes";
import { MarkdownView } from "../../components/MarkdownView";

const COPY = `# Information for Disabled Voters

- Federal and state laws require Michigan's cities, townships and villages to provide a reasonable number of accessible registration facilities.

- At least one voting station at a polling location should be adapted to allow a person to vote while seated.

- All voters have access to a Voter Assist Terminal in all polling places.

- Voters with disabilities who require assistance in casting a ballot may receive assistance from another person, provided that the person assisting the voter is not the voter's employer, agent of that employer or an officer or agent of a union to which the voter belongs.

- Call the clerk's office ahead of time to make sure your voting site is free of obstructions. If your precinct is not accessible, you will be directed to an alternative site that is accessible.

- Hearing impaired residents with questions may contact the Department of State's Bureau of Elections by email at elections@michigan.gov.

[Source: michigan.gov](https://www.michigan.gov/sos/0,4670,7-127-1633_8716-27710--,00.html)`;

export const DisabilityInfoView: NarwhalRoute = () => {
  return <MarkdownView markdown={COPY} />;
};

DisabilityInfoView.navigationOptions = {
  title: "Voting & Disabilities",
};
