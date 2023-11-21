import { CompanyProps } from "../components/Company";
import { HitachiLogo, FabamaqLogo, WeezieLogo, randstadLogo } from "./CompaniesImages";

/**
    Gold Companies
    Hitachi Solutions
    Weezie
    Fabamaq
    Randstad 
 */

export const GoldCompanies: CompanyProps[] = [
  {
    logoHref: HitachiLogo,
    name: "hitachi",
    modalInformation: {
      title: "Hitachi",
      bodyText: (
        <>
          <p>
            Hitachi Solutions understands what it takes to digitally transform
            organisations, harnessing the power of the latest technologies and
            seamlessly integrating them into businesses. As a global consultancy
            firm working across the private and public sectors, we specialise in
            user-friendly business applications based on the Microsoft cloud.
            Our close partnership with Microsoft gives our customers access to
            the latest technology, plus valuable market insights.
          </p>
          <br />
          <p>
            The creative, modern solutions we build for our customers are a
            combination of many factors. There’s the pioneering spirit which has
            always informed everything we do. Then there’s our people. With our
            team of experienced industry professionals, consultants and
            technology experts, Hitachi Solutions has a wide range of
            capabilities including digital transformation, ERP and CRM
            implementation, change management and data science & analytics. Our
            highly skilled team helps drive improvements to many aspects of your
            business creating efficiencies and growth.
          </p>
          <br />
          <p>
            The great work we do attracts some of the brightest people out
            there. They make up diverse teams with different perspectives and
            experiences which fuel innovation and enable a closer connection
            with our customers. Join us and do your best work ever in a diverse
            and rewarding culture that’s continually driving innovation for a
            better future.
          </p>
        </>
      ),
      instagramLink: "https://www.instagram.com/hitachisolutions.portugal/",
      linkedinLink:
        "https://www.linkedin.com/company/hitachi-solutions-portugal/",
      website: "https://www.hitachi.eu/pt-pt",
    },
  },
  {
    logoHref: FabamaqLogo,
    name: "fabamaq",
    modalInformation: {
      title: "FABAMAQ",
      bodyText: (
        <>
          <p>
            <strong>Missão FMQ</strong>
            <br />
            Criar jogos de casino com qualidade para o mercado global num
            ambiente de crescimento, proximidade e partilha.
          </p>
          <br />
          <p>
            <strong>Visão FMQ</strong>
            <br />
            Ser uma Software House de referência na indústria internacional dos
            jogos de casino.
          </p>
          <br />
          <p>
            <strong>Visão FMQ</strong>
            <br />
            Partilha
            <br />
            Compromisso
            <br />
            Audácia
            <br />
            Adaptabilidade
            <br />
            Proximidade
          </p>
        </>
      ),
      instagramLink: "https://www.instagram.com/fabamaq/",
      linkedinLink: "https://www.linkedin.com/company/fabamaq/",
      website: "https://www.fabamaq.com",
    },
  },
  {
    logoHref: WeezieLogo,
    name: "Weezie",
    modalInformation: {
      title: "weezie",
      bodyText: (
        <>
        <p>
        A Weezie é uma startup de software portuguesa, com sede no Porto, que oferece soluções de gestão de redes de fibra ótica, focada na automação e digitalização dos processos associados ao desenvolvimento de uma rede de telecomunicação. 
        A Weezie oferece uma solução que integra num só ecossistema digital a equipa de planeamento, execução, controlo e gestão, a fim de oferecer a melhor experiência ao cliente final. 
        Com apenas 6 anos, a Weezie está presente em 5 países e já ajudou os clientes a levar a fibra ótica a 60 milhões de casas em todo o mundo.
        </p>
        </>
      ),
      instagramLink: "https://www.instagram.com/weezieofficial/",
      linkedinLink: "https://www.linkedin.com/company/weezie-io/",
      facebookLink: "https://www.facebook.com/weeziesoftware/",
      twitterLink: "https://twitter.com/weeziesoftware",
      website: "https://weezie.io/",
    },
  },
  {
    logoHref: randstadLogo,
    name: "randstad",
    modalInformation: {
      title: "randstad",
      bodyText: (
        <>
        <p>
        Randstad is the global leader in the HR services industry. By serving as a trusted human partner in today's technology-driven world of talent, we help people secure rewarding jobs and stay relevant in the ever changing world of work. 
        Randstad was founded in 1960 and is headquartered in Diemen, the Netherlands.
        </p>
        </>
      ),
      instagramLink: "https://www.instagram.com/randstadportugal/",
      linkedinLink: "https://www.linkedin.com/company/randstad-portugal/",
      facebookLink: "https://www.facebook.com/RandstadPortugal",
      twitterLink: "https://twitter.com/randstadpt",
      website: "https://www.randstad.pt/",
    },
  }
];
