import Header from "./Header";
import Main from "./Main";

export default function Hero() {
  return (
      <section className="relative w-full h-full pr-6 md:pr-20">
          {/* Background Image */}
          <img
              src="/assest/decore/Decore.png"
              alt=""
              className="absolute top-[0px] right-[0px] w-[280px] sm:w-[380px] sm:h[380px] lg:w-[620px] lg:h-[640px] 
              opacity-100 2xl:w-[766px] 2xl:h-[870px]"
          />
          
          {/* Header and Main */}
          <div className="relative z-10">
              <Header />
              <Main />
          </div>
      </section>
  );
}

