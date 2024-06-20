
import React from "react";
import Image from "next/image";
import "../FirstSectionDG/firstSectiondg.css";
function SecondSectiondg() {
  return (
    <div className="w-full  border-t border-white sm:h-screen">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto py-10 px-5  sm:pt-10 sm:flex sm:pb-10">
        <div className="left-side w-full   flex-col sm:ml-4 sm:pb-10   lg:w-1/2">
        <Image
            className="rounded-md "
            src="/assets/illustration-safety-01-1.webp"
            layout="intrinsic"
            width={500}
            height={500}
            alt="Mulher saindo do carro"
          />
         
        </div>
        <div className="right-side mt-5  hidden justify-end pb-10 sm:mt-0 sm:w-1/2  lg:flex lg:justify-start lg:pl-32">
        <h2 className="text-white text-4xl cta-text sm:mt-10 sm:text-5xl sm:leading-tight font-txt-bold">
            Dirija quando quiser e ganhe de acordo com suas necessidades
          </h2>
          <p className="text-white mt-4 text-base font-txt">
            Gere ganhos no horário que quiser.
          </p>
          <div className="loginRedirect flex items-center mt-4">
            <a className="btn mr-4 bg-white ">Começar</a>
            <p className="text-white mt-4 border-b pb-1 font-txt">
              Já tem uma conta? Fazer login
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondSectiondg;
