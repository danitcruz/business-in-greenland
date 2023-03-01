//LOGOS
import logo1 from "../Resourses/Logos/2022_COWI_A_S.png";
import logo2 from "../Resourses/Logos/AirGreenlandLogo_trapezium.png";
import logo4 from "../Resourses/Logos/2022_Arctic_Import.png";
import logo3 from "../Resourses/Logos/Arctic_Law.png";
import logo5 from "../Resourses/Logos/2022_Gorrissen_Federspie.png";
import logo6 from "../Resourses/Logos/bws_shipping.png";
import logo7 from "../Resourses/Logos/DIlogo.png";
import logo8 from "../Resourses/Logos/Mark_Wedell.png";
import logo9 from "../Resourses/Logos/Greenland_Travel.png";
import logo10 from "../Resourses/Logos/Illit_Forsikringit_Logo.png";
import logo11 from "../Resourses/Logos/2022_Trade_Council.png";
import logo12 from "../Resourses/Logos/ncs_logo.png";
import logo13 from "../Resourses/Logos/2022_Greenland_Resources_Inc.png";
import logo14 from "../Resourses/Logos/Ironbank_Zinc_Limited.png";
import logo16 from "../Resourses/Logos/BDO.png";
import logo17 from "../Resourses/Logos/2022_Lumina_Sustainable_Materials_A_S.png";
import logo18 from "../Resourses/Logos/VækstFonden.png";
import logo19 from "../Resourses/Logos/2022_Nordic_Bulk_Carriers_A_S.png";
import logo20 from "../Resourses/Logos/2022_North_Water_Greenland_ApS.png";
import logo21 from "../Resourses/Logos/ExploGreenland.png";
import logo24 from "../Resourses/Logos/Gronlands_Banken.png";
import logo26 from "../Resourses/Logos/Nuna_Law.png";
import logo28 from "../Resourses/Logos/2022_Rambøll_Grønland_A_S.png";
import logo29 from "../Resourses/Logos/UP_Front_Communication_GR.png";
import logo30 from "../Resourses/Logos/Sikuki.png";
import logo31 from "../Resourses/Logos/2022_Boman_Qujan.png";
import logo33 from "../Resourses/Logos/2022_Royal_Arctic_Line_A_S.png";
import logo34 from "../Resourses/Logos/Kommuneqarfik_Sermersooq.png";
import logo35 from "../Resourses/Logos/KalaallitForsikring.png";
import logo36 from "../Resourses/Logos/Greenland_Business_Association_(GE).png";
import logo37 from "../Resourses/Logos/Nalik_Venture.png";
import logo40 from "../Resourses/Logos/Kirklarsen.png";
import logo41 from "../Resourses/Logos/2022_Sermeq_Helicopters_A_S.png";

//PDFS
import pdf1 from "../Resourses/PDFs/COWI_in_Greenland.pdf";
import pdf2 from "../Resourses/PDFs/Air_Greenland.pdf";
import pdf3 from "../Resourses/PDFs/Arctic_Law.jpg";
import pdf4 from "../Resourses/PDFs/Arctic_Import.pdf";
import pdf5 from "../Resourses/PDFs/Gorrissen_Federspiel.pdf";
import pdf6 from "../Resourses/PDFs/Blue_Water_Shipping.pdf";
import pdf9 from "../Resourses/PDFs/Greenland_Travel.pdf";
import pdf8 from "../Resourses/PDFs/Mark_Wedell.pdf";
import pdf10 from "../Resourses/PDFs/Illit_Forsikringit.pdf";
import pdf12 from "../Resourses/PDFs/Nordic_Camp_Supply.pdf";
import pdf13 from "../Resourses/PDFs/Greenland_Resources.pdf";
import pdf14 from "../Resourses/PDFs/Ironbark.pdf";
import pdf16 from "../Resourses/PDFs/BDO.pdf";
import pdf26 from "../Resourses/PDFs/Nuna_Law_Firm.pdf";
import pdf29 from "../Resourses/PDFs/UP_Front_Greenland.pdf";
import pdf30 from "../Resourses/PDFs/Sikuki.pdf";
import pdf31 from "../Resourses/PDFs/BomanQujan.pdf";
import pdf34 from "../Resourses/PDFs/Kommuneqarfik_Sermersooq.pdf";
import pdf35 from "../Resourses/PDFs/Kalaallit_Forsikring.pdf";
import pdf36 from "../Resourses/PDFs/Greenland_Business_Association_(GE).pdf";
import pdf37 from "../Resourses/PDFs/Nalik_Venture.pdf";
import pdf40 from "../Resourses/PDFs/Kirk_Larsen.pdf";
import pdf41 from "../Resourses/PDFs/Sermeq_Helicopters.pdf";
import { getYear } from "../utils";

 

