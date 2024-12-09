import BookTrip from "@/components/book-trip/BookTrip";
import BrandLogos from "@/components/brand-logo/BrandLogo";
import Destinations from "@/components/destinations/Destinations";
import Footer from "@/components/footer/Footer";
import ServicesSection from "@/components/services/Services";
import SubscribeSection from "@/components/subscribe-section/SubscribeSection";
import Testimonials from "@/components/testimonials/Testimonials";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <div className="2xl:pr-40 lg:pr-32 sm:pr-6">
        <ServicesSection />
        <Destinations />
      </div>
      <div className="lg:pr-0 pr-6">
        <BookTrip />
      </div>
      <div className="2xl:pr-40 lg:pr-32 pr-6">
        <Testimonials />
        <BrandLogos />
        <SubscribeSection />
        <Footer />
      </div>
    </div>

    // <div className="overflow-x-hidden">
    // <div className="2xl:pl-40 lg:pl-32 pl-6">
    //   <Hero />
    //   <div className="2xl:pr-40 lg:pr-32 sm:pr-6">
    //     <ServicesSection />
    //     <Destinations />
    //   </div>
    //   <div className="lg:pr-0 pr-6">
    //     <BookTrip />
    //   </div>
    //   <div className="2xl:pr-40 lg:pr-32 pr-6">
    //     <Testimonials />
    //     <BrandLogos />
    //     <SubscribeSection />
    //     <Footer />
    //   </div>
    // </div>
    // </div>
  );
}
