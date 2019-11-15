import { NarwhalRoute } from "../routes";
import { MarkdownView } from "../../components/MarkdownView";
import * as React from "react";

const COPY = `# Miscellaneous Questions

- Do I have to show my voter registration card in order to vote?
    * No. As long as you are in the correct polling location, your name will appear on the registration list supplied to your precinct. The Voter Identification Card is for your reference and is not required to vote.

- Do I need to show identification in order to vote?
    * Michigan requires voters to show a form photo identification at the polls. Michigonians without a valid photo ID **can** still vote, after signing an affidavit attesting that they do not possess picture identification.

    * **Note**: IDs do not need your address.

    * More about the voter ID requirement can be found [here](VoterID).

- Can Michigan residents in jail or prison still vote?
    * Michigan residents confined in jail or prison who are awaiting arraignment or trial are eligible to vote. However, residents who are serving a sentence in jail or prison after conviction cannot vote during the period of confinement. When residents are released from jail or prison after serving a sentence, they are free to participate in elections without restriction.


- Can I wear election-related clothing to the polls?
    * No. Michigan has prohibited the practice of displaying election-related materials at the polls for decades. This includes clothing and buttons as well as materials such as pamphlets, fliers and stickers. You cannot display such items in the polling place or within 100 feet of an entrance to a polling place. If you go to the polls with a shirt or button bearing election-related images or slogans, you will be asked to cover or remove it.

- Do I have to vote the entire ballot?
    * You are not required to vote the entire ballot. You may pick and choose the races or ballot questions for which you want to vote. Skipping sections of the ballot does not invalidate your ballot.

- Can I vote a "split" ticket?
    * August Primary
        * You cannot "split" your ticket (i.e., vote in more than one party column) when voting in the August primary. Voters participating in an August primary
must confine their votes to a single party column.

    * November General Election
        * You can "split" your ticket when voting in the November general election. A voter participating in a November general election who wishes to cast a "split" ticket can vote for individual candidates of his or her choice under any party.

- Can voters be challenged based on home foreclosures?
    * The compilation of home foreclosure information alone does not provide sufficient reason to challenge a person's voting status. In fact, the Michigan Republican and Democratic parties are in agreement that so-called foreclosure lists do not provide a reasonable basis to challenge voters.

- Can I use a camera in the polls?
    * No. The use of video cameras, still cameras and other recording devices are prohibited in the polls when they are open for voting. This includes still cameras and other recording features built into many cell phones. The ban applies to all voters, challengers, poll watchers and election workers. Exceptions are made for credentialed members of the news media though certain restrictions remain.

- Are absentee ballots always counted?
    * Yes. Absent voter ballots simply allow voters who are eligible to cast ballots prior to Election Day. They are counted on Election Day along with all ballots voted at the polls.

[Source: michigan.gov](https://www.michigan.gov/sos/0,4670,7-127-1633_8716-202476--,00.html)`;

export const FAQMiscView: NarwhalRoute = () => {
  return <MarkdownView markdown={COPY} />;
};

FAQMiscView.navigationOptions = {
  title: "Miscellaneous Issues",
};
