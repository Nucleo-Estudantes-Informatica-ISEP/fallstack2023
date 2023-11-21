import { CompanyProps } from "../components/Company";
import {
  glinttLogo,
  AccentureLogo,
  NatixisLogo,
  msgLifeIberiaLogo
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
    websiteUrl: "https://www.msg-life.com/",
  }

];
