import { Archive, Chart, Leaf, Trophy } from "@/styles/Icons";

import { CompanyProps } from "../components/Companies/Company";
import {
  FabamaqLogo,
  HitachiLogo,
  randstadLogo,
  WeezieLogo,
} from "./CompaniesImages";

export const GoldCompanies: CompanyProps[] = [
  {
    logoHref: HitachiLogo,
    name: "hitachi",
    interests: ["Backend", "Cloud Computing", "Data Analysis"],
    modalInformation: {
      title: "Hitachi Solutions",
      bodyText: (
        <p>
          A Hitachi Solutions compreende o que é necessário para transformar
          digitalmente as organizações, aproveitando o poder das mais recentes
          tecnologias e integrando-as de forma transparente nas empresas. Como
          uma empresa de consultoria global que atua nos setores privado e
          público, especializamo-nos em aplicações empresariais amigáveis
          baseadas na Microsoft cloud. O excelente trabalho que realizamos atrai
          algumas das mentes mais brilhantes lá fora. Eles compõem equipas
          diversas com perspectivas e experiências diferentes, que impulsionam a
          inovação e permitem uma ligação mais próxima com os nossos clientes.
          Junta-te a nós e faz o teu melhor trabalho de sempre numa cultura
          diversificada e recompensadora que está constantemente a impulsionar a
          inovação para um futuro melhor.
        </p>
      ),
      instagramLink: "https://www.instagram.com/hitachisolutions.portugal/",
      linkedinLink:
        "https://www.linkedin.com/company/hitachi-solutions-portugal/",
      website: "https://global.hitachi-solutions.com/",
      facts: [
        {
          iconSrc: Archive,
          description: "Empresa de consultoria global",
        },
        {
          iconSrc: Leaf,
          description: "Cultura diversificada e recompensadora",
          className: "text-3xl md:text-2xl",
        },
        {
          iconSrc: Chart,
          description:
            "Especializados em aplicações empresariais amigáveis baseadas na Microsoft cloud",
          className: "text-6xl md:text-2xl",
        },
      ],
    },
  },
  {
    logoHref: FabamaqLogo,
    name: "fabamaq",
    interests: [
      "Backend",
      "Devops",
      "Game Development",
      "Software Engineering",
    ],
    modalInformation: {
      title: "FABAMAQ",
      bodyText: (
        <p>
          A Fabamaq é uma software house baseada no Porto, que desenvolve jogos
          para casinos físicos e online espalhados por todo o mundo. A cultura
          centrada nas pessoas que se vive na empresa tem como valores
          orientadores a Proximidade, a Audácia, a Partilha, a Adaptabilidade e
          o Compromisso.
        </p>
      ),
      instagramLink: "https://www.instagram.com/fabamaq/",
      linkedinLink: "https://www.linkedin.com/company/fabamaq/",
      website: "https://www.fabamaq.com",
      facts: [
        {
          iconSrc: Trophy,
          description: "Empresa vencedora do prémio “Healthy Workplaces”",
          className: "text-4xl sm:text-2xl",
        },
        {
          iconSrc: Archive,
          description: "Regime de trabalho híbrido",
        },
      ],
    },
  },
  {
    logoHref: WeezieLogo,
    name: "weezie",
    interests: [
      "Backend",
      "Cloud Computing",
      "Data Analysis",
      "Data Science",
      "Network Administration",
    ],
    modalInformation: {
      title: "Weezie",
      bodyText: (
        <p>
          A Weezie é uma startup de software portuguesa, com sede no Porto, que
          oferece soluções de gestão de redes de fibra ótica, focada na
          automação e digitalização dos processos associados ao desenvolvimento
          de uma rede de telecomunicação. A Weezie oferece uma solução que
          integra num só ecossistema digital a equipa de planeamento, execução,
          controlo e gestão, a fim de oferecer a melhor experiência ao cliente
          final. Com apenas 6 anos, a Weezie está presente em 5 países e já
          ajudou os clientes a levar a fibra ótica a 60 milhões de casas em todo
          o mundo.
        </p>
      ),
      instagramLink: "https://www.instagram.com/weezieofficial/",
      linkedinLink: "https://www.linkedin.com/company/weezie-io/",
      facebookLink: "https://www.facebook.com/weeziesoftware/",
      twitterLink: "https://twitter.com/weeziesoftware",
      website: "https://weezie.io/",
      facts: [
        {
          iconSrc: Chart,
          description:
            "Levou fibra ótica a 60 milhões de casas em todo o mundo",
          className: "text-4xl md:text-2xl",
        },
        {
          iconSrc: Archive,
          description: "Presente em 5 países",
        },
      ],
    },
  },
  {
    logoHref: randstadLogo,
    name: "randstad",
    interests: [
      "Data Analysis",
      "IT Management",
      "Network Administration",
      "Software Development",
    ],
    modalInformation: {
      title: "Randstad",
      bodyText: (
        <p>
          A Randstad é a maior prestadora de serviços de RH a nível nacional e
          internacional, e tem como objetivo tornar-se o parceiro de vida
          profissional mais valorizado pelos talentos a nível mundial, apoiando
          o maior número possível de pessoa na realização do seu verdadeiro
          potencial ao longo da sua carreira. Ajudamos as pessoas a obter
          empregos gratificantes e a manterem-se relevantes no mundo do trabalho
          em constante mudança.
        </p>
      ),
      instagramLink: "https://www.instagram.com/randstadportugal/",
      linkedinLink: "https://www.linkedin.com/company/randstad-portugal/",
      facebookLink: "https://www.facebook.com/RandstadPortugal",
      twitterLink: "https://twitter.com/randstadpt",
      website: "https://www.randstad.pt/",
      facts: [
        {
          iconSrc: Archive,
          description: "+ 1000 vagas de emprego",
        },
        {
          iconSrc: Trophy,
          description:
            "Maior prestadora de serviços de RH a nível nacional e internacional",
          className: "text-4xl sm:text-2xl",
        },
      ],
    },
  },
];
