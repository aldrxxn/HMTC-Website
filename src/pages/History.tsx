import Chairman1 from '../assets/Chairman01.png'
import Chairman2 from '../assets/Chairman02.png'
import Chairman3 from '../assets/Chairman03.png'
import Chairman4 from '../assets/Chairman04.png'
import Chairman5 from '../assets/Chairman05.png'
import Chairman6 from '../assets/Chairman06.png'
import Chairman7 from '../assets/Chairman07.png'
import Chairman8 from '../assets/Chairman08.png'
import Chairman9 from '../assets/Chairman09.png'
import Chairman10 from '../assets/Chairman10.png'
const History = () => {
  return (
    <div className='pl-24 lg:pl-72 py-24 bg-hitam text-white flex flex-col gap-10 overflow-x-hidden'>
        <div className='flex flex-col gap-4'>
            <div className="font-satoshi font-medium text-xl">
                {/* Historu of HMTC */}
                HISTORY OF HMTC
            </div>
            <div className=" font-adelphe font-bold text-5xl">
                {/* Get to Know The Chairman of HMTC  */}
                Get to Know <br />The Chairman of HMTC
            </div>
            <div className='pr-24 lg:pr-72 font-satoshi font-thin text-lg flex flex-col gap-2 opacity-68'>
                {/* desc */}
                Ultricies lorem massa sagittis sit sed morbi in facilisis ullamcorper. Ut vel ornare placerat sapien magnis lectus eget volutpat aliquet. Proin sed viverra vitae magna justo ipsum. Porttitor risus morbi laoreet purus eget consectetur in semper nisl. Tincidunt blandit adipiscing nulla ipsum cursus tristique dui. Morbi sagittis elit vitae pulvinar. A ultrices id mi amet facilisis potenti. Velit tincidunt sit sed dolor mi commodo. Egestas sodales id at tempus non vivamus convallis posuere.
            </div>
        </div>
        <div>
            {/* picture */}
            <div className='flex lg:gap-12 gap-8'>
            <img src={Chairman1} alt="" className='w-32 h-full lg:w-48'/>
            <img src={Chairman2} alt="" className='w-32 h-full lg:w-48'/>
            <img src={Chairman3} alt="" className='w-32 h-full lg:w-48'/>
            <img src={Chairman4} alt="" className='w-32 h-full lg:w-48'/>
            <img src={Chairman5} alt="" className='w-32 h-full lg:w-48'/>
            <img src={Chairman6} alt="" className='w-32 h-full lg:w-48'/>
            <img src={Chairman7} alt="" className='w-32 h-full lg:w-48'/>
            <img src={Chairman8} alt="" className='w-32 h-full lg:w-48'/>
            <img src={Chairman9} alt="" className='w-32 h-full lg:w-48'/>
            <img src={Chairman10} alt="" className='w-32 h-full lg:w-48'/>
            </div>
        </div>
    </div>
  )
}

export default History