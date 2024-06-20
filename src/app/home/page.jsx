import "../Home/Home.css";
import React from "react";
import ThirdSection from "../Components/HomeComponents/thirdSection";
import FifthSection from "../Components/HomeComponents/fifthSection";
import SecondSc from "../Components/HomeComponents/secondSc";
import FirtsSection from "../components/HomeComponents/FirtsSection";
function Home() {
  return (
    <main>
      <FirtsSection/>
      <SecondSc/>
      <ThirdSection />
      <FifthSection />
    </main>
  );
}

export default Home;
