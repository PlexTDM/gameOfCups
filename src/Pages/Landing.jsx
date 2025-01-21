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
            <div className="flex justify-between mt-[170px]">
                <div className="animate"><p className="uppercase">catalog</p></div>
                <div className="mr-12">
                    <div className="animate">
                        <h1 className="font-aurora leading-[1.1] text-[48px] font-thin text-center w-fit uppercase">Journey Through Westeros</h1>
                    </div>
                    <div className="animate">
                        <h1 className="font-aurora leading-[1.1] text-[48px] font-thin text-center w-fit uppercase">From the Darkness</h1>
                    </div>
                    <div className="animate">
                        <h1 className="font-aurora leading-[1.1] text-[48px] font-thin text-center w-fit uppercase"> of Time to Your Table</h1>
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

            <div>
                <div className="grid lg:grid-cols-4 md:grid-rows-1 md:grid-cols-3 sm:grid-rows-4 gap-4">
                    <a className="col-start-1 col-end-1">
                        <img src="/img/cup1.jpg" />
                    </a>
                    <a className="lg:col-start-3">
                        <img src="/img/cup1.jpg" />
                    </a>
                    <a className="lg:col-start-4 lg:col-end-4">
                        <img src="/img/cup1.jpg" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Landing;