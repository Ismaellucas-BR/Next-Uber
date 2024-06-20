"use client";
import React from "react";
import Image from "next/image";
function ThirdSectiondg() {
  return (
    <div className="w-full bg-white">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto pt-10 px-5 bg-white sm:pt-5 sm:flex sm:flex-col">
        <div className="left-side w-full   flex-col sm:ml-4 sm:h-auto">
          <h2 className="text-gray-900 text-2xl cta-text sm:mt-3 lg:text-4xl sm:leading-tight	">
            Por que se tornar um motorista de aplicativo?
          </h2>
          <div className="flex justify-center">
            <Image
              className="rounded-md w-12/12 my-20  lg:mt-5 lg:w-9/12"
              src="/assets/u4b-square.webp"
              alt="Mulher saindo do carro"
              layout="responsive"
              width={800} 
              height={800}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 ">
          <div className="w-full flex flex-col gap-2 lg:w-1/3">
          <Image
              src="/assets/car_front_filled.jpg"
              alt="Mulher saindo do carro"
              layout="responsive"
              width={20} 
              height={20}
            />
            <h4 className="text-h4-bold text-xl">Faça o seu próprio horário</h4>
            <p className="text-lg">
              Alguns empregos de motorista podem significar longos dias de
              trabalho e horários rígidos. Se você se tornar um motorista
              parceiro da Uber, você decide quando e com que frequência você
              dirige.
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 my-10 lg:w-1/3 lg:my-0">
          <Image
              src="/assets/credit_card_filled.jpg"
              alt="Mulher saindo do carro"
              layout="responsive"
              width={20} 
              height={20}
            />
            <h4 className="text-h4-bold text-xl">Ganhe dinheiro rapidamente</h4>
            <p className="text-lg">
              Quando você se torna um motorista parceiro do app da Uber, os seus
              ganhos são transferidos automaticamente para sua conta bancária
              todas as semanas ou, se solicitar uma Uber Conta, o dinheiro entra
              na sua conta após o final da viagem.
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 lg:w-1/3">
          <Image
              src="/assets/support.jpg"
              alt="Mulher saindo do carro"
              layout="responsive"
              width={20} 
              height={20}
            />
            <h4 className="text-h4-bold text-xl">Obtenha suporte constante</h4>
            <p className="text-lg">
              Se você tiver dúvidas, fale com a gente a qualquer momento online
              ou pelo app. Pergunte sobre checagens de segurança, promoções
              semanais, como receber pagamentos e muito mais.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ThirdSectiondg;
