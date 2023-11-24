import {CompanyProps} from "../components/Companies/Company";
import {armisLogo, delloiteLogo, DevscopeLogo} from "./CompaniesImages";
import {Archive, Leaf, Trophy} from "@/styles/Icons";

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
            facts: [
                {
                    iconSrc: Trophy,
                    description: "Analytics Partner of the Year 2021",
                },
                {
                    iconSrc: Trophy,
                    description: "Power Platform Partner of the Year 2022",
                },
                {
                    iconSrc: Trophy,
                    description: "Low Code Partner of the Year 2023",
                },
                {
                    iconSrc: Archive,
                    description: "Empresa multinacional presente há 20 anos no mercado",
                }
            ]
        },
        interests: [
            "Artificial Intelligence",
            "Machine Learning",
            "Software Development",
        ]
    },
    {
        logoHref: delloiteLogo,
        name: "deloitte",
        modalInformation: {
            title: "Deloitte",
            bodyText: (
                <>
                    <p className="text-bold">You will never work alone</p>
                    <br/>
                    <p>
                        Acreditamos que o impacto que criamos se multiplica quando
                        trabalhamos em equipa. Juntos podemos mudar o mundo – torná-lo mais
                        humano, eficiente e tecnológico. Mas isso só é possível se
                        conectarmos o teu talento ao de outras pessoas como tu.
                    </p>
                    <br/>
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
                    <br/>
                    <p>
                        Além disso, as nossas equipas em Portugal têm projeção
                        internacional, o que demonstra a nossa forte liderança global em low
                        code/no code, em engenharia de redes de telecomunicações, em
                        plataformas tecnológicas de transformação organizacional (ServiceNow
                        e Apptio) e na indústria de serviços financeiros (Finastra, TIA e
                        Guidewire).
                    </p>
                    <br/>
                    <p>
                        Se tens interesse em explorar e desenvolver as tuas competências
                        nalguma destas áreas em soluções tecnológicas – engenharia de
                        software, cloud, integração de sistemas, data analytics & data
                        science, cyber risk, engenharia de redes telecomunicações, UX design
                        - e gostarias de trabalhar com tecnologias como AWS, Google, Oracle,
                        Salesforce, SAP, Mulesoft, Feedzai e SAS, entre outras, então estás
                        no lugar certo!
                    </p>
                    <br/>
                    <p>
                        Orgulhamo-nos das nossas provas dadas de sucesso e resiliência ao
                        longo de mais de 175 anos de história. Registamos um crescimento
                        notório nas áreas tecnológicas e somos líderes na prestação dos
                        nossos serviços, aos quais recorrem quatro em cada cinco empresas da
                        Fortune Global 500®, através da nossa rede global de firmas membro,
                        com mais de 415 mil pessoas.
                    </p>
                    <br/>
                    <p>
                        Somos mais de 5500 pessoas em Portugal, das quais mais de 2600
                        trabalham em áreas tecnológicas, a partir de escritórios e Digital
                        Studios em Lisboa e no Porto, e de polos tecnológicos em Braga,
                        Viseu, Coimbra, Setúbal, Leiria e Faro.
                    </p>
                    <br/>
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
            videoHref: "https://www.youtube.com/embed/ShwtDNMJ4eM",
            videoTitle: "Vídeo promocional",
            facts: [
                {
                    iconSrc: Trophy,
                    description: "Uma das 25 melhores empresas para trabalhar e desenvolver carreira em Portugal",
                },
                {
                    iconSrc: Archive,
                    description: "Mais de 5500 pessoas em Portugal",
                },
                {
                    iconSrc: Leaf,
                    description: "Ambiente dinâmico, colaborativo e humano",
                }
            ]
        },
        interests: [
            "Low Code/No Code",
            "Network and Telecommunication Engineering",
            "Software Engineering",
            "Cloud",
            "Integrations",
            "Data Analytics",
            "Data Science",
            "Cyber Risk",
            "UX Design",
        ]
    },
    {
        logoHref: armisLogo,
        name: "armis",
        modalInformation: {
            title: "Armis",
            bodyText: (<>
                <p>
                    A ARMIS é um grupo tecnológico com mais de 18 anos de história, dedicado
                    à inovação, desenvolvimento e implementação de soluções que melhoram o
                    crescimento dos seus clientes. Especializada em Cibersegurança,
                    Inteligência Artificial, Business Intelligence, Enterprise Solutions e Data,
                    a ARMIS atua nos setores mais exigentes, como Energia, Transportes &
                    Mobilidade, Desporto e Fintech. Além disso, a ARMIS é responsável pelo
                    desenvolvimento de uma dezena de produtos de software disruptivos em
                    diversas áreas de negócio, nomeadamente o Drive, Workplace HUB,
                    Proscore e o Escoita.
                </p>
                <br/>
                <p>
                    A nossa presença global estende-se por localizações estratégicas no Porto,
                    Lisboa, São Paulo, Utrecht, Miami, Nova Iorque e Dubai: somos uma
                    multinacional que empreende projetos internacionais em mais de 11 países
                    diferentes. O nosso lema "Moving Business Through Technology" dá vida
                    à nossa missão diária, impulsionando-nos com uma dedicação inabalável
                    para dinamizar a evolução dos negócios através de soluções tecnológicas
                    de ponta.
                </p>
                <br/>
                <p>
                    Nos projetos ARMIS, utilizamos diversos programas e ferramentas
                    consoante as necessidades de cada um, entre eles SQL, .Net Core e C#.
                    Enquanto parceiros, utilizamos inúmeras tecnologias e aplicações da
                    Microsoft que nos permitem garantir as soluções mais completas e
                    eficientes.
                </p>
                <br/>
                <p>
                    Na ARMIS todos os anos acolhemos estagiários curriculares vindos do ISEP
                    e de outras faculdades. O objetivo é integrar estes estagiários nas nossas
                    equipas de produção de forma a colocarem em prática os conhecimentos
                    obtidos ao longo do curso e a desenvolverem os seus projetos de estágio.
                    Os estágios têm uma duração de aproximadamente cinco meses, uma vez
                    que acreditamos que é o tempo necessário para o estagiário se integrar na
                    equipa, para planear o desenvolvimento do projeto e para o conseguir
                    executar de forma completa.
                </p>
            </>),
            instagramLink: "https://www.instagram.com/armisgroup/",
            linkedinLink: "https://www.linkedin.com/company/armisgroup/",
            website: "https://www.armisgroup.com",
            videoHref: "https://www.youtube.com/embed/7lWuDHg4MGA",
            videoTitle: "Vídeo promocional",
            facts: [
                {
                    iconSrc: Trophy,
                    description: "Multinacional com a sua presença em 11 países diferentes",
                },
                {
                    iconSrc: Archive,
                    description: "+ 18 anos de história",
                },
                {
                    iconSrc: Leaf,
                    description: "Acolhimento de estagiários curriculares",
                }
            ]
        },
        className: "w-4/6",
        interests: [
            "Artificial Intelligence",
            "Mobile",
            "Software Development and Testing",
            "Consulting",
        ]
    },
];
