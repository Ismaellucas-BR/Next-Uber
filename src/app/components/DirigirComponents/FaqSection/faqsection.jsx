import React from "react";
import FAQ from "../../FaqComponents/FAQ";

function Faqsection() {
  return (
    <div className="loginRedirect flex flex-col mt-20  pr-4 w-full max-w-7xl mx-auto py-5 px-5">
      <h2 className="text-gray-700 text-3xl cta-text mb-8 sm:mt-36 sm:text-5xl sm:leading-tight font-txt-bold md:mt-10 md:text-[30px]">
        Perguntas frequentes
      </h2>
      <div className="py-4">
        <FAQ />
      </div>
    </div>
  );
}

export default Faqsection;
