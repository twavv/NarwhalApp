import * as React from "react";
import { NarwhalRoute } from "../routes";
import { usePromise } from "../../hooks/usePromise";
import { getVoterInfo, VoterInfoResponse } from "../myreps/api";
import { ScrollView, Text, View } from "react-native";
import { AddressEntry } from "../myreps/AddressEntry";

export const ElectionInfoView: NarwhalRoute = () => {
  const [address, setAddress] = React.useState<string>("");
  const voterInfo = usePromise(async () => {
    if (!address) {
      return null;
    }
    return await getVoterInfo(address);
  }, [address]);
  return (
    <ScrollView>
      <AddressEntry onSubmit={(value) => setAddress(value)} />
      <VoterInfo data={voterInfo} />
    </ScrollView>
  );
};

ElectionInfoView.navigationOptions = {
  title: "Upcoming Elections",
};

const VoterInfo: React.FC<{ data: VoterInfoResponse | null }> = ({ data }) => {
  if (!data) {
    return null;
  }

  const { contests, election } = data;

  return (
    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
      <Text style={{ fontSize: 16 }}>Upcoming Election</Text>
      <Text style={{ fontSize: 16 }}>On {election.electionDay}</Text>
      <Text style={{ fontSize: 24 }}>{election.name}</Text>
      <View>
        {contests.map((contest, i) => (
          <ContestInfo key={i} data={contest} />
        ))}
      </View>
    </View>
  );
};

const ContestInfo: React.FC<{ data: VoterInfoResponse["contests"][0] }> = ({
  data,
}) => {
  const { candidates } = data;
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 20 }}>{data.office}</Text>
      {candidates
        ? candidates.map((candidate, i) => (
            <CandidateInfo key={i} data={candidate} />
          ))
        : null}
    </View>
  );
};

const CandidateInfo: React.FC<{
  data: VoterInfoResponse["contests"][0]["candidates"][0];
}> = ({ data }) => {
  return (
    <View>
      <Text style={{ fontSize: 16 }}>{data.name}</Text>
      <Text style={{ fontSize: 12 }}>Party: {data.party}</Text>
    </View>
  );
};
