import Image from "next/image";
import React from "react";
import RideWithUber from "../../../../public/assets/Ride-with-Uber.webp";
function FirtsSection() {
  return (
    <div className="w-full bg-black">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl  mx-auto  pt-10 px-5 bg-black sm:pt-20 md:gap-5 lg:flex sm:pb-10 ">
        <div className="left-side w-full   flex-col lg:ml-4 lg:h-screen lg:w-2/5">
          <h2 className="text-white text-4xl cta-text lg:mt-36 sm:text-5xl sm:leading-tight	">
            Vá a qualquer lugar com o app da Uber
          </h2>
          <p className="text-white">
            Solicite uma viagem, entre no carro e relaxe.
          </p>
          <a className=" btn-price text-slate-200 ">Ver preços</a>
        </div>
        <div className="right-side mt-10  flex justify-end pb-10 lg:mt-0 lg:w-3/5 lg:px-28">
          <Image
            className="rounded-md w-full "
            src="/assets/Ride-with-Uber.webp"
            alt="Mulher saindo do carro"
            layout="intrinsic"
            width={558}
          height={298}
          />
        </div>
      </section>
    </div>
  );
}

export default FirtsSection;
