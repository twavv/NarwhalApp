const BASE_URL = `https://www.googleapis.com/civicinfo/v2/representatives`;
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
  const url = `${BASE_URL}?key=${API_KEY}&address=${addressEsc}`;
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
