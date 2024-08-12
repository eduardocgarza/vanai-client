import siteEmersonAI from "../assets/sites/site-emerson-ai.png";
import siteEmersonEvents from "../assets/sites/site-emerson-events.png";
import siteEmersonFAQs from "../assets/sites/site-emerson-faqs.png";
import serviceWorkshops from "../assets/services/service-workshops.png";
import serviceCorporate from "../assets/services/service-corporate.png";
import serviceConsulting from "../assets/services/service-consulting.png";
import logoDiscord from "../assets/platforms/logo-discord.jpg";
import logoEventbrite from "../assets/platforms/logo-eventbrite.png";
import logoFacebook from "../assets/platforms/logo-facebook.svg";
import logoHumanitix from "../assets/platforms/logo-humanitix.png";
import logoInstagram from "../assets/platforms/logo-instagram.png";
import logoLinkedin from "../assets/platforms/logo-linkedin.png";
import logoLuma from "../assets/platforms/logo-luma.svg";
import logoMeetup from "../assets/platforms/logo-meetup.png";
import logoTiktok from "../assets/platforms/logo-tiktok.jpg";
import logoX from "../assets/platforms/logo-x.png";
import logoYoutube from "../assets/platforms/logo-youtube.png";

export const EMERSON_SERVICES = [
  {
    previewImage: serviceWorkshops,
    name: "AI Workshops",
    description:
      "Dive into our comprehensive AI workshops and seminars designed to enhance your understanding and practical skills in artificial intelligence.",
  },
  {
    previewImage: serviceCorporate,
    name: "AI Corporate Training",
    description:
      "Empower your team with cutting-edge AI knowledge through our tailored corporate training programs, ensuring your organization stays ahead in the AI revolution.",
  },
  {
    previewImage: serviceConsulting,
    name: "Consultation & Transformation",
    description:
      "Leverage our expertise to develop and implement a robust AI strategy, transforming your business processes and driving innovation across your organization.",
  },
];

export const EMERSON_WEBSITES = [
  {
    previewImage: siteEmersonAI,
    name: "AI Workshops",
    description: "Learn more about our AI workshops and seminars",
    url: "https://ai.emersonacademy.org",
  },
  {
    previewImage: siteEmersonEvents,
    name: "FAQs",
    description: "Get answers to common questions about Emerson Academy",
    url: "http://faqs.emersonacademy.org",
  },
  {
    previewImage: siteEmersonFAQs,
    name: "Events Calendar",
    description: "View all upcoming events at Emerson Academy",
    url: "https://events.emersonacademy.org",
  },
];

export const EMERSON_PLATFORMS = [
  {
    name: "Event platforms",
    items: [
      {
        name: "Humanitix",
        previewImage: logoHumanitix,
        url: "https://events.humanitix.com/host/emersonacademy",
        featured: true,
      },
      {
        name: "Eventbrite",
        previewImage: logoEventbrite,
        url: "https://www.eventbrite.ca/o/emerson-academy-33921629803",
        featured: false,
      },
      {
        name: "Luma",
        previewImage: logoLuma,
        url: "https://lu.ma/van-ai",
        featured: false,
      },
      {
        name: "Meetup",
        previewImage: logoMeetup,
        url: "https://meetup.com/vancouverai",
        featured: false,
      },
    ],
  },
  {
    name: "Online media",
    items: [
      {
        name: "Discord",
        previewImage: logoDiscord,
        url: "https://discord.gg/yuPMuDDFzp",
        featured: false,
      },
      {
        name: "Facebook",
        previewImage: logoFacebook,
        url: "https://www.facebook.com/emersonacademyofficial",
        featured: false,
      },
      {
        name: "Instagram",
        previewImage: logoInstagram,
        url: "https://www.instagram.com/emersonacademyofficial",
        featured: false,
      },
      {
        name: "Linkedin",
        previewImage: logoLinkedin,
        url: "https://www.linkedin.com/company/emersonacademy",
        featured: false,
      },
      {
        name: "Tiktok",
        previewImage: logoTiktok,
        url: "https://www.tiktok.com/@emersonacademyofficial",
        featured: false,
      },
      {
        name: "X",
        previewImage: logoX,
        url: "https://x.com/yvremerson",
        featured: false,
      },
      {
        name: "Youtube",
        previewImage: logoYoutube,
        url: "https://youtube.com/@emersonacademyofficial",
        featured: false,
      },
    ],
  },
];
