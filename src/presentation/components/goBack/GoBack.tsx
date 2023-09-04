import "./styles.scss";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";

interface Props {
  goBackTo: string;
}

export function GoBack({ goBackTo }: Props) {
  return (
    <Link className={"go-back-wrapper"} href={goBackTo}>
      <MdKeyboardArrowLeft />
      <p>Go Back</p>
    </Link>
  );
}
