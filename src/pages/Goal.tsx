import ImageGoal from '../assets/ImageGoal.png';
import PictueTriSaksonoAdi from '../assets/PictureTriSaksonoAdi.png';

const Goal = () => {
  return (
    <div className='px-24 py-24 flex flex-col-reverse lg:flex-row lg:px-72 bg-hitam gap-14'>
        <div className='flex flex-col gap-6 lg:max-w-xl justify-center lg:mr-12 items-center lg:items-start'>
            {/* Bagian 1 */}
            <div className='font-satoshi font-medium italic text-2xl text-white text-center lg:text-left'>
                {/* Kalimat Tri Saksono */}
                “HMTC pada awalnya bertujuan menjadi wadah aspirasi dan kreativitas mahasiswa TC baik dalam akademis maupun non akademis.”
            </div>
            <div className='flex gap-4 items-center lg:items-start'>
                {/* Gambar dan Nama Tri Saksono, jabatan */}
                <div>
                    {/* Gambar */}
                    <img src={PictueTriSaksonoAdi} alt="" className='w-14'/>
                </div>
                <div className='flex flex-col gap-0 items-center lg:items-start text-center lg:text-left'>
                    {/* Nama Dan Jabatan */}
                    <div className='font-libre-caslon-condensed italic text-xl text-white'>
                        {/* Nama */}
                        - Tri Saksono Adi
                    </div>
                    <div className='font-satoshi text-base text-white'>
                        {/* Jabatan */}
                        Ketua HMTC Pertama
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center lg:ml-auto">
            {/* Bagian 2 */}
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    {/* Nama, Garis, Tanggal */}
                    <div className='font-satoshi text-sm text-white'>
                        HMTC INCREMENTAL
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex-1">
                            <hr className="h-px w-32 bg-white border-0"/>
                        </div>
                        <div className="font-satoshi text-sm text-white">
                            29 06 2024
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-center">
                    {/* Foto */}
                    <img src={ImageGoal} alt="" className='max-3xl'/>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Goal;
