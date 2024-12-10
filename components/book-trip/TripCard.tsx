export default function TripCard() {
    return (
        <div className="relative w-200 lg:mt-0 mt-20 mr-24 lg:mr-0">
            {/* Background image */}
            <img
                src="/assest/book-section/Ellipse 8.png"
                alt="Trip to Greece"
                className="absolute top-[-100px] right-[-100px] object-cover -z-10" // Positioning the image
            />
            {/* Main Trip Card */}
            <div className="p-6 bg-white rounded-xl shadow-lg overflow-hidden relative">
                {/* Image Section */}
                <img
                    src="/assest/book-section/Rectangle 17.jpg"
                    alt="Trip to Greece"
                    className="w-full h-[170px] object-cover"
                />
                {/* Text Content */}
                <div className="py-4">
                    <h3 className="text-[18px] font-bold text-gray-800 pb-2">Trip To Greece</h3>
                    <p className="text-[17px] text-[#84829A] font-medium tracking-wide">14-29 June | by Robbin John</p>
                    {/* Icons and Footer */}
                    <img
                        src="/assest/book-section/OPTIONS.png"
                        alt="icon"
                        className="py-6"
                    />
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <img
                                src="/assest/book-section/building 1.png"
                                alt="icon"
                            />
                            <p className="text-[16px] text-gray-500 ">24 people going</p>
                        </div>
                        <img
                                src="/assest/book-section/heart (6) 1.png"
                                alt="icon"
                            />
                    </div>
                </div>
            </div>

            {/* Ongoing Trip Info */}
            <div className="absolute bottom-[4.8rem] left-[84%] transform -translate-x-1/2 bg-white shadow-md rounded-lg px-4 py-2 w-64">
                <div className="flex gap-8">
                    <img
                        src="/assest/book-section/Mask Group.png"
                        alt="icon"
                        className="h-12"
                    />
                    <div>
                        <p className="text-[15px] text-[#84829A] font-bold">Ongoing</p>
                        <p className="text-[17px] font-bold">Trip to Rome</p>
                        <p className="text-[16px] text-[#84829A] font-medium mt-2">40% completed</p>

                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div
                                className="bg-indigo-500 h-2 rounded-full"
                                style={{ width: "40%" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

