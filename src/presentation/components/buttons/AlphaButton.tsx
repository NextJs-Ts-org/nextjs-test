"use client";
import "./style.scss";
import Link from "next/link";

interface Props {
  text: string;
  href: string;
}

export function AlphaButton({ text, href }: Props) {
  return (
    <Link className={"button"} href={href}>
      <p>{text}</p>
    </Link>
  );
}
