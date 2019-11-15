import { NarwhalRoute } from "../routes";
import { MarkdownView } from "../../components/MarkdownView";
import * as React from "react";

const COPY = `# Voter Registration

## Eligibility

* A resident of Michigan and the city or township where you are applying to
register to vote for at least 30 days before election day.
* A citizen of the United States of America.
* At least 18 years of age (by election day).
* Not serving a sentence in jail or prison.

## Application Forms

* [Voter Registration Application](https://www.michigan.gov/documents/MIVoterRegistration_97046_7.pdf)
* [Voter Registration Application (large print)](https://www.michigan.gov/documents/sos/Voter_Reg_Form_18_pt_type_470427_7.pdf)
* [Registro de votantes (En Español)](https://www.michigan.gov/documents/WebED121_SP_101264_7.pdf)

**Note**: Michigan does not currently allow online voter registration.
**Nota**: Del Estado de Michigan no permite el registro de votantes en línea.

### Greater than 15 Days of the Election
Individuals using any other method must register to vote at least 15 days
before Election Day and are not required to provide proof of residency.

### Within 14 Days of the Election
Individuals who register to vote within the 14-day period immediately preceding
an election must appear in person at their city or township clerk’s office and
provide proof of residency.

### Residency
Michigan law states that the same address must be used for voter registration
and driver's license purposes.
If the registration address is different from your driver's license or personal
identification card issued by the state of Michigan, the Secretary of State
will automatically change your driver's license or personal ID card address to
match the residence address entered on this form.
If a change is made, the Secretary of State will mail you an address update
sticker for your driver's license or personal ID card.

### Outside of the US
If you are living outside the U.S., you may send a
[Federal Postcard Application](https://www.fvap.gov/) to register to vote.
This application is distributed through U.S. embassies and military bases.
It also serves as a way to request an absentee ballot.

## Verify Your Voter Registration 

You can check your voter registration status through the
[Michigan Voter Information Center](https://mvic.sos.state.mi.us/).

[Source: michigan.gov](https://www.michigan.gov/sos/0,4670,7-127-1633_8716_8726_47669---,00.html)`;

export const RegistrationView: NarwhalRoute = () => {
  return <MarkdownView markdown={COPY} />;
};

RegistrationView.navigationOptions = {
  title: "Voter Registration",
};
