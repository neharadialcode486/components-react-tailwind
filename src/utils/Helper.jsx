import landscape from "../assets/images/webp/landscape.webp";
import house from "../assets/images/webp/house.webp";
import nigeria from "../assets/images/webp/nigeria.webp";
import lng from "../assets/images/webp/lng-img.webp";

export const EVENTS_DATA = [
    { date: "26", months: "May", title: "The role of LNG", time: "14:00 - 15:00", location: "Nijenborgh 6, room 1.06" },
    { date: "28", months: "may", title: "Hydrogen: The impact on resources and ecology", time: "10:30 - 12:00", location: "Online" },
    { date: "4", months: "jun", title: "Biodiversity - Sixth mass exctinction", time: "Online", location: "Online" },
    { date: "11", months: "jun", title: "The role of LNG - Part 2", time: "Online", location: "Nijenborgh 6, room 1.06" },
];
export const SWIPER_DATA = [
    { img: landscape, title: "Leadership: Leading the hydrogen economy" },
    { img: house, title: "Biodiversity - Sixth mass exctinction" },
    { img: nigeria, title: "Energy Transition in Nigeria" },
    { img: lng, title: "The role of LNG" },
    { img: landscape, title: "Leadership: Leading the hydrogen economy" },
    { img: house, title: "Biodiversity - Sixth mass exctinction" },
]
export const TABS_DATA = [
    {
        title: "Dashboard",
        icon: "dashboardIcon",
        tabsContent: SWIPER_DATA,
    },
    {
        title: "Events",
        icon: "eventsIcon",
        tabsContent: SWIPER_DATA,
    },
    {
        title: "On demand",
        icon: "onIcon",
        tabsContent: SWIPER_DATA,
    },
    {
        title: "Programmes",
        icon: "programmesIcon",
        tabsContent: SWIPER_DATA,
    },
];