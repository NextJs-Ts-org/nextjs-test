interface Suggestion {
  id: string;
  title: string;
  description: string;
  type: string;
  numberOfVotes: number;
  numberOfComments: number;
}

export const fetchSuggestions = async (): Promise<Suggestion[]> => {
  const res = await fetch("http://localhost:3000/api/suggestions", {
    cache: "no-store",
  });
  if (!res.ok) {
    return [];
  }
  return res.json();
};
