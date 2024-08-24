'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CheckboxButtonControl: React.FC<{ onProceed: () => void }> = ({ onProceed }) => {
    // State to track if the checkbox is checked
    const [isChecked, setIsChecked] = useState(false);
  
    // Handler to toggle the checkbox state
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <div>
        <div className='flex flex-col gap-[20px]'>

        
            {/* Checkbox */}
            <div>
            //icon
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">I agree to the terms and conditions</span>
                </label>
            </div>
            
            <div>
                <div className="bg-red-100 p-[20px] rounded-[6px]">
                    <h5 className="text-red-500 font-semibold">
                        Catatan:
                    </h5>
                    <h6 className="text-red-500 font-normal">
                        Penyewa bertanggung jawab atas biaya makan dan akomodasi untuk pengemudi.
                    </h6>
                </div>
            </div>

            <div className="flex justify-between text-xl">
                <div>
                    Total Harga
                </div>
                <h2 className="text-[#0000ff] text-2xl font-semibold">
                    150
                </h2>
            </div>
        </div>


        <hr></hr>
  
        {/* Button */}
        <div className='flex justify-between'>
        <button
          onClick={isChecked ? onProceed : undefined }
          disabled={!isChecked}
          className={` text-white rounded-[8px] py-[20px] text-xl font-semibold w-full mt-[20px] ${
            isChecked ? 'bg-[#0000ff] hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
            
          Lanjut Pembayaran
        </button>
        </div>
      </div>
    );
  };

const RedirectButtons: React.FC = () => {
    const router = useRouter ();

    const goPurchase = () => {
        router.push('form/bayar');
    }

    return (
        <div className="p-8">
          {/* Render the CheckboxButtonControl and pass the goPurchase function as a prop */}
          <CheckboxButtonControl onProceed={goPurchase} />
        </div>
      );
}


export default function Form(){
    return(
        <section className="bg-gray-100">
            <div className="fixed w-full bg-white items-center align-middle justify-between border-[1px] border-solid border-gray-300 py-[20px] px-[70px]">
                <div className="flex align-middle items-center justify-between">
                    <img src="/assets/images/image 1.png" alt="" width="103" height="75"/>
                    <div className="flex align-middle items-center w-full justify-between">
                    <div className="flex pl-[60px] pr-[50px] gap-4 mx-auto">
                    <div className="hover:bg-gray-700 hover:bg-opacity-30 rounded-xl">
                            <h4 className="text-xl text-gray-700 font-medium p-[10px] gap-[2px] " >
                                Tentang Kami
                            </h4>
                        </div>
                        <div className="hover:bg-gray-700 hover:bg-opacity-30 rounded-xl">
                            <h4 className="text-xl text-gray-700 font-medium p-[10px] gap-[2px] hover:">
                                Travel
                            </h4>
                        </div>
                        <div className="hover:bg-gray-700 hover:bg-opacity-30 rounded-xl">
                            <h4 className="text-xl text-gray-700 font-medium p-[10px] gap-[2px] hover:">
                                Rental
                            </h4>
                        </div>
                        <div className="hover:bg-gray-700 hover:bg-opacity-30 rounded-xl">
                            <h4 className="text-xl text-gray-700 font-medium p-[10px] gap-[2px] hover:">
                                Paket
                            </h4>
                        </div>
                        <div className="hover:bg-gray-700 hover:bg-opacity-30 rounded-xl">
                            <h4 className="text-xl text-gray-700 font-medium p-[10px] gap-[2px] hover:">
                                Hotel
                            </h4>
                        </div>
                        <div className="hover:bg-gray-700 hover:bg-opacity-30 rounded-xl">
                            <h4 className="text-xl text-gray-700 font-medium p-[10px] gap-[2px] hover:">
                                Artikel
                            </h4>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <button className="border-[1.5px] border-white bg-[#0000ff] text-white py-[16px] px-[45px] rounded-xl text-xl font-medium hover:bg-[#102C79]">
                            Daftar
                        </button>
                        <button className="border-[1.5px] border-[#0000ff] bg-white text-[#0000ff] py-[16px] px-[45px] rounded-xl text-xl font-medium hover:bg-[#102C79] hover:border-white hover:text-white">
                            Login
                        </button>
                    </div>
                    </div>
                </div>
                <hr className="border-white"/>
            </div>

            <div className="flex p-[70px] gap-[30px] pt-40">
                <div className="flex flex-col w-[639px] h-[566px] gap-[20px]" >
                    <img src="/assets/images/hiace kanan.jpg" alt="" className="h-full w-full object-cover"/>
                    <div className="flex justify-between">
                        <img src="/assets/images/hiace kanan.jpg" alt="" width="197px" height="124" className="rounded-[8px]"/>
                        <img src="/assets/images/hiace kanan.jpg" alt="" width="195px" height="124" className="rounded-[8px]"/>
                        <img src="/assets/images/hiace kanan.jpg" alt="" width="197px" height="124" className="rounded-[8px]"/>
                    </div>
                    

                </div>
                <div className="flex flex-col justify-between w-[631px]">
                    <div className="p-[30px] gap-[20px] bg-white rounded-xl border-gray-300 border-[1px] w-max-[631px]">
                        <h2 className="flex text-gray-700 font-semibold text-3xl">
                            Toyota Hiace Premio
                        </h2>
                        <p className="flex text-gray-500 items-center justify-center text-left text-xl mt-[20px]">
                            Nikmati berbagai fitur andalan Rama Trans dengan fasilitas modern, seperti kursi yang nyaman, AC, dan hiburan di dalam bus, yang membuka jalan bagi petualangan tak terlupakan dan solusi mobilitas yang lancar.
                        </p>
                    </div>
                    <div className="flex flex-col p-[30px] gap-[40px] bg-white rounded-xl border-gray-300 border-[1px] w-max-[631px]">
                        <div className="flex flex-col gap-[15px]">
                            <h2 className="flex text-gray-700 font-semibold text-2xl">
                                Spesifikasi - Toyota Hiace Premio
                            </h2>
                            <hr />
                        </div>
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex gap-[50px] justify-between">
                                <div className="w-full h-[38px]">
                                    <div className="flex gap-[30px] justify-between w-full">
                                        <h6>
                                        Body
                                        </h6>
                                        <h6>
                                        :
                                        </h6>
                                        <h5>
                                        Sedan
                                        </h5>
                                    </div>
                                    <hr />
                                </div>
                                <div className="w-full h-[38px]">
                                    <div className="flex gap-[30px] justify-between w-full">
                                        <h6>
                                        Body
                                        </h6>
                                        <h6>
                                        :
                                        </h6>
                                        <h5>
                                        Sedan
                                        </h5>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="flex gap-[50px] justify-between">
                                <div className="w-full h-[38px]">
                                    <div className="flex gap-[30px] justify-between w-full">
                                        <h6>
                                        Body
                                        </h6>
                                        <h6>
                                        :
                                        </h6>
                                        <h5>
                                        Sedan
                                        </h5>
                                    </div>
                                    <hr />
                                </div>
                                <div className="w-full h-[38px]">
                                    <div className="flex gap-[30px] justify-between w-full">
                                        <h6>
                                        Body
                                        </h6>
                                        <h6>
                                        :
                                        </h6>
                                        <h5>
                                        Sedan
                                        </h5>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="flex gap-[50px] justify-between">
                                <div className="w-full h-[38px]">
                                    <div className="flex gap-[30px] justify-between w-full">
                                        <h6>
                                        Body
                                        </h6>
                                        <h6>
                                        :
                                        </h6>
                                        <h5>
                                        Sedan
                                        </h5>
                                    </div>
                                    <hr />
                                </div>
                                <div className="w-full h-[38px]">
                                    <div className="flex gap-[30px] justify-between w-full">
                                        <h6>
                                        Body
                                        </h6>
                                        <h6>
                                        :
                                        </h6>
                                        <h5>
                                        Sedan
                                        </h5>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col px-[70px] gap-[50px] pb-10">
                <div className="bg-white border-gray-300 border-[1px] rounded-xl pt-[20px] pb-[30px]">
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[15px]">
                            <div className="px-[30px] text-[28px] font-semibold">
                                Detail Informasi Penyewa
                            </div>
                            <hr />
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div>
                                <form action="" className="px-[30px] gap-[5px]">
                                    <h2>
                                        Nama
                                    </h2>
                                    <input type="text" id="name" name="name" placeholder="Masukkan nama anda" className="w-full border px-[20px] py-[10px] border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                                </form>
                            </div>
                            <div>
                                <form action="" className="px-[30px] gap-[5px]">
                                    <h2>
                                        Nama
                                    </h2>
                                    <input type="text" id="name" name="name" placeholder="Masukkan nama anda" className="w-full border px-[20px] py-[10px] border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                                </form>
                            </div>
                            <div>
                                <form action="" className="px-[30px] gap-[5px]">
                                    <h2>
                                        Nama
                                    </h2>
                                    <input type="text" id="name" name="name" placeholder="Masukkan nama anda" className="w-full border px-[20px] py-[10px] border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                                </form>
                            </div>
                            <div>
                                <form action="" className="px-[30px] gap-[5px]">
                                    <h2>
                                        Nama
                                    </h2>
                                    <input type="text" id="name" name="name" placeholder="Masukkan nama anda" className="w-full border px-[20px] py-[10px] border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                                </form>
                            </div>
                            <div>
                                <form action="" className="px-[30px] gap-[5px]">
                                    <h2>
                                        Nama
                                    </h2>
                                    <input type="text" id="name" name="name" placeholder="Masukkan nama anda" className="w-full border px-[20px] py-[10px] border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white border-gray-300 border-[1px] rounded-xl pt-[20px] pb-[30px]">
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[15px]">
                            <div className="px-[30px] text-[28px] font-semibold">
                                Detail Sewa & Rental Mobil
                            </div>
                            <hr />
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div>
                                <form action="" className="px-[30px] gap-[5px]">
                                    <h2>
                                        Durasi Sewa
                                    </h2>
                                    <select id="options" name="options" className="w-full bg-white border px-[20px] py-[10px] border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </form>
                            </div>
                            <div>
                                <form action="" className="px-[30px] gap-[5px]">
                                    <h2>
                                        Area Sewa
                                    </h2>
                                    <select id="options" name="options" className="w-full bg-white border px-[20px] py-[10px] border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </form>
                            </div>
                            <div>
                                <form action="" className="px-[30px] gap-[5px]">
                                    <h2>
                                        Rute Sewa
                                    </h2>
                                    <select id="options" name="options" className="w-full bg-white border px-[20px] py-[10px] border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </form>
                            </div>
                            <div className="flex justify-between">
                                <form action="" className="flex flex-col w-full px-[30px] gap-[5px]">
                                    <h2>
                                        Tanggal Mulai Sewa
                                    </h2>
                                    <select id="options" name="options" className="w-full bg-white border px-[20px] py-[10px] border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </form>
                                <form action="" className="flex flex-col w-full px-[30px] gap-[5px]">
                                    <h2>
                                        Tanggal Selesai Sewa
                                    </h2>
                                    <select id="options" name="options" className="w-full bg-white border px-[20px] py-[10px] border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </form>
                            </div>
                            <div>
                                <form action="" className="px-[30px] h-[151px] gap-[5px]">
                                    <h2>
                                        Alamat Penjemputan
                                    </h2>
                                    <input type="text" id="name" name="name" placeholder="Masukkan nama anda" className="w-full h-[121px] border px-[20px] py-[10px] border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white border-gray-300 border-[1px] rounded-xl pt-[20px] pb-[30px] flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[15px]">
                            <div className="px-[30px] text-[28px] font-semibold">
                                Rincian
                            </div>
                            <hr />
                        </div>
                        
                        <div className="px-[30px]">
                            <RedirectButtons></RedirectButtons>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
