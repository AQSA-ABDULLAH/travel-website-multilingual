import Main from "./Main";
import Navbar from "./Navbar";


interface HeroProps {
    locale: string;
}

export default function Hero({ locale }: HeroProps) {
    return (
        <section className="relative w-full h-full pr-6 md:pr-20">
            {/* Background Image */}
            <img
                src="/assest/decore/Decore.png"
                alt="Background Image"
                className="absolute top-0 right-0 w-[280px] sm:w-[380px] sm:h-[380px] lg:w-[620px] lg:h-[640px] opacity-100 2xl:w-[766px] 2xl:h-[870px]"
            />

            <div className="relative z-10">
                <Navbar locale={locale} />
                <Main />
            </div>
        </section>
    );
}

