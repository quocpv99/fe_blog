export default function Header() {
    return (<>
        <header>

            <nav
                class="relative flex w-full items-center justify-between md:h-12 bg-white py-2 text-neutral-600 shadow-md md:flex-wrap md:justify-start"
                data-te-navbar-ref>
                <div class="flex w-full flex-wrap items-center justify-end gap-3 px-3">
                    <div className="flex flex-col items-end justify-center">
                        <h5 class="text-sm font-medium leading-tight text-black">
                            Phan Văn Anh Quốc
                        </h5>
                        <h6 class="text-[12px] font-normal leading-tight text-black">
                            quocphan20111999@gmail.com
                        </h6>
                    </div>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                        class="w-9 rounded-full shadow-md cursor-pointer"
                        alt="Avatar" />
                    <img 
                        src="/icons/logout.svg" 
                        class="w-9 cursor-pointer" 
                        alt="icon-logout" />
                </div>
            </nav>
        </header>
    </>)
}