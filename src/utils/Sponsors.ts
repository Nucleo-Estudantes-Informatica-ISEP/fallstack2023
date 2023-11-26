import { SponsorProps } from "../components/Sponsor";
import {
  aeisepLogo,
  artipolLogo,
  divinalLogo,
  mouraLogo,
  telepizzaLogo,
  vitalisLogo,
} from "./CompaniesImages";

export const Sponsors: SponsorProps[] = [
  {
    name: "Artipol Logo",
    logoHref: artipolLogo,
    website: "https://www.facebook.com/Artipol.net/",
  },
  {
    name: "Confeitaria Divinal logo",
    logoHref: divinalLogo,
    website: "https://www.facebook.com/divinal.porto/?locale=pt_PT",
  },
  {
    name: "Confeitaria Moura Logo",
    logoHref: mouraLogo,
    website: "https://confeitariamoura.pt/",
  },
  {
    name: "Telepizza",
    logoHref: telepizzaLogo,
    website: "https://www.telepizza.pt/",
  },
  {
    name: "Vitalis Logo",
    logoHref: vitalisLogo,
    website: "https://www.vitalis.pt/",
  },
  {
    name: "AEISEP Logo",
    logoHref: aeisepLogo,
    website: "https://www.aeisep.pt/",
  },
];
