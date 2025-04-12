"use client";

import Content from "./Content";

const Landing = () => {
  return (
    <div className="">
      <Content
        texts={{
          contentFirstParagraph: "contentFirstParagraph",
          contentSecondParagraph: "contentSecondParagraph",
          cardTitle: "cardTitle",
          cardText: "cardText",
          cardButton: "cardButton",
        }}
      />
    </div>
  );
};

export default Landing;
