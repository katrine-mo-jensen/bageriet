import { Newsletter } from "../components/NewsletterSection";
import { LatestNews } from "../components/LatestNews";
import { Slider } from "../components/Slider";
import { WakeNBake } from "../components/WakeNBake";

export function FrontPage() {
  return (
    <>
      <Slider />
      <LatestNews />
      <Newsletter />
      <WakeNBake/> 
      </>
  );
}
