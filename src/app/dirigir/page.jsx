import Appparceiro from "../../../src/app/components/DirigirComponents/AppParceiro/appparceiro";
import Faqsection from "../../../src/app/components/DirigirComponents/FaqSection/faqsection";
import FirstSectiondg from "../../../src/app/components/DirigirComponents/FirstSectionDG/firstsectiondg";
import SecondSectiondg from "../../../src/app/components/DirigirComponents/SecondSectionDG/secondSectiondg";
import SixSectionDG from "../../../src/app/components/DirigirComponents/SixSectionDG/SixSectionDG";
import FourthSectiondg from "../../../src/app/components/DirigirComponents/fourthSectionDG/fourthSectiondg";
import SeventhSectionDG from "../../../src/app/components/DirigirComponents/seventhSectionDG/seventhSectionDG";
import ThirdSectiondg from "../../../src/app/components/DirigirComponents/thirdSectionDG/thirdSection";
import React from "react";
function Dirigir() {
  return (
    <main>
      <FirstSectiondg />
      <SecondSectiondg/>
      <ThirdSectiondg />
      <FourthSectiondg />
      <SixSectionDG />
      <SeventhSectionDG />
      <Appparceiro />
      <Faqsection />
    </main>
  );
}

export default Dirigir;
