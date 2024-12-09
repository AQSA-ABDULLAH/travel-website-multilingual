import { useTranslations } from 'next-intl';

interface Destination {
    title: string;
    price: string;
    duration: string;
    image: string;
}

const Destinations: React.FC = () => {
    const t = useTranslations();

    const destinations: Destination[] = [
        {
            title: t("Destinations.destination1.title"),
            price: "$5.42k",
            duration: t("Destinations.destination1.duration"), 
            image: "/assest/destination/Rectangle 14.jpg",
        },
        {
            title: t("Destinations.destination2.title"), 
            price: "$4.2k",
            duration: t("Destinations.destination2.duration"), 
            image: "/assest/destination/Rectangle 15.png",
        },
        {
            title: t("Destinations.destination3.title"), 
            price: "$15k",
            duration: t("Destinations.destination3.duration"),
            image: "/assest/destination/Rectangle 16.png",
        },
    ];

    return (
        <section className="pt-28 bg-white mr-6 sm:mr-0">
            {/* Section Header */}
            <div className="container mx-auto text-center mb-12">
                <p className="text-[22px] sm:text-[28px] lg:text-[19px] 2xl:text-[18px] text-[#5E6282] font-poppins font-semibold mb-3">
                    {t("Main.heading")} {/* Dynamic text */}
                </p>
                <h2 className="text-[38px] sm:text-[48px] lg:text-[40px] 2xl:text-[50px] md:text-[48px] lg:text-[53px] text-[#14183E] font-volkhov font-bold pb-2">
                    {t("Main.title")} {/* Dynamic title */}
                </h2>
            </div>

            {/* Destination Cards */}
            <div className="flex flex-wrap justify-center gap-16 xl:justify-between">
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className="w-[280px] sm:w-[400px] lg:w-[320px] xl:w-[290px] 2xl:w-[314px] desktop:w-[420px] bg-white shadow-md rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
                    >
                        {/* Image */}
                        <img
                            src={destination.image}
                            alt={destination.title}
                            className="w-full h-[310px] desktop:h-[412px] object-cover"
                        />

                       {/* Card Content */}
                       <div className="p-6 text-[20px] sm:text-[25px] lg:text-[17px] 2xl:text-[18px] text-[#5E6282]">
                            <div className="flex justify-between">
                                <h3 className="text-[#14183E] font-semibold">
                                    {destination.title}
                                </h3>
                                <p className="text-[#14183E] font-semibold">
                                    {destination.price}
                                </p>
                            </div>
                            <p className="flex gap-2 mt-2 text-[#5E6282]">
                                <img src="/assest/destination/navigation 1.png" alt="icon" className="w-4 h-4" />
                                {destination.duration}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;



