import { useTranslations } from 'next-intl';

interface Service {
    title: string;
    description: string;
    icon: string;
    bgImage: string;
    bgPosition: {
        top: string;
        left: string;
    };
}

const ServicesSection: React.FC = () => {
    const t = useTranslations(); // Fetch translations

    const services: Service[] = [
        {
            title: t("Services.service1.title"),
            description:  t("Services.service1.description"),
            icon: "/assest/services/satellite-dish.png",
            bgImage: "/assest/services/Rectangle 157.png",
            bgPosition: { top: "2", left: "7" }
        },
        {
            title: t("Services.service2.title"), 
            description:  t("Services.service2.description"),
            icon: "/assest/services/plane.png",
            bgImage: "/assest/services/Rectangle 158.png",
            bgPosition: { top: "0", left: "4" }
        },
        {
            title: t("Services.service3.title"), 
            description:  t("Services.service3.description"),
            icon: "/assest/services/image 25.png",
            bgImage: "/assest/services/Rectangle 159.png",
            bgPosition: { top: "0", left: "6" }
        },
        {
            title: t("Services.service4.title"), 
            description:  t("Services.service4.description"),
            icon: "/assest/services/power-supply_1.png",
            bgImage: "/assest/services/Rectangle 160.png",
            bgPosition: { top: "2", left: "6" }
        }
    ];

    return (
        <section className="py-10 mr-4 sm:mr-0 relative xl:min-h-[560px] animate-fadeInTop">
            {/* Section Header */}
            <div className="text-center mb-12">
                <p className="text-[22px] lg:text-[19px] 2xl:text-[18px] text-[#5E6282] font-poppins font-semibold mb-3">
                    {t("Services.category")} {/* Dynamic category */}
                </p>
                <h2 className="text-[38px] sm:text-[45px] lg:text-[32px] 2xl:text-[50px] desktop:text-[50px] md:text-[48px] lg:text-[53px] text-[#14183E] font-volkhov font-bold pb-14">
                    {t("Services.title")} {/* Dynamic title */}
                </h2>
            </div>

            {/* Service Cards */}
            <div className="flex flex-wrap justify-center gap-16 xl:justify-between 2xl:justify-center desktop:justify-between relative">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-[280px] md:w-[220px] lg:w-[220px] 2xl:min-w-[190px] desktop:w-[250px] desktop:hover:w-[260px] flex flex-col 
                        items-center relative group animate-fadeUp"
                    >
                        <section className="z-10 hover:bg-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:p-2 relative">
                            {/* Background image with dynamic position */}
                            <div
                                className="absolute transition-all duration-300 opacity-70 group-hover:opacity-100"
                                style={{
                                    top: `${service.bgPosition.top}rem`,
                                    left: `${service.bgPosition.left}rem`
                                }}
                            >
                                <img
                                    alt="Background Shape"
                                    src={service.bgImage}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            {/* Foreground image */}
                            <div className="w-22 h-20 relative z-10 transition-all duration-300 group-hover:scale-110">
                                <img
                                    src={service.icon}
                                    alt={`${service.title} icon`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="text-center pt-10">
                                <h3 className="text-[18px] lg:text-[18px] 2xl:text-[20px] text-[#1E1D4C] font-semibold mb-2 tracking-wide 2xl:tracking-normal transition-all duration-300 group-hover:text-[#14183E]">
                                    {service.title}
                                </h3>
                                <p className="text-[18px] lg:text-[14px] 2xl:text-[16px] text-[#5E6282] mb-2 tracking-wide transition-all duration-300 group-hover:text-[#1E1D4C]">
                                    {service.description}
                                </p>
                            </div>
                        </section>

                        {/* Hover Image */}
                        <div
                            className="absolute top-32 right-32 lg:top-[110px] lg:right-[100px] 2xl:top-28 2xl:right-30 desktop:right-32 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0 pointer-events-none"
                        >
                            <img
                                src="/assest/services/Rectangle.png"
                                alt="Hover Background"
                                className="w-auto h-auto 2xl:w-[135px] object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;




