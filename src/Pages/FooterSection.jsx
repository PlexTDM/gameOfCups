const FooterSection = () => {
    return (
        <div className="font-arial">

            <div className="flex justify-between mt-[170px]">
                <div className="animate relative z-20 w-min px-2">
                    <p className="uppercase font-arial text-lgray text-sm font-thin">contacts</p>
                </div>
                <div className="mr-12 font-aurora leading-[1.1]">
                    <div className="animate">
                        <h1 className="lg:text-[48px] text-[30px] font-thin text-center w-fit uppercase">Conquer the Seven Kingdoms</h1>
                    </div>
                    <div className="animate mx-auto w-fit">
                        <h1 className="lg:text-[48px] text-[30px] font-thin text-center w-fit uppercase">Connecting with Us</h1>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-3 grid-rows-[1fr_auto]">
                <div className="flex flex-col justify-between">
                    <div>
                        <p className="uppercase font-aurora">game of cups</p>
                        <p className="text-lgray2 text-xs" >Game of Cups ©2024.</p>
                        <p className="text-lgray2 text-xs">All rights reserved</p>
                    </div>
                    <div className="uppercase text-md *:relative *:w-min cursor-pointer font-bold flex flex-col gap-2">
                        <a className="hover-underline">instagram</a>
                        <a className="hover-underline">whatsapp</a>
                        <a className="hover-underline">info@gameofcups.com</a>
                    </div>
                </div>
                <div className="col-span-2 animate-leftRight">
                    <img src="/img/footer_main.jpg" />
                </div>

                <div className="text-lgray2 flex items-end">
                    <a className="underline-effect relative cursor-pointer text-sm mb-7">Website development</a>
                </div>
                <div className="text-lgray2 py-3">
                    <p>The site is non-commercial and is done as part of <a className="underline-effect relative text-gray cursor-pointer">Citadel.study</a>. All information on the site is fictitious and invalid.</p>
                </div>
                <div className="text-lgray2 py-3">
                    <p>All images are generated <br /> <a className="underline-effect relative text-gray cursor-pointer">by Midjourney’s neural network</a></p>
                </div>
            </div>


        </div>
    )
}

export default FooterSection