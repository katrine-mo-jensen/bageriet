import { Newsletter } from "../components/NewsletterSection";
import { LatestNews } from "../components/LatestNews";
import { Slider } from "../components/Slider";

export function FrontPage() {
  return (
    <>
      <Slider />
      <LatestNews />
      <Newsletter />
    </>
  );
}
