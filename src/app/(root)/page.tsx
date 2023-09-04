import { MenuHeader } from "@/presentation/components/menuHeader/MenuHeader";
import "@/presentation/root/root.scss";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { useHomePage } from "@/business-logic/useHomePage";

export default async function Home() {
  const { suggestions } = await useHomePage();
  return (
    <main>
      <div className={"boxes-wrapper"}>
        <div className={"purple-box"}>
          <p className={"purple-box-header"}>Next.js playground</p>
          <h5 className={"purple-box-subheader"}>Feedback board</h5>
        </div>
        <div className={"box"}></div>
        <div className={"box"}></div>
      </div>
      <div className={"content"}>
        <MenuHeader />
        <div className={"elements"}>
          {suggestions.map((suggestion) => (
            <div className={"element"} key={suggestion.id}>
              <h1>{suggestion.title}</h1>
              <p>{suggestion.description}</p>
              <div className={"tag"}>
                <p>{suggestion.type}</p>
              </div>
              <div className={"details"}>
                <div className={"details-votes"}>
                  <MdKeyboardArrowUp />
                  <p>{suggestion.numberOfVotes}</p>
                </div>
                <div className={"details-comments"}>
                  <FaComment />
                  <p>{suggestion.numberOfComments}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
