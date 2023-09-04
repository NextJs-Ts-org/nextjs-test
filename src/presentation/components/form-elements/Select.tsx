import "./styles.scss";

export function Select() {
  return (
    <div className={"select-wrapper"}>
      <select>
        <option value={"1"}>UI</option>
        <option value={"2"}>UX</option>
        <option value={"3"}>Enhancement</option>
        <option value={"4"}>Bug</option>
        <option value={"5"}>Feature</option>
      </select>
    </div>
  );
}
