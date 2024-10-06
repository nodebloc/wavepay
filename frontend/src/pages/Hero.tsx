import React from "react";
import Hexagon from "../assets/images/hexagon.png";

const Hero = ({ onConnect }) => {
  return (
    <section className="h-screen relative bg-primary-100 text-white px-8 lg:px-24 overflow-y-hidden">
      {/* Centered Geometric Shape */}
      <div className="absolute inset-0 left-64 top-20 flex justify-center items-center z-0 opacity-80 hidden lg:block">
        <img 
          src={Hexagon} 
          alt="Hexagon Shape" 
          className="w-64 h-64 md:w-96 md:h-96 lg:w-[1200px] lg:h-[800px]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full lg:flex-row lg:justify-between">
        {/* Left Content */}
        <div className="max-w-md text-center mb-8 lg:mb-0 lg:text-left">
          <p className="text-sm md:text-lg uppercase tracking-widest mb-4">
            Blockchain payment processing gateway
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-normal">
            RECEIVE, SEND, STORE, EXCHANGE, AND PAY.
          </h1>
          <button 
            onClick={onConnect}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm md:text-base rounded-full border-2 border-white shadow-lg hover:from-blue-400 hover:to-blue-600 transition-all"
          >
            Connect Wallet
          </button>
        </div>

        {/* Right Content */}
        <div className="max-w-sm text-center mb-8 lg:mb-0 lg:text-left">
          <p className="text-sm md:text-lg leading-relaxed">
            Our platform enables businesses to seamlessly pay salaries to their
            employees, while Web3 developers can receive payments in crypto and
            instantly convert them to local fiat at the best rates, with zero
            hidden fees. Additionally, users can pay for utilities directly with
            stablecoins. Fiat on- and off-ramps are fully supported.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;