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

        <ul className="flex gap-8 items-center text-hitam">
            <li className="font-satoshi text-base">
                About Us
            </li>
            <li className="font-satoshi text-base">
                History of HMTC
            </li>
            <li className="font-satoshi text-base">
                Gallery
            </li>
            <li className="font-satoshi text-base">
                Akademik
            </li>
            <li className="font-satoshi text-base">
                Blog
            </li>
        </ul>
      </div>
    </>
    )
}

export default navbar