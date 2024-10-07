import React from "react";
import Hexagon from "../assets/images/hexagon.png";
import Text from "../assets/images/wave-pay-text.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-screen relative bg-primary-100 text-white px-8 lg:px-24 overflow-y-hidden">
      {/* Centered Geometric Shape */}
      <div className="absolute inset-0 left-72 top-20 flex justify-center items-center z-0 opacity-80 hidden lg:block">
        <img
          src={Hexagon}
          alt="Hexagon Shape"
          className="w-64 h-80 md:w-96 md:h-96 lg:w-[1300px] lg:h-[890px]"
        />
      </div>

      <div className="absolute inset-0 left-[18%] top-80 flex justify-center items-center z-0 opacity-80 hidden lg:block">
        <img
          src={Text}
          alt=""
          className="mb-20 w-auto h-64 md:w-auto md:h-96 lg:w-[1200px] lg:h-[200px] "
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full lg:flex-row lg:justify-between">
        {/* Left Content */}
        <div className="max-w-md text-center mb-8 lg:mb-0 lg:text-left">
          <p className="text-sm md:text-lg uppercase tracking-widest text-nowrap mb-4">
            Your Gateway to Fast and Secure Payments
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-normal">
            PAY, RECEIVE, SEND, STORE, AND EXCHANGE.
          </h1>
          <Link to="/dashboard">
            <div className="lg:ml-0 ml-[28%]">
              <button className="px-4 py-3 w-[200px] md:px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-sm md:text-base rounded-full border-2 border-white shadow-lg hover:bg-blue-400 transition-all">
                Explore
              </button>
            </div>
          </Link>
        </div>

        {/* Right Content */}
        <div className="max-w-sm text-center mb-8 lg:mt-40 lg:text-left">
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
