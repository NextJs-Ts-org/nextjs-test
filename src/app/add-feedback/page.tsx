import { GoBack } from "@/presentation/components/goBack/GoBack";
import "@/presentation/styles/layout.scss";
import "@/presentation/add-feedback/styles.scss";
import { Select } from "@/presentation/components/form-elements/Select";

export default function AddFeedback() {
  return (
    <main className={"page add-feedback-page"}>
      <GoBack goBackTo={"/"} />
      <form className={"add-feedback-form-wrapper"}>
        <h1>Create new feedback</h1>
        <div className={"form-element"}>
          <label>Feedback Title</label>
          <p>Add a short, descriptive, headline</p>
          <input name={"title"} />
        </div>
        <div className={"form-element"}>
          <label>Feedback Title</label>
          <p>Add a short, descriptive, headline</p>
          <Select />
        </div>
        <div className={"form-element"}>
          <label>Feedback Title</label>
          <p>Add a short, descriptive, headline</p>
          <input name={"title"} />
        </div>
      </form>
    </main>
  );
}
