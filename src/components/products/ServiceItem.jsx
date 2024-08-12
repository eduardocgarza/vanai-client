import React from "react";
import { GlobeAltIcon } from "@heroicons/react/20/solid";

export default function ServiceItem(props) {
  const { service } = props;

  return (
    <section className="relative">
      <header className="overflow-hidden h-[300px] rounded-2xl mb-4 relative border border-gray-100 shadow-md hover:shadow-lg transition duration-250 ease-in-out">
        <img
          src={service.previewImage}
          alt={service.title}
          className="block w-full h-full object-cover transform scale-125"
        />
      </header>
      <section>
        <header className="mb-1 flex items-center">
          <h2 className="flex items-center text-[12.5px] bg-yellow-400 text-gray-800 rounded-full  py-0.5 mb-1 px-2">
            <GlobeAltIcon className="w-4 h-4" />
            <span className="ml-1">Service</span>
          </h2>
        </header>
        <header className="mb-1">
          <h2 className="text-[17px] leading-[125%] font-semibold mb-1 text-gray-900">
            Emerson {service.name}
          </h2>
          <p className="text-[13.5px] text-gray-700">{service.description}</p>
        </header>
      </section>
    </section>
  );
}
