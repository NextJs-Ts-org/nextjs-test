import { NextResponse } from "next/server";

export const GET = async () => {
  const suggestions = [
    {
      id: "1",
      title: "Add tags for solutions",
      description: "Easier to search for solutions based on a specific stack.",
      type: "Enhancement",
      numberOfVotes: 112,
      numberOfComments: 2,
    },
    {
      id: "2",
      title: "Do TDD",
      description: "Features delivered with high certainty",
      type: "Enhancement",
      numberOfVotes: 1000,
      numberOfComments: 1,
    },
    {
      id: "3",
      title: "Drink beer while coding",
      description: "TDD + beer = love.",
      type: "Feature",
      numberOfVotes: 500,
      numberOfComments: 450,
    },
  ];
  return NextResponse.json(suggestions);
};
