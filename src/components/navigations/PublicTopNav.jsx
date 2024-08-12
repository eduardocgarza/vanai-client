import React from "react";
import { Link } from "react-router-dom";
import vanAiLogo from "../../../public/vanai.png";

export default function PublicTopNav() {
  return (
    <div className="h-[60px] w-full border-b border-b-gray-300 px-4 py-1">
      <div className="container mx-auto">
        <section className="flex justify-between">
          <nav id="left">
            <Link to="/" className="h-[50px] flex items-center justify-center">
              <img
                src={vanAiLogo}
                alt="vanAI Logo"
                className="block w-[40px] h-[40px] cursor-pointer mr-3 rounded-xl"
              />
            </Link>
          </nav>
          <nav id="right" className="flex items-center">
            <a
              href="https://discord.gg/yuPMuDDFzp"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-800 mx-2"
            >
              Discord
            </a>
            <a
              href="https://www.meetup.com/vancouverai"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-800 mx-2"
            >
              Meetup
            </a>
            <a
              href="https://lu.ma/van-ai"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-800 mx-2"
            >
              Lu.ma
            </a>
            
          </nav>
        </section>
      </div>
    </div>
  );
}
