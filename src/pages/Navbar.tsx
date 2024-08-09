import Logo from '../assets/Logo.svg'; 
const navbar = () => {
    return(
    <>
      <div className="flex justify-between px-24 bg- py-6">
      <ul className='flex gap-2'>
    <li>
        <img src={Logo} alt="Logo" className="w-8 h-8" />
    </li>
    <li className='leading-none text-black'>
        <div className="font-inter font-extrabold text-hitam">
            Kunci
        </div>
        <div className='font-inter font-extrabold text-hitam'>
            Transformasi.
        </div>
    </li>
</ul>

        <ul className="flex gap-8 items-center text-base text-hitam">
            <li className="hover:bg-gradient-to-r from-[#00AAE7] to-[#0076C0] inline-block hover:text-transparent bg-clip-text">
                About Us
            </li>
            <li className="hover:bg-gradient-to-r from-[#00AAE7] to-[#0076C0] inline-block hover:text-transparent bg-clip-text">
                History of HMTC
            </li>
            <li className="hover:bg-gradient-to-r from-[#00AAE7] to-[#0076C0] inline-block hover:text-transparent bg-clip-text">
                Gallery
            </li>
            <li className="hover:bg-gradient-to-r from-[#00AAE7] to-[#0076C0] inline-block hover:text-transparent bg-clip-text">
                Akademik
            </li>
            <li className="hover:bg-gradient-to-r from-[#00AAE7] to-[#0076C0] inline-block hover:text-transparent bg-clip-text">
                Blog
            </li>
        </ul>
      </div>
    </>
    )
}

export default navbar