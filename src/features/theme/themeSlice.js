import { createSlice } from "@reduxjs/toolkit";
import frame7Pink from "../../assets/frame7Pink.webp";
import frame7Blue from "../../assets/frame7Blue.webp";
import frame7Green from "../../assets/frame7Green.webp";
import frame7Purple from "../../assets/frame7Purple.webp";
import frame7Yellow from "../../assets/frame7Yellow.webp";
import HeadpiecePink from "../../assets/HeadpiecePink.webp";
import HeadpieceGreen from "../../assets/HeadpieceGreen.webp";
import HeadpieceBlue from "../../assets/HeadpieceBlue.webp";
import HeadpieceYellow from "../../assets/HeadpieceYellow.webp";
import HeadpiecePurple from "../../assets/HeadpiecePurple.webp";

const initialVariants = [
  {
    id: 1,
    dot: "bg-accent-dot-pink",
    outline: "outline-accent-dot-pink/30",
    ring: "ring-accent-dot-pink/20",
    img: HeadpiecePink,
    bg: "bg-bg-pink",
    text: "text-accent-pink",
    modeBorder: "border-accent-pink",
    carousel: "bg-accent-carousel-pink",
    navbarBg: "bg-accent-carousel-pink/5",
    ellipse: frame7Pink,
    carouselShadow: "shadow-accent-pink",
    carouselGradientStart: "from-pink-gradient-start",
    carouselGradientEnd: "to-pink-gradient-end",
  },
  {
    id: 2,
    dot: "bg-accent-dot-green",
    outline: "outline-accent-dot-green/30",
    ring: "ring-accent-dot-green/20",
    img: HeadpieceGreen,
    bg: "bg-bg-green",
    text: "text-accent-green",
    modeBorder: "border-accent-green",
    carousel: "bg-accent-carousel-green",
    navbarBg: "bg-accent-carousel-green/5",
    ellipse: frame7Green,
    carouselShadow: "shadow-accent-green",
    carouselGradientStart: "from-gradient-start",
    carouselGradientEnd: "to-green-gradient-end",
  },
  {
    id: 3,
    dot: "bg-accent-dot-blue",
    outline: "outline-accent-dot-blue/30",
    ring: "ring-accent-dot-blue/20",
    img: HeadpieceBlue,
    bg: "bg-bg-blue",
    text: "text-accent-blue",
    modeBorder: "border-accent-blue",
    carousel: "bg-accent-carousel-blue",
    navbarBg: "bg-accent-carousel-blue/5",
    ellipse: frame7Blue,
    carouselShadow: "shadow-accent-blue",
    carouselGradientStart: "from-gradient-start",
    carouselGradientEnd: "to-blue-gradient-end",
  },
  {
    id: 4,
    dot: "bg-accent-dot-purple",
    outline: "outline-accent-dot-purple/30",
    ring: "ring-accent-dot-purple/20",
    img: HeadpiecePurple,
    bg: "bg-bg-purple",
    text: "text-accent-purple",
    modeBorder: "border-accent-purple",
    carousel: "bg-accent-carousel-purple",
    navbarBg: "bg-accent-carousel-purple/5",
    ellipse: frame7Purple,
    carouselShadow: "shadow-accent-purple",
    carouselGradientStart: "from-gradient-start",
    carouselGradientEnd: "to-purple-gradient-end",
  },
  {
    id: 5,
    dot: "bg-accent-dot-yellow",
    outline: "outline-accent-dot-yellow/30",
    ring: "ring-accent-dot-yellow/20",
    img: HeadpieceYellow,
    bg: "bg-bg-yellow",
    text: "text-accent-yellow",
    modeBorder: "border-accent-yellow",
    carousel: "bg-accent-carousel-yellow",
    navbarBg: "bg-accent-carousel-yellow/5",
    ellipse: frame7Yellow,
    carouselShadow: "shadow-accent-yellow",
    carouselGradientStart: "from-gradient-start",
    carouselGradientEnd: "to-yellow-gradient-end",
  },
];

const initialState = {
  mode:
    localStorage.getItem("mode") ||
    (!("mode" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      "dark"),

  variants: initialVariants,

  activeVariant: initialVariants[0],
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
    },

    setActiveVariant: (state, action) => {
      state.activeVariant = action.payload;
    },
  },
});

export const { setTheme, setActiveVariant } = themeSlice.actions;

export const getIsDark = (state) => state.theme.mode === "dark";

export default themeSlice.reducer;
