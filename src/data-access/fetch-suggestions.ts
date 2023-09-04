import { headers } from "next/dist/client/components/headers";

interface Suggestion {
  id: string;
  title: string;
  description: string;
  type: string;
  numberOfVotes: number;
  numberOfComments: number;
}

function isAuth() {
  const headersList = headers();
}

export const fetchSuggestions = async (): Promise<Suggestion[]> => {
  isAuth();

  const res = await fetch("http://localhost:3000/api/suggestions", {});
  if (!res.ok) {
    return [];
  }
  return res.json();
};
