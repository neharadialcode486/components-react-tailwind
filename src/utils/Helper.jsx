import women from "../assets/images/webp/women-img.webp";
import djellabas from "../assets/images/webp/djellabas.webp";
import gandoras from "../assets/images/webp/gandoras.webp";
import caftans from "../assets/images/webp/caftans.webp";
import swiper from "../assets/images/webp/swiper-img.webp";
import swiper1 from "../assets/images/webp/swiper-img1.webp";
import swiper2 from "../assets/images/webp/swiper-img2.webp";
import swiper3 from "../assets/images/webp/swiper-img3.webp";
import swiper4 from "../assets/images/webp/swiper-img4.webp";
import swiper5 from "../assets/images/webp/swiper-img5.webp";
export const ACCORDION_DATA = [
    {
        title: "En savoir", content: "Dans ce module dédié aux débutants, on passe en revue les principes de bases de ce marché avec de nombreuses vidéos sur le bitcoin, les stratégies d'investissement les plus efficaces et la psychologie à adopter pour réussir.L'objectif est d'Acquérir les bases pour bien débuter en Investissement !"
    },
    { title: "En savoir plus", content: "Dans ce module dédié aux débutants, on passe en revue les principes de bases de ce marché avec de nombreuses vidéos" },
]
export const ACCORDION_DATA2 = [
    {
        title: "En savoir", content: "Dans ce module dédié aux débutants, on passe en revue les principes de bases de ce marché avec de nombreuses vidéos sur le bitcoin, les stratégies d'investissement les plus efficaces et la psychologie à adopter pour réussir.L'objectif est d'Acquérir les bases pour bien débuter en Investissement !"
    },
    { title: "En savoir plus", content: "Dans ce module dédié aux débutants, on passe en revue les principes de bases de ce marché avec de nombreuses vidéos" },
    {
        title: "En savoir", content: "Dans ce module dédié aux débutants, on passe en revue les principes de bases de ce marché avec de nombreuses vidéos sur le bitcoin, les stratégies d'investissement les plus efficaces et la psychologie à adopter pour réussir.L'objectif est d'Acquérir les bases pour bien débuter en Investissement !"
    },
]
export const TABS_DATA = [
    {
        title: "néophyte",
        image: women,
        accordionContent: ACCORDION_DATA,
    },
    {
        title: "rentable",
        image: swiper,
        accordionContent: ACCORDION_DATA2,
    },
    {
        title: "expérimenté",
        image: swiper1,
        accordionContent: ACCORDION_DATA,
    },
    {
        title: "Malin",
        image: swiper3,
        accordionContent: ACCORDION_DATA2,
    },
    {
        title: "Indépendant",
        image: swiper5,
        accordionContent: ACCORDION_DATA,
    },
];
export const SWIPER_DATA = [
    {
        title: "djellabas",
        image: djellabas,
    },
    {
        title: "gandoras",
        image: gandoras,
    },
    {
        title: "caftans",
        image: caftans,
    },
    {
        title: "djellabas",
        image: djellabas,
    },
    {
        title: "gandoras",
        image: gandoras,
    },
];
export const SWIPER_DATA2 = [
    {
        title: "djellabas",
        image: swiper,
    },
    {
        title: "gandoras",
        image: women,
    },
    {
        title: "caftans",
        image: swiper1,
    },
    {
        title: "djellabas",
        image: swiper2,
    },
    {
        title: "gandoras",
        image: gandoras,
    },
];
export const SWIPER_DATA3 = [
    {
        title: "djellabas",
        image: swiper3,
    },
    {
        title: "gandoras",
        image: swiper4,
    },
    {
        title: "caftans",
        image: swiper5,
    },
    {
        title: "djellabas",
        image: swiper2,
    },
    {
        title: "gandoras",
        image: swiper1,
    },
];
export const TABS_SWIPER = [
    {
        title: "Djellabas",
        tabsContent: SWIPER_DATA,
    },
    {
        title: "Gandoras",
        tabsContent: SWIPER_DATA2,
    },
    {
        title: "Caftans",
        tabsContent: SWIPER_DATA3,
    },
    {
        title: "Regabiyas",
        tabsContent: SWIPER_DATA,
    },
];