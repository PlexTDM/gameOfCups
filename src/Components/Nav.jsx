const Nav = () => {
    return (
        <nav className="h-[50px] bg-white font-arial text-xs uppercase flex justify-between px-5 py-4 sticky top-0 z-40">
            <a className="" href="/">
                <img src="/logo.svg" alt="logo" />
            </a>
            <div className="flex gap-4 text-gray *:cursor-pointer *:relative">
                <a>
                    collections
                </a>
                <a>
                    about us
                </a>
                <a>
                    advantages
                </a>
                <a>
                    contacts
                </a>
            </div>

            <div className="w-[190px] flex gap-2 items-center justify-end">
                <p className="text-black font-semibold underline hover:text-sm pointer-events-none">my cart</p>
                <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                    0
                </span>
            </div>
        </nav>
    )
}

export default Nav;