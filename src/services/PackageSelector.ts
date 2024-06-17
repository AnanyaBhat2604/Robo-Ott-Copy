import dynamic from "next/dynamic";

const Rails = dynamic(() => import("@/packages/Rails/Rails"));
const Hero = dynamic(() => import("@/packages/Hero/Hero"));
// const FAQ = dynamic(() => import("@/packages/FAQ/FAQ"));
const Banner = dynamic(() => import("@/packages/Banner/Banner"));
const NotFound = dynamic(() => import("@/packages/NotFound/NotFound"));

function getComponent(key: string) {
  switch (key) {
    case "Rails":
      return Rails;
    // case "FAQ":
    //   return FAQ;
    case "Hero":
      return Hero;
    case "Banner":
      return Banner;
    default:
      // throw new Error(`Unknown component key: ${key}`);
      return NotFound;
  }
}

export default getComponent;
