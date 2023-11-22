import { CompanyProps } from "../components/Company";
import {
  AccentureLogo,
  glinttLogo,
  msgLifeIberiaLogo,
  NatixisLogo,
} from "./CompaniesImages";

export const SilverCompanies: CompanyProps[] = [
  {
    logoHref: glinttLogo,
    name: "glintt",
    websiteUrl: "https://www.glintt.com/",
  },
  {
    logoHref: AccentureLogo,
    name: "accenture",
    websiteUrl: "https://www.accenture.com/",
  },
  {
    logoHref: NatixisLogo,
    name: "natixis",
    websiteUrl: "https://www.natixis.com/",
  },
  {
    logoHref: msgLifeIberiaLogo,
    name: "msg life iberia",
    websiteUrl: "https://msg-insurit.com/pt-pt/",
    className: "w-3/4",
  },
];
