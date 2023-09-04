import { fetchSuggestions } from "@/data-access/fetch-suggestions";

export const useHomePage = async () => {
  const suggestions = await fetchSuggestions();
  return {
    suggestions,
  };
};
