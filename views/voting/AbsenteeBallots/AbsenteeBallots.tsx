import * as React from "react";
import Markdown from "react-native-markdown-renderer";

import { NarwhalRoute } from "../../routes";

const copy = `# Absentee Ballots

You can vote absentee for any reason.

## Process
* Foo
* Bar

**Hi Emmett!**`;

export const AbsenteeBallotsView: NarwhalRoute = () => {
  return <Markdown>{copy}</Markdown>;
};
