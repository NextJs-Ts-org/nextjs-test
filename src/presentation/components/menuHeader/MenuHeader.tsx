import "./style.scss";
import "../../styles/typography.scss";
import { AlphaButton } from "../buttons/AlphaButton";

export function MenuHeader() {
  return (
    <div className={"wrapper"}>
      <div className={"wrapper-child-first"}>
        <p className={"body-3"}>Sort by:</p>
        <p className={"body-3"}>Most upvotes</p>
      </div>
      <AlphaButton text={"+ Add Feedback"} href={"/add-feedback"} />
    </div>
  );
}
