import React from "react";
import Image from "next/image";

function SeventhSectionDG() {
  return (
    <div className="w-full flex sm:hidden ">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto py-5 px-5 bg-white sm:pt-10 sm:flex sm:pb-10 md:flex md:flex-col">
        <div className="left-side w-full   flex-col sm:ml-4 sm:h-auto sm:w-2/5 md:w-full lg:hidden">
          <h2 className="text-black text-3xl cta-text sm:mt-36 sm:text-5xl sm:leading-tight font-txt-bold md:mt-0">
            O app de parceiro
          </h2>
          <p className="text-black mt-4 text-base ">
            Confiável e fácil de usar, o app foi desenvolvido para os motoristas
            parceiros. Ele mostra tudo o que você precisa saber para se tornar
            um motorista parceiro da Uber.
          </p>
          <div className="loginRedirect flex items-center mt-4">
            <p className="text-black text-lg my-4 border-b pb-1 ">
              Veja como funciona
            </p>
          </div>
          <div className="mt-4 md:w-full sm:hidden">

          <Image
            className=""
            src="/assets/T_Driver_Campaign-Carbon-arabic2x.webp"
            layout="responsive"
            width={800}
            height={800}
            alt="Celular com mapa de cidade na tela"
          />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SeventhSectionDG;
