import { useEffect } from "react";

const Catalog = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const addClassWithDelay = async () => {
          for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            if (entry.isIntersecting) {
              for (const child of entry.target.children) {
                child.classList.add("animation-start");
              }
              observer.unobserve(entry.target);
              await sleep(300);
            }
          }
        };

        addClassWithDelay();
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate").forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });
    return () => {
      document.querySelectorAll(".animate").forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="font-arial">
      <div className="flex justify-between mt-[170px]">
        <div className="animate">
          <p className="uppercase">catalog</p>
        </div>
        <div className="mr-12">
          <div className="animate">
            <h1 className="font-aurora leading-[1.1] lg:text-[48px] text-[30px] font-thin text-center w-fit uppercase">
              Journey Through Westeros
            </h1>
          </div>
          <div className="animate">
            <h1 className="font-aurora leading-[1.1] lg:text-[48px] text-[30px] font-thin text-center w-fit uppercase">
              From the Darkness
            </h1>
          </div>
          <div className="animate">
            <h1 className="font-aurora leading-[1.1] lg:text-[48px] text-[30px] font-thin text-center w-fit uppercase">
              of Time to Your Table
            </h1>
          </div>
        </div>
      </div>

      <div className="text-[12px] break-keep">
        <div className="animate w-fit -translate-x-[20%] mx-auto">
          <p>
            Immerse yourself in the majestic and violent Westeros as you raise
          </p>
        </div>

        <div className="animate w-[300px] mx-auto">
          <p>
            a glass in honor of your favorite heroes. Each goblet embodies the
            spirit of greatness and betrayal, reflecting the symbolism of the
            houses and key moments that left a mark on the story. They’re
            perfect for your fantasy parties, binge-watching episodes or as a
            luxurious gift for true fans.
          </p>
        </div>
      </div>
      <div className="mb-[80px] font-arial mt-10">
        <div className=" lg:w-full flex gap-4 sm:flex-row xs:flex-col w-full">
          <a className="col-start-1 lg:w-1/4">
            <div className="animate-upDown">
              <img src="/img/Mcup1.jpg" className="cursor-pointer" />
            </div>
            <div className="pt-5 pb-5 ">
              {" "}
              <hr className="border-stone-300" />
            </div>
            <h3 className="font-lg font-semibold">Goblet “House Lannister”</h3>
            <span className="flex justify-between">
              <p className="text-lgray text-xs">
                black marble, silver, red gemstone
              </p>
            </span>
            <div className="flex justify-between font-semibold text-lg">
              <a className=" flex justify-between">$112</a>
              <a className="underline-effect uppercase text-lg relative cursor-pointer font-bold">
                ADD TO CART
              </a>
            </div>
          </a>
          <a className="lg:w-1/2">
            <div className="animate-leftRight">
              <img src="/img/Mcup2.jpg" className="cursor-pointer" />
            </div>
            <div className="pt-5 pb-5 ">
              {" "}
              <hr className="border-stone-300" />
            </div>
            <h3 className="font-lg font-semibold"> Goblet “House Stark”</h3>
            <span className="flex justify-between">
              <p className="text-lgray text-xs">silver, green opals</p>
            </span>
            <div className="flex justify-between font-semibold text-lg">
              <a className=" flex justify-between">$140</a>
              <a className="underline-effect uppercase text-lg relative cursor-pointer font-bold">
                ADD TO CART
              </a>
            </div>
          </a>
          <a className="lg:w-1/4">
            <div className="animate-upDown">
              <img src="/img/Mcup3.jpg" className="cursor-pointer" />
            </div>
            <div className="pt-5 pb-5 ">
              {" "}
              <hr className="border-stone-300" />
            </div>
            <h3 className="font-lg font-semibold">Goblet “House Martell”</h3>
            <span className="flex justify-between">
              <p className="text-lgray text-xs">
                marble, gold, yellow gemstone
              </p>
            </span>
            <div className="flex justify-between font-semibold text-lg">
              <a className=" flex justify-between">$108</a>
              <a className="underline-effect uppercase text-lg relative cursor-pointer font-bold">
                ADD TO CART
              </a>
            </div>
          </a>
        </div>
      </div>

      <div className="flex sm:flex-row xs:flex-col w-full justify-between gap-4 mt-9">
        <div className="lg:w-1/4 sm:w-2/3 w-full ">
          <div className="animate-upDown">
            <img src="/img/Mcup4.jpg" className="cursor-pointer" />
          </div>
          <div className="pt-5 pb-5 ">
            {" "}
            <hr className="border-stone-300" />
          </div>
          <h3 className="font-lg font-semibold">Goblet “House Baratheon”</h3>
          <span className="flex justify-between">
            <p className="text-lgray text-xs">
              marble, yellow and white gold, yellow topazes
            </p>
          </span>
          <div className="flex justify-between font-semibold text-lg">
            <a className=" flex justify-between">$112</a>
            <a className="underline-effect uppercase text-lg relative cursor-pointer font-bold">
              ADD TO CART
            </a>
          </div>
        </div>
        <div className="flex w-1/2 sm:flex-row xs:flex-col gap-4 ">
          <div className="w-full ">
            <div className="animate-leftRight">
              <img src="/img/Mcup5.jpg" className="cursor-pointer" />
            </div>
            <div className="pt-5 pb-5 ">
              {" "}
              <hr className="border-stone-300" />
            </div>
            <h3 className="font-lg font-semibold">Goblet “House Hightower”</h3>
            <span className="flex justify-between">
              <p className="text-lgray text-xs">
                marble, silver, gold, green and violet onyx
              </p>
            </span>
            <div className="flex justify-between font-semibold text-lg">
              <a className=" flex justify-between">$112</a>
              <a className="underline-effect uppercase text-lg relative cursor-pointer font-bold">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row xs:flex-col w-full gap-4 mt-9">
        <div className="lg:w-1/2 sm:w-2/3 w-full">
          <div className="animate-leftRight">
            <img src="/img/Mcup6.jpg" className="cursor-pointer" />
          </div>
          <div className="pt-5 pb-5 ">
            {" "}
            <hr className="border-stone-300" />
          </div>
          <h3 className="font-lg font-semibold">Goblet “House Arryn”</h3>
          <span className="flex justify-between">
            <p className="text-lgray text-xs">marble, silver, gold, onyx</p>
          </span>
          <div className="flex justify-between ">
            <a className=" flex justify-between font-semibold text-lg">$112</a>
            <a className="underline-effect uppercase text-lg relative cursor-pointer font-bold">
              ADD TO CART
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full flex flex-col items-end justify-between">
          <div className="lg:w-1/2 w-full">
            <div className="animate-upDown">
              <img src="/img/Mcup7.jpg" className="cursor-pointer" />
            </div>
            <div className="pt-5 pb-5 ">
              {" "}
              <hr className="border-stone-300" />
            </div>
            <h3 className="font-lg font-semibold">
              Goblet “Family, Duty, Honor”
            </h3>
            <span className="flex justify-between">
              <p className="text-lgray text-xs">
                marble, silver, blue, gemstones
              </p>
            </span>
            <div className="flex justify-between ">
              <a className=" flex justify-between font-semibold text-lg">
                $112
              </a>
              <a className="underline-effect uppercase text-lg relative cursor-pointer font-bold">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:w-full flex gap-4 sm:flex-row xs:flex-col w-full mt-9">
        <a className="col-start-1 lg:w-1/4">
          <div className="animate-upDown">
            <img src="/img/Mcup8.jpg" className="cursor-pointer" />
          </div>
          <div className="pt-5 pb-5 ">
            {" "}
            <hr className="border-stone-300" />
          </div>
          <h3 className="font-lg font-semibold">Goblet "House Lannister"</h3>
          <span className="flex justify-between">
            <p className="text-lgray text-xs">
              white marble, silver, red gemstone
            </p>
          </span>
          <div className="flex justify-between ">
            <a className=" flex justify-between font-semibold text-lg">$112</a>
            <a className="underline-effect uppercase text-lg relative cursor-pointer font-bold">
              ADD TO CART
            </a>
          </div>
        </a>
        <a className="lg:w-1/2">
          <div className="animate-leftRight">
            <img src="/img/Mcup9.jpg" className="cursor-pointer" />
          </div>
          <div className="pt-5 pb-5 ">
            {" "}
            <hr className="border-stone-300" />
          </div>
          <h3 className="font-lg font-semibold">Goblet “Here We Stand”</h3>
          <span className="flex justify-between">
            <p className="text-lgray text-xs">
              black and white marble, black silver, brown gemstones
            </p>
          </span>
          <div className="flex justify-between ">
            <a className=" flex justify-between font-semibold text-lg">$112</a>
            <a className="underline-effect uppercase text-lg relative cursor-pointer font-bold">
              ADD TO CART
            </a>
          </div>
        </a>
        <a className="lg:w-1/4">
          <div className="animate-upDown">
            <img src="/img/Mcup10.jpg" className="cursor-pointer" />
          </div>
          <div className="pt-5 pb-5 ">
            {" "}
            <hr className="border-stone-300" />
          </div>
          <h3 className="font-lg font-semibold">Goblet “House Baratheon”</h3>
          <span className="flex justify-between">
            <p className="text-lgray text-xs">white marble, gold, ember</p>
          </span>
          <div className="flex justify-between ">
            <a className=" flex justify-between font-semibold text-lg">$112</a>
            <a className="underline-effect uppercase text-lg relative cursor-pointer font-bold">
              ADD TO CART
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Catalog;
