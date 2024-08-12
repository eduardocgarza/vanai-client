import React from "react";
import { ArrowRightIcon, GlobeAltIcon } from "@heroicons/react/20/solid";

export default function WebsiteItem(props) {
  const { website } = props;

  return (
    <a href={website.url} className="relative" target="_blank" rel="noreferrer">
      <header className="overflow-hidden h-[300px] rounded-2xl mb-4 relative border border-gray-100 shadow-md hover:shadow-lg transition duration-250 ease-in-out">
        <img
          src={website.previewImage}
          alt={website.title}
          className="block w-full h-full object-cover transform scale-125"
        />
      </header>
      <section>
        <header className="mb-1 flex items-center">
          <h2 className="flex items-center text-[12.5px] bg-blue-600 text-white rounded-full  py-0.5 mb-1 px-2">
            <GlobeAltIcon className="w-4 h-4 text-white" />
            <span className="ml-1">Site</span>
          </h2>
        </header>
        <header className="mb-1">
          <h2 className="text-[17px] leading-[125%] font-semibold mb-1 text-gray-900">
            Emerson {website.name}{" "}
            <ArrowRightIcon className="w-4 h-4 inline-block" />
          </h2>
          <p className="text-[13.5px] text-gray-700">{website.description}</p>
        </header>
      </section>
    </a>
  );
}
