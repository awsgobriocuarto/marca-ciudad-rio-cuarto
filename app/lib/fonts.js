import localFont from "next/font/local";

const sfCompact = localFont({
  src: [
    {
      path: "../fonts/SFCompactDisplay-Ultralight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/SFCompactDisplay-Thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/SFCompactDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/SFCompactDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SFCompactDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/SFCompactDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/SFCompactDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/SFCompactDisplay-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/SFCompactDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sf",
  display: "swap",
});

export default sfCompact;