export const companies = [
  {
    name: "COWI A/S",
    logo: logo1,
    website: "https://www.cowi.com/",
    pdf: pdf1,
    type: "withmail",
    email: `cowi@cowi.com?subject=PDAC ${getYear()}`,
    id: 1
  },
  {
    name: "Air Greenland A/S",
    logo: logo2,
    website: "https://www.airgreenland.com/",
    pdf: pdf2,
    type: "withmail",
    email: `charter@airgreenland.gl?subject=PDAC ${getYear()}`,
    id: 2
  },
  {
    name: "Arctic Law Greenland",
    logo: logo3,
    website: "https://arcticlawgreenland.gl/en/",
    pdf: pdf3,
    type: "withmail",
    email: `advokat@alg.gl?subject=PDAC ${getYear()}`,
    id: 3
  },
  {
    name: "Arctic Import",
    logo: logo4,
    website: "https://www.arcticimport.dk/",
    pdf: pdf4,
    type: "withmail",
    email: `THJ@arcticimport.dk?subject=PDAC ${getYear()}`,
    id: 4
  },
  {
    name: "Gorrissen Federspiel",
    logo: logo5,
    website: "https://gorrissenfederspiel.com/en/",
    pdf: pdf5,
    type: "withmail",
    email: `MM@gorrissenfederspiel.com?subject=PDAC ${getYear()}`,
    id: 5
  },
  {
    name: "Blue Water Shipping",
    logo: logo6,
    website: "https://www.bws.net/",
    pdf: pdf6,
    type: "withmail",
    email: `nuuk@bws.net?subject=PDAC ${getYear()}`,
    id: 6
  },
  {
    name: "Confederation of Danish Industry",
    logo: logo7,
    website: "https://di.dk/English/Pages/English.aspx",
    pdf: null,
    type: "withmail",
    email: `di@di.dk?subject=PDAC ${getYear()}`,
    id: 7
  },
  {
    name: "Mark & Wedell A/S",
    logo: logo8,
    website: "https://mark-wedell.com/mw-jawo-sampling/",
    pdf: pdf8,
    type: "withmail",
    email: `torben.ekvall@mark-wedell.com?subject=PDAC ${getYear()}`,
    id: 8
  },
  {
    name: "Greenland Travel",
    logo: logo9,
    website: "https://www.greenland-travel.com",
    pdf: pdf9,
    type: "withmail",
    email: `mln@greenland-travel.gl?subject=PDAC ${getYear()}`,
    id: 9
  },
  {
    name: "Illit Forsikringit Agentur A/S",
    logo: logo10,
    website: "http://illitforsikringit.gl/da/",
    pdf: pdf10,
    type: "withmail",
    email: `Info@illitforsikringit.gl?subject=PDAC ${getYear()}`,
    id: 10
  },
  {
    name: "The Danish Trade Council in Toronto",
    logo: logo11,
    website: "http://canada.um.dk/en/the-trade-council/",
    pdf: null,
    type: "withmail",
    email: `helsol@um.com?subject=PDAC ${getYear()}`,
    id: 11
  },
  {
    name: "Nordic Camp Supply",
    logo: logo12,
    website: "https://www.ncsfuel.com/",
    pdf: pdf12,
    type: "withmail",
    email: `sales@ncsfuel.com?subject=PDAC ${getYear()}`,
    id: 12
  },
  {
    name: "Greenland Resources Inc",
    logo: logo13,
    website: "https://www.greenlandresources.ca/",
    pdf: pdf13,
    type: "withmail",
    email: `info@greenlandresourcesinc.com?subject=PDAC ${getYear()}`,
    id: 13
  },
  {
    name: "Ironbank Zinc Limited",
    logo: logo14,
    website: "https://ironbark.gl/",
    pdf: pdf14,
    type: "withmail",
    email: `admin@ironbark.gl?subject=PDAC ${getYear()}`,
    id: 14
  },
  {
    name: "Bdo Statsautoriseret Revisionsaktieselskab",
    logo: logo16,
    website: "https://www.bdo.global/en-gb/home",
    pdf: pdf16,
    type: "withmail",
    email: `clbeck@bdo.dk?subject=PDAC ${getYear()}`,
    id: 16
  },
  {
    name: "Lumina Sustainable Materials A/S",
    logo: logo17,
    website: "http://luminamaterials.com/",
    pdf: null,
    type: "withmail",
    email: `bent@lumina.gl?subject=PDAC ${getYear()}`,
    id: 17
  },
  {
    name: "VækstFonden",
    logo: logo18,
    website: "https://eifo.dk/",
    pdf: null,
    type: "withmail",
    email: `sbe@vf.dk?subject=PDAC ${getYear()}`,
    id: 18
  },
  {
    name: "Nordic Bulk Carriers A/S",
    logo: logo19,
    website: 'https://www.nordicbulkcarriers.com/',
    pdf: null,
    type: "withmail",
    email: `ca@nordic-bulk.com?subject=PDAC ${getYear()}`,
    id: 19
  },
  {
    name: "North Water Greenland ApS",
    logo: logo20,
    website: null,
    pdf: null,
    type: "withmail",
    email: `hello@worldwater.gl?subject=PDAC ${getYear()}`,
    id: 20
  },
  {
    name: "ExploGreenland",
    logo: logo21,
    website: "http://www.explogreenland.gl",
    pdf: null,
    type: "withmail",
    email: `malik@explogreenland.gl?subject=PDAC ${getYear()}`,
    id: 21
  },
  {
    name: "Grønlandsbanken A/S",
    logo: logo24,
    website: "https://banken.gl/da/om-os",
    pdf: null,
    type: "withmail",
    email: `erhverv@banken.gl?subject=PDAC ${getYear()}`,
    id: 24
  },
  {
    name: "Nuna/Horten Lawfirm",
    logo: logo26,
    website: "http://www.nuna-law.com/?lang=en",
    pdf: pdf26,
    type: "withmail",
    email: `email@nuna-law.gl?subject=PDAC ${getYear()}`,
    id: 26
  },
  {
    name: "Rambøll Grønland A/S",
    logo: logo28,
    website: "https://ramboll.com/contact/greenland",
    pdf: null,
    type: "withmail",
    email: `ramboll@ramboll.gl?subject=PDAC ${getYear()}`,
    id: 28
  },
  {
    name: "UP Front Communication ApS",
    logo: logo29,
    website: "https://upfrontcom.dk/kontakt",
    pdf: pdf29,
    type: "withmail",
    email: `hans.bak@mail.dk?subject=PDAC ${getYear()}`,
    id: 29
  },
  {
    name: "Sikuki Nuuk Harbour A/S",
    logo: logo30,
    website: "http://www.sikuki.com/",
    pdf: pdf30,
    type: "withmail",
    email: `sikuki@sikuki.gl?subject=PDAC ${getYear()}`,
    id: 30
  },
  {
    name: "Boman Qujan'",
    logo: logo31,
    website: "https://www.pr-network.biz/prnetwork/boman-qujan/",
    pdf: pdf31,
    type: "withmail",
    email: `jb@boman.dk?subject=PDAC ${getYear()}`,
    id: 31
  },
  {
    name: "Royal Arctic Line A/S",
    logo: logo33,
    website: "https://www.royalarcticline.com/",
    pdf: null,
    type: "withmail",
    email: `ral@ral.gl?subject=PDAC ${getYear()}`,
    id: 33
  },
  {
    name: "Kommuneqarfik Sermersooq",
    logo: logo34,
    website: "https://sermersooq.gl/da/",
    pdf: pdf34,
    type: "withmail",
    email: `kommuneqarfik@sermersooq.gl?subject=PDAC ${getYear()}`,
    id: 34
  },
  {
    name: "Kalaallit Forsikring A/S",
    logo: logo35,
    website: "https://www.forsikring.gl/web/gl/kalaallitdk.nsf",
    pdf: pdf35,
    type: "withmail",
    email: "mail",
    id: 35
  },
  {
    name: "Greenland Business Association (GE)",
    logo: logo36,
    website: "http://ge.ga.gl/da-dk/Velkommen/English",
    pdf: pdf36,
    type: "withmail",
    email: `ga@ga.gl?subject=PDAC ${getYear()}`,
    id: 36
  },
  {
    name: "Nalik Ventures",
    logo: logo37,
    website: "http://www.nalik.gl/",
    pdf: pdf37,
    type: "withmail",
    email: `nalik@nalik.gl?subject=PDAC ${getYear()}`,
    id: 37
  },
  {
    name: "Kirk Larsen & Ascanius Greenland",
    logo: logo40,
    website: "http://www.kirklarsen.gl",
    pdf: pdf40,
    type: "withmail",
    email: `greenland@kirklarsen.gl?subject=PDAC ${getYear()}`,
    id: 40
  },
  {
    name: "Sermeq Helicopters A/S",
    logo: logo41,
    website: "https://www.sermeqhelicopters.gl/",
    pdf: pdf41,
    type: "withmail",
    email: `info@helicopter.gl?subject=PDAC ${getYear()}`,
    id: 41
  },

];
