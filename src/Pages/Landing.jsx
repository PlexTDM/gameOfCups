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
                            // entry.target.classList.add('animation-start');
                            observer.unobserve(entry.target);
                            await sleep(300); // Adjust the delay as needed
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
            <p className="uppercase text-[10.8vw] text-center text-gray font-aurora leading-[230px]">
                game of cups
            </p>
            <div className="relative">
                <img src="/img/vase.jpg" style={{ opacity: opacity }} />
                <div className="absolute top-[80px] left-1/2  w-[390px] text-gray font-arial">
                    <h1 className="leading-[22px] text-xl font-medium mb-8">
                        Feel like a true lord of Westeros. Targaryens, Starkes, Lannisters, Greyjoys — pick a side
                    </h1>
                    <a href="https://gameofcups.tilda.ws/catalog" className="uppercase text-lg font-bold hover:text-lgray duration-200 underline-effect w-fit relative">
                        see catalog
                    </a>
                </div>
            </div>
            <div className="flex justify-between mt-[170px]">
                <div className="animate"><p className="uppercase">collections</p></div>
                <div>
                    <div className="animate">
                        <h1 className="font-aurora leading-[1.1] text-[60px] font-thin text-center w-fit uppercase">In the Name of Ice and Flame</h1>
                    </div>
                    <div className="animate">
                        <h1 className="font-aurora leading-[1.1] text-[60px] font-thin text-center w-fit uppercase">Cups for True Lords</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;