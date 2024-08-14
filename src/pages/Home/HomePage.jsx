import React from "react";
import NewsletterSection from "./components/NewsletterSection";
import GiveawaySection from "./components/GiveawaySection";
import EventsSearchNav from "./components/EventsSearchNav";
import EventsSection from "./components/EventsSection";
import VideoItem from "./components/VideoItem";
import vanAiLogo from "../../../public/vanai.png";
import WebsiteItem from "../../components/products/WebsiteItem";
import ServiceItem from "../../components/products/ServiceItem";
import {
  EMERSON_PLATFORMS,
  EMERSON_SERVICES,
  EMERSON_WEBSITES,
} from "../../data/emersonData";
import Intercom from "@intercom/messenger-js-sdk";

export default function HomePage() {
  Intercom({
    app_id: "iwce5cdu",
  });

  return (
    <section className="py-10 px-6 bg-[#D8612F] min-h-screen text-white">
      <div className="container mx-auto">
        <section className="pt-10 pb-[100px] bg-white rounded-3xl shadow-md mb-10">
          <header className="text-center">
            <img
              src={vanAiLogo}
              alt="vanAI Logo"
              className="block w-[100px] h-[100px] cursor-pointer rounded-3xl mx-auto mb-6"
            />
            <h1 className="font-bold text-3xl text-gray-800 mb-2">vanAi</h1>
            <p className="text-[13px] text-gray-800 leading-[26px] sm:w-2/3 lg:w-1/3 mx-auto">
              vanAI fosters an inclusive community focused on practical AI
              applications in Vancouver's tech ecosystem. We bridge theoretical
              AI concepts with real-world implementation, making cutting-edge
              technology accessible to all.
            </p>
          </header>
        </section>

        <section className="p-10 rounded-3xl bg-white text-black">
          <EventsSection />
          <NewsletterSection />
        </section>
      </div>
    </section>
  );
}
