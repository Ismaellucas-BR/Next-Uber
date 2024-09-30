import React from "react";
import Link from "next/link";
import Image from "next/image";
function ThirdSection() {
  return (
    <div className="w-full bg-white">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto pt-10 md:pt-5 px-5 bg-white sm:pt-20 lg:flex sm:pb-10">
        <div className="left-side w-full   flex-col lg:ml-4 lg:h-screen lg:w-2/5">
          <h2 className="text-slate-800 text-4xl cta-text lg:mt-20 sm:text-5xl sm:leading-tight	">
            A plataforma Uber que você conhece, reinventada para empresas
          </h2>
          <p className="text-slate-800">
            A Uber para Empresas é uma plataforma global de gestão de viagens,
            refeições e entregas locais para empresas de todos os portes
          </p>
          <div className="loginRedirect flex items-center mt-4">
            <Link 
              target="_blank" 
              className="btn-start mr-4" 
              href="https://www.uber.com/br/pt-br/business/?uclick_id=bf765484-6082-4c24-863d-1244774412a7">
                Começar
            </Link>
            <Link 
              target="_blank" 
              className="text-black mt-4 border-b pb-1" 
              href="https://www.uber.com/br/pt-br/business/?uclick_id=bf765484-6082-4c24-863d-1244774412a7">
                Confira nossas soluções
            </Link>
          </div>
        </div>
        <div className="right-side mt-5 md:mt-10  flex justify-end pb-10  lg:mt-0 lg:w-3/5">
          <Image className="rounded-md w-full lg:w-4/5" src="/assets/u4b-square.webp" layout="resposive" width={800} height={800} alt="Mulher saindo do carro" />
        </div>
      </section>
    </div>
  );
}

export default ThirdSection;
