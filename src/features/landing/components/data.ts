import { CardProps } from "@/components/Card";

export const housesData: CardProps[] = [
  {
    id: 1,
    price: "$2,140",
    title: "Tarpon Bay",
    address: "103 Lake Shores, Michigan, IN",
    type: "apartment" as const,
    image: "/images/apartment-1.jpg",
  },
  {
    id: 2,
    price: "$1,450",
    title: "Cove Red",
    address: "243 Curlew Road, Palm Harbor, TX",
    type: "apartment" as const,
    image: "/images/apartment-2.jpg",
  },
  {
    id: 3,
    price: "$3,850",
    title: "Beverly Springfield",
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    type: "apartment" as const,
    image: "/images/apartment-3.jpg",
  },
  {
    id: 4,
    price: "$3,440",
    title: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    type: "house" as const,
    image: "/images/house-1.jpg",
  },
  {
    id: 5,
    price: "$6,550",
    title: "St. Crystal",
    address: "210 US Highway, Highland Lake, FL",
    type: "house" as const,
    image: "/images/house-2.jpg",
  },
  {
    id: 6,
    price: "$4,950",
    title: "Faulkner Ave",
    address: "909 Woodland St, Michigan, IN",
    image: "/images/house-3.jpg",
    type: "house" as const,
  },
];

export const testimonialsData = [
  {
    name: "Mira Culos",
    image: "/images/avatar-1.jpg",
    role: "Renter",
    testimonial:
      "“Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!”",
  },
  {
    name: "Mark Brown",
    image: "/images/avatar-2.jpg",
    role: "Renter",
    testimonial:
      "“I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.”",
  },
  {
    name: "Jake White",
    image: "/images/avatar-3.jpg",
    role: "Renter",
    testimonial:
      "“Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.”",
  },
];

export const footerLinks = ["help center", "faq", "terms & privacy"];

export const socialMediaData = [
  {
    type: "facebook",
    link: "https://www.facebook.com",
  },
  {
    type: "instagram",
    link: "https://www.instagram.com",
  },
  {
    type: "twitter",
    link: "https://www.twitter.com",
  },
  {
    type: "linkedin",
    link: "https://www.linkedin.com",
  },
];

export const landingLinks = [
  "Rent",
  "Buy",
  "Sell",
  "Manage Properties",
  "Resources",
];
