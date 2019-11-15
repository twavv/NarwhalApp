import { NarwhalRoute } from "../routes";
import { MarkdownView } from "../../components/MarkdownView";
import * as React from "react";

const COPY = `# Voter ID Requirement

Michigan requires voters to show a form photo identification at the polls.
Michigonians without a valid photo ID **can** still vote, after signing an
affidavit attesting that they do not possess picture identification.

**Note**: IDs do not need your address.

## Valid Identification

The following identity documents can be used to satisfy the ID requirement
if they are current:

- Michigan driver’s license
- Michigan personal identification card
- Driver’s license or personal ID card issued by another state
- Federal or state government-issued photo ID
- U.S. passport
- Military identification card with photo
- Student identification with photo from a high school or an
accredited institution of higher education
- Tribal identification card with photo

## Voting without ID
Voters who do not have acceptable picture ID or forgot to bring acceptable
picture ID to the polls can vote like any other voter by signing an affidavit.

More information can be found [here](https://www.michigan.gov/sos/0,4670,7-127-1633_8716-178123--,00.html).`;

export const FAQVoterId: NarwhalRoute = () => {
  return <MarkdownView markdown={COPY} />;
};

FAQVoterId.navigationOptions = {
  title: "Voter ID",
};
