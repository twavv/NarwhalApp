import { NarwhalRoute } from "../routes";
import { MarkdownView } from "../../components/MarkdownView";
import * as React from "react";

const COPY = `# Information for Transgender Voters

We understand that having legal documentation that does not accurately reflect personal identities can present certain challenges for transgender voters.

Michigan requires voters to show a form photo identification at the polls. Michigonians without a valid photo ID *can* still vote, after signing an affidavit attesting that they do not possess picture identification.

For more information, check out the National Center For Transgender Equality's [\#VotingWhileTrans Guide](https://transformthevote.org/s/voting-while-trans-c4-en.pdf).

Para obtener información, mire la [Guía de \#VotingWhileTrans](https://transformthevote.org/s/voting-while-trans-c4-es-final.pdf) de National Center For Transgender Equality.`;

export const FAQTransInfoView: NarwhalRoute = () => {
  return <MarkdownView markdown={COPY} />;
};

FAQTransInfoView.navigationOptions = {
  title: "Transgender Issues",
};
