import { useEffect, useState } from "react";

const Landing = () => {


    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const newOpacity = 1 - scrollTop / maxScroll;
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

                const addClassWithDelay = async () => {
                    for (let i = 0; i < entries.length; i++) {
                        const entry = entries[i];
                        if (entry.isIntersecting) {
                            for (const child of entry.target.children) {
                                child.classList.add('animation-start')
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

        document.querySelectorAll('.animate').forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            document.querySelectorAll('.animate').forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <section className="w-full font-arial text-gray">
            <p className="uppercase text-[10vw] break-keep text-nowrap text-center text-gray font-aurora leading-[230px]">
                game of cups
            </p>
            <div className="relative">
                <div className="md:absolute mb-5 top-[80px] left-1/2  w-[390px] text-gray font-arial">
                    <h1 className="leading-[22px] lg:text-xl font-medium mb-8">
                        Feel like a true lord of Westeros. Targaryens, Starkes, Lannisters, Greyjoys — pick a side
                    </h1>
                    <a href="https://gameofcups.tilda.ws/catalog" className="uppercase lg:text-lg font-bold hover:text-lgray duration-200 underline-effect w-fit relative">
                        see catalog
                    </a>
                </div>
                <img src="/img/vase.jpg" style={{ opacity: opacity }} />
            </div>
            <div className="flex justify-between mt-[170px]">
                <div className="animate"><p className="uppercase">catalog</p></div>
                <div className="mr-12">
                    <div className="animate">
                        <h1 className="font-aurora leading-[1.1] lg:text-[48px] text-[30px] font-thin text-center w-fit uppercase">In the Name of Ice and Flame</h1>
                    </div>
                    <div className="animate">
                        <h1 className="font-aurora leading-[1.1] lg:text-[48px] text-[30px] font-thin text-center w-fit uppercase">Cups for True Lords</h1>
                    </div>
                </div>
            </div>

            <div className="text-[12px] break-keep">
                <div className="animate w-fit -translate-x-[20%] mx-auto">
                    <p>Immerse yourself in the majestic and violent Westeros as you raise</p>
                </div>

                <div className="animate w-[300px] mx-auto">
                    <p>
                        and atmosphere of legendary Westeros. In each collection you will find goblets inspired by different houses, cultures and key moments in the saga of George R. R. Martin.
                    </p>
                </div>
                <div className="animate w-[300px] mt-4 mx-auto">
                    <p>
                        Our goblets come in a variety of styles, from stately and noble to dark and mysterious. Every detail, from the patterns to the shape, conveys a unique story and allows you to feel part of the epic struggle for the Iron Throne.
                    </p>
                </div>
            </div>

            <div className="mb-[80px]">
                <div className="grid lg:grid-cols-4 md:grid-rows-1 md:grid-cols-3 sm:grid-rows-4 gap-4">
                    <a className="col-start-1 col-end-1">
                        <img src="/img/cup1.jpg" />
                        <h3>Collection “Symbols of Glory”</h3>
                        <span className="flex justify-between">
                            <p className="text-lgray text-xs">marble, gold, gemstones</p>
                            <a className="underline-effect uppercase text-xs relative cursor-pointer font-bold">more</a>
                        </span>
                    </a>
                    <a className="lg:col-start-3">
                        <img src="/img/cup2.jpg" />
                        <h3>Collection “The Age of Ice and Fire”</h3>
                        <span className="flex justify-between">
                            <p className="text-lgray text-xs">marble, gold, gemstones</p>
                            <a className="underline-effect uppercase text-xs relative cursor-pointer font-bold">more</a>
                        </span>
                    </a>
                    <a className="lg:col-start-4 lg:col-end-4">
                        <img src="/img/cup3.jpg" />
                        <h3>Collection “The Houses of Westeros”</h3>
                        <span className="flex justify-between">
                            <p className="text-lgray text-xs">marble, silver, gemstones</p>
                            <a className="underline-effect uppercase text-xs relative cursor-pointer font-bold">more</a>
                        </span>
                    </a>
                </div>
            </div>

            <div className="flex sm:flex-row xs:flex-col w-full gap-4">
                <div className="lg:w-1/2 sm:w-2/3 w-full">
                    <img alt="cup" src="/img/cup4.jpg" />
                    <h3>Collection “Westerosi Feasts”</h3>
                    <span className="flex justify-between">
                        <p className="text-lgray text-xs">marble, silver, gold, gemstones</p>
                        <a className="underline-effect uppercase text-xs relative cursor-pointer font-bold">more</a>
                    </span>
                </div>
                <div className="lg:w-1/2 sm:w-1/3 w-full flex flex-col items-end justify-between">

                    <div className="lg:w-1/2 w-full">
                        <img alt="cup" src="/img/cup5.jpg" />
                        <h3>Collection ”Secrets of the night”</h3>
                        <span className="flex justify-between">
                            <p className="text-lgray text-xs">marble, silver, gemstones</p>
                            <a className="underline-effect uppercase text-xs relative cursor-pointer font-bold">more</a>
                        </span>
                    </div>

                    <div className="col-span-2 mx-auto">
                        <a className="underline-effect uppercase text-xs relative cursor-pointer font-bold">see all collections</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;