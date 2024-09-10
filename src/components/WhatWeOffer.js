import React from "react";
import WhatWeOfferCrad from "./WhatWeOfferCrad";
import { whatWeOfferArray } from "../utils/utils";

const WhatWeOffer = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-mono text-center underline underline-offset-4 text-white sm:text-black">What We Offer?</h1>
      <div className="flex flex-col flex-wrap gap-4 justify-center sm:flex-row">
        {whatWeOfferArray.map((item, index) => (
          <WhatWeOfferCrad key={index} whatWeOfferArray={item} />
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
