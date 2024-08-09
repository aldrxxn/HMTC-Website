const VisionMission = () => {
  return (
    <div className="px-24 lg:px-72 py-24 bg-hitam text-white flex flex-col lg:flex-row lg:gap-28 gap-14">
        <div className="lg:max-w-md flex flex-col gap-2">
            {/* Vision */}
            <div className="font-adelphe font-bold text-5xl">
                {/* Vision Title */}
                Vision
            </div>
            <div className="font-satoshi font-thin text-lg ">
                {/* Vision Desc */}
                Transformasi HMTC sebagai Pionir Utama Elemen Teknik Informatika Demi Mewujudkan Organisasi Yang Berdampak dan Berkualitas.
            </div>
        </div>
        <div className="flex flex-col gap-2">
            {/* Mission */}
            <div className="font-adelphe font-bold text-5xl">
                {/* Mission Title */}
                Mission
            </div>
            <div className="font-satoshi font-thin text-lg flex flex-col gap-2">
                {/* Mission Desc */}
                <div>
                    Mengimplementasi program transformasi yang inovatif untuk meningkatkan daya saing dan memperbaiki kondisi HMTC sebagai organisasi di Teknik Informatika.                
                    </div>
                <div>
                    Menginisiasi dan mempelopori seluruh aspek pergerakan mahasiswa Teknik Informatika untuk menciptakan lingkungan yang dinamis dan kolaboratif.
                    </div>
                <div>
                    Mengevaluasi dan mengoptimalkan aksi HMTC untuk menciptakan keberdampakan yang signifikan dan berkualitas di seluruh lapisan Teknik Informatika.                    
                    </div>
            </div>
        </div>
    </div>
  )
}

export default VisionMission