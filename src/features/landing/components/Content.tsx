"use client";

import Image from "next/legacy/image";
import Link from "next/link";

type Texts = {
  contentFirstParagraph: string;
  contentSecondParagraph: string;
  cardTitle: string;
  cardText: string;
  cardButton: string;
};

type ContentProps = {
  texts?: Texts;
};

const Content: React.FC<ContentProps> = ({ texts }) => {
  return <div className="bg-black relative h-120"></div>;
};

export default Content;
