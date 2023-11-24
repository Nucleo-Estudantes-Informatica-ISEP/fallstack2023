import { CompanyProps } from "../components/Companies/Company";
import { armisLogo, delloiteLogo, DevscopeLogo } from "./CompaniesImages";

export const DiamondCompanies: CompanyProps[] = [
  {
    logoHref: DevscopeLogo,
    name: "devScope",
    modalInformation: {
      title: "DevScope",
      bodyText: (
        <>
          <p>
            A DevScope é especialista em dar às organizações as ferramentas e o
            conhecimento necessários para se manterem competitivas e um dos mais
            distinguidos parceiros Microsoft Portugal, tendo sido premiados
            Analytics Partner of the Year 2021, Power Platform Partner of the
            Year 2022 e Low Code Partner of the Year 2023. Ao longo de 20 anos,
            temos desenvolvido e implementado soluções dentro e fora de Portugal
            nas mais variadas áreas de atividade, do retalho à saúde, passando
            pelo imobiliário ou o sector público, produzindo sempre resultados
            duradouros.
          </p>
        </>
      ),
      videoTitle: "Vídeo promocional",
      videoHref: "https://www.youtube.com/embed/WL1pRbjUs6c",
      facebookLink: "https://www.facebook.com/devscope/",
      youtubeLink: "https://www.youtube.com/devscope",
      twitterLink: "https://twitter.com/devscope",
      linkedinLink: "https://www.linkedin.com/company/devscope/",
      website: "https://devscope.net",
    },
  },
  {
    logoHref: delloiteLogo,
    name: "deloitte",
    modalInformation: {
      title: "Deloitte",
      bodyText: (
        <>
          <p className="text-bold">You will never work alone</p>
          <br />
          <p>
            Acreditamos que o impacto que criamos se multiplica quando
            trabalhamos em equipa. Juntos podemos mudar o mundo – torná-lo mais
            humano, eficiente e tecnológico. Mas isso só é possível se
            conectarmos o teu talento ao de outras pessoas como tu.
          </p>
          <br />
          <p>
            Na Deloitte, nunca trabalharás sozinho. Vais integrar os mais
            variados e desafiantes projetos e fazer parte do nosso Global
            Solutions Center, onde poderás colaborar de forma integrada com
            outras equipas da rede global Deloitte. Terás sempre alguém ao teu
            lado para te inspirar, ajudar e desafiar a expandir os teus
            horizontes, enquanto exploras soluções tecnológicas diferenciadoras.
            Aqui, ao encontrares um ambiente dinâmico, colaborativo e humano,
            terás a oportunidade de desenvolver a tua melhor versão.
          </p>
          <br />
          <p>
            Além disso, as nossas equipas em Portugal têm projeção
            internacional, o que demonstra a nossa forte liderança global em low
            code/no code, em engenharia de redes de telecomunicações, em
            plataformas tecnológicas de transformação organizacional (ServiceNow
            e Apptio) e na indústria de serviços financeiros (Finastra, TIA e
            Guidewire).
          </p>
          <br />
          <p>
            Se tens interesse em explorar e desenvolver as tuas competências
            nalguma destas áreas em soluções tecnológicas – engenharia de
            software, cloud, integração de sistemas, data analytics & data
            science, cyber risk, engenharia de redes telecomunicações, UX design
            - e gostarias de trabalhar com tecnologias como AWS, Google, Oracle,
            Salesforce, SAP, Mulesoft, Feedzai e SAS, entre outras, então estás
            no lugar certo!
          </p>
          <br />
          <p>
            Orgulhamo-nos das nossas provas dadas de sucesso e resiliência ao
            longo de mais de 175 anos de história. Registamos um crescimento
            notório nas áreas tecnológicas e somos líderes na prestação dos
            nossos serviços, aos quais recorrem quatro em cada cinco empresas da
            Fortune Global 500®, através da nossa rede global de firmas membro,
            com mais de 415 mil pessoas.
          </p>
          <br />
          <p>
            Somos mais de 5500 pessoas em Portugal, das quais mais de 2600
            trabalham em áreas tecnológicas, a partir de escritórios e Digital
            Studios em Lisboa e no Porto, e de polos tecnológicos em Braga,
            Viseu, Coimbra, Setúbal, Leiria e Faro.
          </p>
          <br />
          <p>
            A Deloitte é uma das empresas mais atrativas para trabalhar no
            mundo, segundo o ranking da Universum. Em 2023, fomos distinguidos
            com dois prémios nos Human Resources Awards e fazemos parte do Top5
            das 25 melhores empresas para trabalhar e desenvolver carreira em
            Portugal.
          </p>
        </>
      ),
      instagramLink: "https://www.instagram.com/deloitteportugal/",
      linkedinLink: "https://www.linkedin.com/company/deloitte-portugal/",
      website: "https://www2.deloitte.com/pt/pt.html",
      videoHref: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoTitle: "Vídeo promocional",
    },
  },
  {
    logoHref: armisLogo,
    name: "armis",
    modalInformation: {
      title: "Armis",
      bodyText: <></>,
      instagramLink: "https://www.instagram.com/armisgroup/",
      linkedinLink: "https://www.linkedin.com/company/armisgroup/",
      website: "https://www.armisgroup.com",
      videoHref: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoTitle: "Vídeo promocional",
    },
    className: "w-4/6",
  },
];
