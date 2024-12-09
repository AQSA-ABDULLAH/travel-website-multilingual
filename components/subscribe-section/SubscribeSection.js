export default function SubscribeSection() {
  return (
    <section>
      <div className="bg-purple-50 rounded-tl-large rounded-b-2xl mt-24 py-24 relative">
        <div className="px-8 lg:px-32 flex flex-col items-center text-center">
          <h1 className="text-[20px] sm:text-[24px] lg:text-[32px] 2xl:text-[33px] dektop:text-[54px] 2xl:w-[859px] leading-8 md:leading-large text-[#5E6282] font-bold mb-16 2xl:mb-32">
            Subscribe to get information, latest news and other interesting offers about Cobham
          </h1>

          <div className="flex flex-col gap-10 lg:flex-row justify-center items-center space-x-4">
            <div className="flex items-center bg-white rounded-lg p-2 sm:w-[890px] max-w-[420px] z-10">
            <img
          src="/assest/subscribe/Group 46.png"
          className="w-auto h-auto"
          alt="Subscription Icon"
        />
              <input
                type="email"
                placeholder="Your email"
                className="w-full 2xl:w-[400px] px-4
              py-2 text-gray-600 focus:outline-none 2xl:text-[14px]"
              />
            </div>
            <button className="bg-orange-500 2xl:text-[17px] text-white px-8 py-4 rounded-lg hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>

        {/* Decorative Half-Circles (Left) */}
        <div className="absolute inset-0 overflow-hidden opacity-0 sm:opacity-30">
          <div className="absolute w-[260px] h-[260px] rounded-full border-[2px] border-purple-200 top-[65%] left-[32px]" />
          <div className="absolute w-[290px] h-[290px] rounded-full border-[2px] border-purple-200 top-[59%] left-[28px]" />
          <div className="absolute w-[320px] h-[320px] rounded-full border-[2px] border-purple-200 top-[52%] left-[36px]" />
          <div className="absolute w-[350px] h-[350px] rounded-full border-[2px] border-purple-200 top-[46%] left-[41px]" />
          <div className="absolute w-[384px] h-[384px] rounded-full border-[2px] border-purple-200 top-[39%] left-[45px]" />
          <div className="absolute w-[418px] h-[418px] rounded-full border-[2px] border-purple-200 top-[33%] left-[42px]" />
        </div>

        {/* Decorative Half-Circles (Right) */}
        <div className="absolute inset-0 overflow-hidden opacity-0 sm:opacity-30">
          <div className="absolute w-[190px] h-[190px] rounded-full border-[2px] border-purple-200 top-[22%] right-[-80px]" />
          <div className="absolute w-[225px] h-[225px] rounded-full border-[2px] border-purple-200 top-[15%] right-[-105px]" />
          <div className="absolute w-[238px] h-[238px] rounded-full border-[2px] border-purple-200 top-[10%] right-[-102px]" />
          <div className="absolute w-[260px] h-[260px] rounded-full border-[2px] border-purple-200 top-[4%] right-[-115px]" />
          <div className="absolute w-[280px] h-[280px] rounded-full border-[2px] border-purple-200 top-[0%] right-[-120px]" />
          <div className="absolute w-[310px] h-[310px] rounded-full border-[2px] border-purple-200 top-[-9%] right-[-128px]" />
        </div>


        {/* Decorative Element */}
        <div className="absolute top-[-14px] right-[-14px] rounded-full shadow-lg">
          <img src="/assest/subscribe/Group 77.png" className="z-10" alt="Subscription Icon" />
        </div>
      </div>
       {/* Image at the rightmost corner */}
       <div className="absolute md:mt-[-100px] opacity-0 sm:opacity-100 right-8">
        <img
          src="/assest/subscribe/Group 5.png"
          className="w-auto h-auto"
          alt="Subscription Icon"
        />
      </div>
    </section>
  );
}

