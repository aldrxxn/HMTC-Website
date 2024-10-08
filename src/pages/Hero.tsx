import ImageHero1 from '../assets/ImageHero1.png'
import ImageHero2 from '../assets/ImageHero2.png'
import ImageHero3 from '../assets/ImageHero3.jpg'
import ImageHero4 from '../assets/ImageHero4.png'
const Hero = () => {
  return (
    <>
    <div className="px-24 justify-center flex flex-col gap-12  overflow-x-hidden" style={{ height: 'calc(100vh - 80px)' }}>
      <div>
        <div className="font-adelphe font-bold text-6xl text-hitam">
            {/* Selamat datang di <br/>Himpunan Mahasiswa <br/>Teknik Computer-Informatika. */}
            <div>
            Selamat datang di
              </div>
            <div>
            Himpunan Mahasiswa
              </div>
              <div>
              Teknik Computer-Informatika.
              </div>
        </div>
        <div>
          {/* button */}
        </div>
      </div>
      <div className='flex gap-5'>
      <img src={ImageHero1} alt="" className='h-[446px]'/>
      <img src={ImageHero2} alt="" className='h-[446px]'/>
      <img src={ImageHero3} alt="" className='h-[446px]'/>
      <img src={ImageHero4} alt="" className='h-[446px]'/>
      </div>
    </div>
    </>
)
}

export default Hero