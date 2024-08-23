'use client';

import { Navigation } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";



const ImageGalleryA: React.FC = () => {
    const galleryRef = useRef<HTMLDivElement>(null);
  
    const scrollGallery = (direction: 'left' | 'right') => {
      if (galleryRef.current) {
        const scrollAmount = direction === 'left' ? -540 : 540;
        galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };
  
    return (
        <div className="relative w-full">
            {/* Left Button */}
            <button
            onClick={() => scrollGallery('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white text-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
            &#8592;
            </button>
    
            {/* Image Gallery Container */}
            <div ref={galleryRef} className="flex overflow-x-scroll scroll-smooth group w-[540px] h-[333px]">
                <img src="/assets/images/hiace kiri.jpg" alt="" width="540" height="333" className="object-cover transition-transform duration-100 ease-in-out hover:brightness-75 hover:scale-110"/>
                <img src="/assets/images/Premio2.jpg" alt="" width="540" height="333" className="object-cover transition-transform duration-100 ease-in-out hover:brightness-75 hover:scale-110"/>
                <img src="/assets/images/Premio3.jpg" alt="" width="540" height="333" className="object-cover transition-transform duration-100 ease-in-out hover:brightness-75 hover:scale-110"/>
                {/* Add more images as needed */}
            </div>
    
            {/* Right Button */}
            <button
            onClick={() => scrollGallery('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white text-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
            &#8594;
            </button>
        </div>
    );
};

const ImageGalleryB: React.FC = () => {
    const galleryRef = useRef<HTMLDivElement>(null);
  
    const scrollGallery = (direction: 'left' | 'right') => {
      if (galleryRef.current) {
        const scrollAmount = direction === 'left' ? -540 : 540;
        galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };
  
    return (
        <div className="relative w-full">
            {/* Left Button */}
            <button
            onClick={() => scrollGallery('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
            &#8592;
            </button>
    
            {/* Image Gallery Container */}
            <div ref={galleryRef} className="flex overflow-x-scroll scroll-smooth group w-[540px] h-[333px]">
                <img src="/assets/images/hiace kanan.jpg" alt="" width="540" height="333" className="object-cover transition-transform duration-100 ease-in-out hover:brightness-75 hover:scale-110"/>
                <img src="/assets/images/Commuter2.jpg" alt="" width="540" height="333" className="object-cover transition-transform duration-100 ease-in-out hover:brightness-75 hover:scale-110"/>
                <img src="/assets/images/Commuter3.jpg" alt="" width="540" height="333" className="object-cover transition-transform duration-100 ease-in-out hover:brightness-75 hover:scale-110"/>
                {/* Add more images as needed */}
            </div>
    
            {/* Right Button */}
            <button
            onClick={() => scrollGallery('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
            &#8594;
            </button>
        </div>
    );
};


const RedirectButtons: React.FC = () => {
    const router = useRouter();

    const goForm = () => {
        router.push("rental/form");
    }



    return(
        <section className="bg-gray-100 items-center justify-center">
            <div className="fixed w-full bg-white items-center align-middle justify-between border-[1px] border-solid border-gray-300 py-[20px] px-[70px] z-50">
                <div className="flex align-middle items-center justify-between">
                    <img src="/assets/images/image 1.png" alt="" width="103" height="75"/>
                    <div className="flex align-middle items-center w-full justify-between">
                    <div className="flex pl-[60px] pr-[50px] gap-4 mx-auto">
                        <a href="/about">
                            <div className="flex align-middle items-center hover:bg-gray-700 hover:bg-opacity-30 rounded-xl">
                                <h4 className="text-xl text-gray-700 font-medium p-[10px] pr-1 text-justify">
                                Tentang Kami
                                </h4>
                            </div>
                        </a>
                        <a href="/travel">
                            <div className="hover:bg-gray-700 hover:bg-opacity-30 rounded-xl">
                                <h4 className="text-xl text-gray-700 font-medium p-[10px] gap-[2px]">
                                Travel
                                </h4>
                            </div>
                        </a>
                        <a href="/rental">
                            <div className="hover:bg-gray-700 hover:bg-opacity-30 rounded-xl">
                                <h4 className="text-xl text-gray-700 font-medium p-[10px] gap-[2px]">
                                Rental
                                </h4>
                            </div>
                        </a>
                        <a href="/hotel">
                            <div className="hover:bg-gray-700 hover:bg-opacity-30 rounded-xl">
                                <h4 className="text-xl text-gray-700 font-medium p-[10px] gap-[2px]">
                                Hotel
                                </h4>
                            </div>
                        </a>
                        <a href="/paket">
                            <div className="hover:bg-gray-700 hover:bg-opacity-30 rounded-xl">
                                <h4 className="text-xl text-gray-700 font-medium p-[10px] gap-[2px]">
                                Paket
                                </h4>
                            </div>
                        </a>
                        <a href="/artikel">
                            <div className="hover:bg-gray-700 hover:bg-opacity-30 rounded-xl">
                                <h4 className="text-xl text-gray-700 font-medium p-[10px] gap-[2px]">
                                Artikel
                                </h4>
                            </div>
                        </a>
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
            </div>

            <div className="items-center justify-center pt-40">
                <div className="justify-center flex align-middle items-center">
                    <div>
                        <div>
                            <div className="flex items-center justify-center">
                                <h3 className=" bg-gray-200 py-3 px-3 border-gray-300 rounded-xl text-center text-lg text-gray-700 wrap inline-block justify-center items-center font-normal">
                                    Mengapa Memilih Kami
                                </h3>
                            </div>
                            <h1 className="text-primary-800 text-4xl mt-4 mb-8 items-center justify-center text-center text-gray-700 font-semibold">
                            Fitur Andalan Kami
                            </h1>
                        </div>
                        <p className="flex text-gray-500 items-center justify-center text-center max-w-[1075px] text-xl mb-16">
                            Nikmati berbagai fitur andalan Rama Trans dengan fasilitas modern, seperti kursi yang nyaman, AC, dan hiburan di dalam bus, yang membuka jalan bagi petualangan tak terlupakan dan solusi mobilitas yang lancar.
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center mb-20">
                    <div className="items-center mr-20 max-w-[296px] h-[339px] flex flex-col justify-between">
                        <div className="items-center justify-center">
                            <div className="flex align-middle items-center mb-2">
                                <img src="/assets/images/trophy.png" alt="" width="50" height="50"/>
                                <h3 className="text-xl ml-4 font-medium text-gray-700">Layanan Kelas Satu</h3>
                            </div>
                            
                            <p className="text-gray-500">
                                Di mana kemewahan bertemu dengan perawatan luar biasa, menciptakan momen tak terlupakan dan melampaui semua harapan Anda.
                            </p>
                        </div>
                        <div className="items-center justify-center">
                            <div className="flex align-middle, items-center mb-2">
                                <img src="/assets/images/traffic-light.png" alt="" width="50" height="50"/>
                                <h3 className="text-xl ml-4 font-medium text-gray-700">Stay Pergi 24 Jam</h3>
                            </div>
                            
                            <p className="text-gray-500">
                                Dukungan yang andal saat Anda sangat membutuhkannya, membuat Anda tetap tenang dan percaya diri saat bepergian.
                            </p>
                        </div>
                    </div>
                    <img src="/assets/images/3 hiace premio beige metallic 1.png" alt="" width="531" height="339"/>
                    <div className="items-center ml-20 max-w-[296px] h-[339px] flex flex-col justify-between">
                        <div className="items-center justify-center">
                            <div className="flex align-middle, items-center mb-2">
                                <img src="/assets/images/best-price.png" alt="" width="50" height="50"/>
                                <h3 className="text-xl ml-4 font-medium text-gray-700">Kualitas Terbaik</h3>
                            </div>
                            
                            <p className="text-gray-500">
                                Membuka kecemerlangan yang terjangkau dengan meningkatkan kualitas sambil meminimalkan biaya untuk nilai maksimal.
                            </p>
                        </div>
                        <div className="items-center justify-center">
                            <div className="flex align-middle, items-center mb-2">
                                <img src="/assets/images/driver.png" alt="" width="50" height="50"/>
                                <h3 className="text-xl ml-4 font-medium text-gray-700">Pengantaran Gratis</h3>
                            </div>
                            
                            <p className="text-gray-500">
                                Nikmati layanan penjemputan gratis, yang akan menambah kemudahan dalam pengalaman sewa mobil Anda.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 items-center justify-center border-[1px] border-solid border-gray-300">
                <div className="justify-center flex align-middle m-12 items-center">
                    <div>
                        <div>
                            <div className="flex items-center justify-center">
                                <h3 className=" bg-white py-3 px-3 rounded-xl text-center text-lg text-gray-700 wrap inline-block justify-center items-center font-normal">
                                    Nikmati Perjalanan Kami
                                </h3>
                            </div>
                            <h1 className="text-primary-800 text-4xl mt-4 mb-8 items-center justify-center text-center text-gray-700 font-semibold">
                                Armada Kendaraan Kami
                            </h1>
                        </div>
                        <p className="flex text-gray-500 items-center justify-center text-center max-w-[1075px] text-xl mb-16">
                            Nikmati berbagai fitur andalan Rama Trans dengan fasilitas modern, seperti kursi yang nyaman, AC, dan hiburan di dalam bus, yang membuka jalan bagi petualangan tak terlupakan dan solusi mobilitas yang lancar.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-evenly mb-6">
                    <div className="bg-white p-6 rounded-xl border-[1px] border-solid border-gray-300 group">
                        <div className="">
                            <div className="overflow-hidden rounded-xl">
                                <ImageGalleryA>

                                </ImageGalleryA>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <h3 className="text-gray-700 font-semibold text-3xl my-4 group-hover:text-[#0000FF]">
                                            Toyota Hiace Premio
                                        </h3>
                                        <h6 className="w-[540px] text-gray-500 text-lg mb-2">
                                            Rama Trans menyediakan mobil rental dengan layanan prima, armada berkualitas, harga kompetitif, serta kenyamanan dan keamanan perjalanan yang terjamin.
                                        </h6>
                                    </div>
                                    <hr />
                                </div>
                                <div className="flex justify-between mt-3">
                                    <div className="flex items-center justify-center align-middle">
                                        <img src="/assets/icons/Type.svg" alt="" />
                                        <h6 className="ml-2 text-lg text-gray-500 font-medium">Hatchback</h6>
                                    </div>
                                    <div className="flex items-center justify-center align-middle">
                                        <img src="/assets/icons/Diesel.svg" alt="" />
                                        <h6 className="ml-2 text-lg text-gray-500 font-medium">Diesel</h6>
                                    </div>
                                    <div className="flex items-center justify-center align-middle">
                                        <img src="/assets/icons/Seat.svg" alt="" />
                                        <h6 className="ml-2 text-lg text-gray-500 font-medium">16 Kursi</h6>
                                    </div>
                                    <div className="flex items-center justify-center align-middle">
                                        <img src="/assets/icons/Transmission.svg" alt="" />
                                        <h6 className="ml-2 text-lg text-gray-500 font-medium">Manual</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={goForm} className="flex bg-[#0000ff] py-4 text-white w-[540px] items-center text-xl justify-center rounded-xl mt-6 hover:bg-[#102C79]">
                            Rental Mobil Sekarang
                        </button>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border-t border-gray-300 group">
                        <div className="">
                            <div className="overflow-hidden rounded-xl">
                                <ImageGalleryB></ImageGalleryB>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <h3 className="text-gray-700 font-semibold text-3xl my-4 group-hover:text-[#0000FF]">
                                            Toyota Hiace Commuter
                                        </h3>
                                        <h6 className="w-[540px] text-gray-500 text-lg mb-2">
                                            Rama Trans menyediakan mobil rental dengan layanan prima, armada berkualitas, harga kompetitif, serta kenyamanan dan keamanan perjalanan yang terjamin.
                                        </h6>
                                    </div>
                                    <hr />
                                </div>
                                <div className="flex justify-between mt-3">
                                    <div className="flex items-center justify-center align-middle">
                                        <img src="/assets/icons/Type.svg" alt="" />
                                        <h6 className="ml-2 text-lg text-gray-500 font-medium">Hatchback</h6>
                                    </div>
                                    <div className="flex items-center justify-center align-middle">
                                        <img src="/assets/icons/Diesel.svg" alt="" />
                                        <h6 className="ml-2 text-lg text-gray-500 font-medium">Diesel</h6>
                                    </div>
                                    <div className="flex items-center justify-center align-middle">
                                        <img src="/assets/icons/Seat.svg" alt="" />
                                        <h6 className="ml-2 text-lg text-gray-500 font-medium">11 Kursi</h6>
                                    </div>
                                    <div className="flex items-center justify-center align-middle">
                                        <img src="/assets/icons/Transmission.svg" alt="" />
                                        <h6 className="ml-2 text-lg text-gray-500 font-medium">Manual</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="flex bg-[#0000ff] py-4 text-white w-[540px] items-center text-xl justify-center rounded-xl mt-6 hover:bg-[#102C79]" onClick={goForm}>
                            Rental Mobil Sekarang
                        </button>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="flex px-[70px] pt-[20px] pb-[40px] justify-between bg-white">
                    <div>
                        <div className="flex gap-[35px] items-start">
                            <img src="/assets/images/image 1.png" alt="" width="103" height="75"/>
                            <p className="w-[243px] text-gray-700 text-opacity-80 text-lg">Rama Trans adalah perusahaan transportasi yang menyediakan layanan bus travel berkualitas. Kami menawarkan kenyamanan dan keamanan dalam setiap perjalanan Anda.</p>
                        </div>
                        
                    </div>
                    <div className="w-[180px]">
                        <h3 className="mb-[20px] font-semibold text-xl">
                            Tentang Kami
                        </h3>
                        <div className="flex flex-col gap-[15px]">
                            <h6>Sejarah</h6>
                            <h6>Visi dan Misi</h6>
                            <h6></h6>
                        </div>
                    </div>
                    <div className="w-[131px]">
                        <h3 className="mb-[20px] font-semibold text-xl">
                            Product
                        </h3>
                        <div className="flex flex-col gap-[15px]">
                            <h6>Travel</h6>
                            <h6>Paket</h6>
                            <h6>Rental</h6>
                            <h6>Hotel</h6>
                        </div>
                    </div>
                    <div className="w-[180px]">
                        <h3 className="mb-[20px] font-semibold text-xl">
                            Informasi
                        </h3>
                        <div className="flex flex-col gap-[15px]">
                            <h6>Blog</h6>
                            <h6>FAQ</h6>
                            <h6>Terms and Conditions</h6>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px]">
                        <div >
                            <h3 className="mb-[20px]">
                                Download Rama Trans App
                            </h3>
                            <img src="/assets/icons/Google Play.png" alt="" />
                        </div>
                        <div>
                            <h4 className="text-gray-700">Ikuti kami di</h4>
                            <div className="gap-5 justify-center flex">
                            <button className="size-12 bg-gray-200 rounded-full">
                                    <img src="assets/icons/YouTube.png" alt="" className="size-auto"/>
                                </button>
                                <button className="size-12 bg-gray-200 rounded-full">
                                    <img src="assets/icons/Instagram.png" alt="" />
                                </button>
                                <button className="size-12 bg-gray-200 rounded-full">
                                    <img src="assets/icons/Facebook.png" alt="" />
                                </button>
                                <button className="size-12 bg-gray-200 rounded-full">
                                    <img src="assets/icons/Twitter.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#73ABFF] bg-opacity-20 py-[25px] px-[70px]">
                    <h5 className="text-gray-700 text-xl font-semibold">Copyright Rama Trans 2024</h5>
                </div>
            </div>


        </section>
    )
}

export default RedirectButtons;
    



