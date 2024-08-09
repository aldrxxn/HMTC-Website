import ImageAboutUs from '../assets/ImageAboutUs.png';

const AboutUs = () => {
  return (
    <div className='py-24 px-8 md:px-16 lg:px-72 h-auto items-center flex flex-col lg:flex-row gap-10'>
      <div className='w-full lg:w-1/2 flex justify-center'>
        {/* Image */}
        <img src={ImageAboutUs} alt="About Us Image" className='w-full max-w-md'/>
      </div>
      <div className='flex flex-col gap-4 w-full lg:w-1/2'>
        <div className='flex flex-col gap-2'>
          <div className='font-satoshi font-medium text-xl bg-gradient-to-r from-[#00AAE7] to-[#0076C0] inline-block text-transparent bg-clip-text'>
            {/* About Us */}
            ABOUT US
          </div>
          <div className='font-adelphe font-bold text-5xl'>
            {/* Title */}
            Dedication to Excellence in Education and Technology
          </div>
        </div>
        <div className='font-satoshi font-normal text-lg flex flex-col gap-2'>
          {/* Text */}
          <div>
            Organisasi ini bernama Himpunan Mahasiswa Teknik Computer – Informatika yang selanjutnya disebut HMTC.
          </div>
          <div>
            Tujuan HMTC adalah tercapainya kesempurnaan pendidikan dalam rangka membentuk pribadi mahasiswa yang bertaqwa kepada Tuhan Yang Maha Esa, memiliki sikap kecendekiawanan, integritas, kepekaan sosial, serta mampu menguasai dan
            mengembangkan Ilmu Pengetahuan dan Teknologi Informatika dan Komputer.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
