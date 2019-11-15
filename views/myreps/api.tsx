const BASE_URL = `https://www.googleapis.com/civicinfo/v2`;
const API_KEY = `AIzaSyBJFANTtxf46Vzj6CTD5GYJ_pHNgWdJLmo`;

interface GetRepresentativesResponse {
  offices: Array<{
    name: string;
    divisionId: string;
    levels: string[];
    roles: string[];
    officialIndices: number[];
  }>;
  officials: Array<{
    name: string;
    address?: {
      line1: string;
      line2: string;
      line3: string;
      city: string;
      state: string;
      zip: string;
    };
    party: string;
    phones?: string[];
    urls?: string[];
    photoUrl?: string;
    channels?: Array<{
      // e.g. "Facebook" or "Twitter" or "YouTube"
      type: string;
      id: string;
    }>;
  }>;
}
export async function getRepresentatives(
  address: string,
): Promise<Representative[]> {
  const addressEsc = encodeURIComponent(address);
  const url = `${BASE_URL}/representatives?key=${API_KEY}&address=${addressEsc}`;
  const resp = await fetch(url);
  const data: GetRepresentativesResponse = await resp.json();
  if (!data.offices || !data.officials) {
    console.error(data);
    throw new Error(`Unexpected API response!`);
  }
  // if (data.offices.length !== data.officials.length) {
  //   console.error({
  //     offices: data.offices.map((o) => o.name),
  //     officials: data.officials.map((o) => o.name),
  //   });
  //   throw new Error(`Length mismatch between offices and officials.`);
  // }

  return data.offices.flatMap((office, i): Representative[] => {
    return office.officialIndices.map((i) => {
      const official = data.officials[i];
      return {
        title: office.name,
        ...official,
      };
    });
  });
}

type _Representative = GetRepresentativesResponse["officials"][0];
export interface Representative extends _Representative {
  // e.g. "US Senator"
  title: string;
}

// This corresponds to the test election id that exists inside Google's Civics
// API. It would need to be updated to correspond to a real election.
const ELECTION_ID = 2000;
export async function getVoterInfo(address) {
  const addressEsc = encodeURIComponent(address);
  const url = `${BASE_URL}/voterinfo?key=${API_KEY}&address=${addressEsc}&electionId=${ELECTION_ID}`;
  const resp = await fetch(url);
  const data: VoterInfoResponse = await resp.json();
  return data;
}

export interface VoterInfoResponse {
  election: {
    id: string;
    name: string;
    electionDay: string;
    ocdDivisionId: string;
  };
  contests: Array<{
    type: string;
    office: string;
    level: string[];
    roles: string[];
    district: {
      name: string;
      scope: string;
    };
    candidates: Array<{
      name: string;
      party: string;
      candidateUrl?: string;
      channels: Array<{
        type: string;
        id: string;
      }>;
      sources: Array<{
        name: string;
        official: boolean;
      }>;
    }>;
  }>;
}
