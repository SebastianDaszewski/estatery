import { footerLinks } from "./data";

import Logo from "@/components/Logo";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/icons";

const socialMedia = [
  {
    icon: <FacebookIcon />,
    link: "https://www.facebook.com",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com",
  },
  {
    icon: <TwitterIcon />,
    link: "https://www.twitter.com",
  },
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com",
  },
];

const Footer = () => {
  return (
    <nav className="w-full px-20 md:px-10 py-4 bg-white">
      <div className="bg-white flex max-md:flex-col items-start md:items-center max-md:h-auto md:h-24 w-full md:justify-between">
        <div className="max-md:self-start max-md:mb-10">
          <Logo />
        </div>
        <div className="md:flex md:flex-row md:justify-between md:w-1/2 xl:w-1/3 max-md:w-full">
          <div className="max-md:flex max-md:justify-between max-md:w-full md:hidden">
            <div className="text-base font-medium text-black opacity-50 leading-1.6 whitespace-nowrap">
              {footerLinks[0].toUpperCase()}
            </div>
            <div className="text-base font-medium text-black opacity-50 leading-1.6 whitespace-nowrap">
              {footerLinks[1].toUpperCase()}
            </div>
          </div>
          <div className="max-md:flex max-md:justify-center max-md:w-full max-md:mt-8 md:hidden">
            <div className="text-base font-medium text-black opacity-50 leading-1.6 whitespace-nowrap">
              {footerLinks[2].toUpperCase()}
            </div>
          </div>

          <div className="hidden md:flex md:justify-between md:w-full">
            {footerLinks.map((link) => (
              <div
                className="text-base font-medium text-black opacity-50 leading-1.6 whitespace-nowrap"
                key={link}
              >
                {link.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-divider max-md:my-8 md:my-0" />
      <div className="bg-white flex max-md:flex-col md:flex-row items-center max-md:h-auto md:h-24 w-full justify-between">
        <div className="text-base font-medium text-black opacity-50 leading-1.6 max-md:text-center max-md:mt-4">
          ©2021 Estatery. All rights reserved
        </div>
        <div className="flex items-center justify-center max-md:w-full md:w-1/5 max-lg:w-1/2 max-md:my-4">
          {socialMedia.map((item) => (
            <a className="opacity-50 mx-3" href={item.link} key={item.link}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Footer;
