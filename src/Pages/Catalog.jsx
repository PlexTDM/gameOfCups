import { useEffect} from "react";

const Catalog = () =>{
   
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
   <div>
      <div className="flex justify-center items-center h-screen gap-4">
                    <a className="w-1/4 left-[20px]  h-[268px] ">
                        <img src="/img/Mcup1.jpg" />
                    </a>
                    <a className="w-1/2 left-[20px]  h-[268px]">
                        <img src="/img/Mcup2.jpg" />
                    </a>
                    <a className="w-1/4 left-[20px]  h-[268px] ">
                        <img src="/img/Mcup3.jpg" />
                    </a>
                </div>
        <div className="flex justify-center items-center mt-96 gap-96">
                 <a className="w-[423px]">
                    <img src="/img/Mcup4.jpg"  />
                 </a>
                 <a className="w-[823px]">
                    <img src="/img/Mcup5.jpg"  />
                 </a>
        </div>
        <div className="flex justify-center items-center h-screen gap-4">
                 <a className="">
                    <img src="/img/Mcup6.jpg"  />
                 </a>
                 <a className="">
                    <img src="/img/Mcup7.jpg"  />
                 </a>
        </div>
        <div className="flex justify-center items-center h-screen gap-4">
                    <a className="w-1/4 left-[20px]  h-[268px] ">
                        <img src="/img/Mcup8.jpg" />
                    </a>
                    <a className="w-1/2 left-[20px]  h-[268px]">
                        <img src="/img/Mcup9.jpg" />
                    </a>
                    <a className="w-1/4 left-[20px]  h-[268px] ">
                        <img src="/img/Mcup10.jpg" />
                    </a>
                </div>
   </div>
    );
}
export default Catalog;