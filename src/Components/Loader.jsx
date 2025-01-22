import { useEffect, useRef } from "react"

const Loader = () => {

    const loaderRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            // loaderRef.current.style.display = 'none';
            loaderRef.current.classList.add('dissolve')
            setTimeout(() => {
                loaderRef.current.style.display = 'none'
            }, 700);
        }, 3000);
    }, [])

    return (
        <div ref={loaderRef}
            className="fixed w-screen h-screen  z-50 bg-white flex justify-center items-center">
            <div className="flex gap-4 *:w-[70px]">
                <img className="loader1" src="/img/loader1.png" alt="a" />
                <img className="loader2" src="/img/loader2.png" alt="b" />
                <img className="loader3" src="/img/loader3.png" alt="c" />
                <img className="loader4" src="/img/loader4.png" alt="d" />
                <img className="loader5" src="/img/loader5.png" alt="e" />
                <img className="loader6" src="/img/loader6.png" alt="f" />
            </div>
        </div>
    )
}

export default Loader