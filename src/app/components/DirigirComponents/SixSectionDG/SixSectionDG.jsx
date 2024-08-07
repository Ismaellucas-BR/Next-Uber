import React from "react";
import Image from "next/image";
function SixSectionDG() {
  return (
    <div className="w-full h-auto">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto py-5 px-5 bg-white sm:pt-10 sm:flex sm:pb-10 md:flex-col">
        <div className="left-side w-full   flex-col sm:ml-4 lg:h-auto  lg:w-full">
          <h2 className="text-black text-3xl cta-text lg:mt-10 sm:text-3xl sm:leading-tight font-txt-bold">
            Segurança ao volante
          </h2>
          <p className="text-black mt-4 text-lg lg:pr-[500px]">
            Buscamos incessantemente melhorar nossos padrões de qualidade, pois
            a sua segurança é nossa prioridade.
          </p>
          <div className="loginRedirect flex items-center mt-4">
            <p className="text-black text-base my-4 border-b pb-1 ">
              Veja como funciona
            </p>
          </div>
        </div>
        <div className="lg:flex lg:mt-5">
          <div className="loginRedirect flex flex-col mt-4 pr-14 md:mt-10 md:w-full lg:mt-0">
          <div className="w-12">
            <Image
              src="/assets/GPS-Tracking.jpg"
              alt="Mulher saindo do carro"
              layout="responsive"
              width={20} 
              height={20}
            />
          </div>
            <h4 className="text-h4-bold text-lg mt-4 mb-2 font-semibold">
              Proteção 24 horas por dia
            </h4>
            <p className="text-base">
              Bloqueamos viagens inseguras com a nossa tecnologia de
              inteligência artificial.
            </p>
            <div className=" inline-flex mt-6 mb-4">
              <p className="text-black font-txt-light border-b pb-1 text-base font-normal">
                Confira as informações
              </p>
            </div>
          </div>
          <div className="loginRedirect flex flex-col mt-4 pr-14 lg:mt-0">
          <div className="w-12">
            <Image
              src="/assets/24_7-Support.jpg"
              alt="Mulher saindo do carro"
              layout="responsive"
              width={20} 
              height={20}
            />
          </div>
            <h4 className="text-h4-bold mt-4 text-lg mb-2 font-semibold">
              Ajuda quando você precisar
            </h4>
            <p className="text-base">
              O botão de emergência chama o 911. O app mostra a sua localização
              e as informações da viagem para você poder compartilhá-los com
              rapidez em casos de emergência.
            </p>
            <div className=" inline-flex mt-6 mb-4">
              <p className="text-black font-txt-light border-b pb-1 text-base font-normal">
                Veja como funciona
              </p>
            </div>
          </div>
          <div className="loginRedirect flex flex-col mt-4 pr-14 lg:mt-0">
          <div className="w-12">
            <Image
              src="/assets/family.jpg"
              alt="Mulher saindo do carro"
              layout="responsive"
              width={20} 
              height={20}
            />
          </div>
            <h4 className="text-h4-bold mt-4 text-lg mb-2 font-semibold">
              Código da Comunidade Uber
            </h4>
            <p className="text-base">
              Nossos padrões ajudam a criar conexões seguras e interações
              positivas com todos. Veja como nosso código se aplica a você.
            </p>
            <div className=" inline-flex mt-6 mb-4">
              <p className="text-black font-txt-light border-b pb-1 text-base font-normal">
                Veja como funciona
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SixSectionDG;
