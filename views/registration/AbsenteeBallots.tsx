import { NarwhalRoute } from "../routes";
import { MarkdownView } from "../../components/MarkdownView";
import * as React from "react";

const COPY = `# Absentee Ballots

All eligible and registered voters in Michigan may now request an absent voter ballot without providing a reason.

## Requesting an Absentee Ballot

You must request an absent voter ballot **in writing** by submitting the application, large print application, a letter, a postcard, or a pre-printed application form obtained from your local clerk's office. Requests may be returned by hand, via postal mail, fax, or email, as long as a signature is visible.

* [Application](https://www.michigan.gov/documents/AbsentVoterBallot_105377_7.pdf)
* [Application (fillable)](https://www.michigan.gov/documents/AbsentVoterBallot_105377_7.pdf)
* [Application (large print)](https://www.michigan.gov/documents/sos/AV_Ballot_App_lg_print_470379_7.pdf)

**Requests by Mail**
* Must be received by your clerk no later than 5 p.m. the Friday before the election

**Requests in Person**
* At your clerk’s office anytime up to 4 p.m. on the day prior to the election
    * If you request your AV ballot the day before the election or on election day, you must vote the ballot in the clerk's office.

[Source: michigan.gov](https://www.michigan.gov/sos/0,4670,7-127-1633_8716-21037--,00.html)

## Mailing the Absentee Ballot

Please return it to your local clerk's office. If the address is not provided on the return envelope, it can be found through the [Michigan Voter Information Center](https://mvic.sos.state.mi.us/).

[Source: michigan.gov](https://www.michigan.gov/sos/0,4670,7-127-5647_12539_29836-182612--,00.html)

## Requesting an Emergency Absentee Ballot

You may make an "emergency" request for an absentee ballot if you cannot attend the polls because of:
* personal injury or illness
* a family death or illness that requires you to leave your community for the entire time the polls are open on election day

The emergency must have occurred after 5:00 pm on Friday prior to the election. If you are requesting an emergency absentee ballot, you may have someone deliver your written request for the ballot to your city or township clerk's office before 4 p.m. on election day.

Emergency ballots must be returned to the clerk's office by 8 p.m. on election day.

[Source: michigan.gov](https://www.michigan.gov/sos/0,4670,7-127-1633_8716_8728-34991--,00.html)
`;

export const AbsenteeBallView: NarwhalRoute = () => {
  return <MarkdownView markdown={COPY} />;
};

AbsenteeBallView.navigationOptions = {
  title: "Absentee Ballots",
};
