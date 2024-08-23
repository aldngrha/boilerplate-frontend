import { Container } from "postcss"

export default function About() {
    return (
        <section className="bg-gray-100 items-center justify-center">
            <div className="bg-white items-center align-middle justify-between border-[1px] border-solid border-gray-300">
                <div>
                    <div className="flex items-center justify-between py-[20px] px-[70px]">
                        <img src="/assets/images/image 1.png" alt="" width="103" height="75"/>
                        <div className="flex align-middle items-center w-full justify-between">
                            <div className=" flex pl-[50px] pr-[50px] gap-4 mx-auto">
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
                            <button className="border-[1.5px] border-white bg-[#0000ff] text-white py-[18px] px-[45px] rounded-xl text-xl font-medium hover:bg-[#102C79]">
                                Daftar
                            </button>
                            <button className="border-[1.5px] border-[#0000ff] bg-white text-[#0000ff] py-[18px] px-[45px] rounded-xl text-xl font-medium hover:bg-[#102C79] hover:border-white hover:text-white">
                                Login
                            </button>
                        </div>
                        </div>
                        <hr className="border-white"/>
                    </div>
                </div>
            </div>
  
            {/* konten */}
            <div className="bg-gray-200 items-center justify-center m-10">
                <div className="flex w-[1300px] h-[195px] items-center justify-center">
                    <div className="inline-block text-center m-10">
                        <h3 className="font-bold text-[40px]">
                            TENTANG RAMA TRANZ
                        </h3>
                        <p className="text-[22px]">
                        Rama Trans adalah perusahaan transportasi darat terkemuka yang menyediakan layanan andal dan berkualitas tinggi. Dengan armada kendaraan modern yang terawat, kami menawarkan perjalanan antar kota, sewa kendaraan untuk acara khusus, dan transportasi untuk perusahaan. Kami berkomitmen untuk memberikan pengalaman perjalanan yang nyaman dan aman bagi setiap penumpang.
                        </p>

                    </div>

                </div>

            </div>
            <div className="flex items-center justify-center gap-10 mb-10">
                <div className="items-center justify-center gap-2 border-white border-[1px] rounded-xl">
                    <img src="assets/images/car1.png" alt="" />

                </div>
                <div className="items-center justify-center gap-2 border-white border-[1px] rounded-xl">
                    <img src="assets/images/car2.png" alt="" />
                </div>
                <div className="items-center justify-center gap-2 border-white border-[1px] rounded-xl">
                    <img src="assets/images/car3.png" alt="" />
                </div>
            </div>


            <div>
                <div className="flex justify-center">
                <div className="w-[1420px] bg-white items-center justify-center rounded-xl border-gray-200 border-[1px] py-5 mb-10">
                    <div className="flex bg-white items-center justify-center rounded-xl">
                        <div className="inline-block text-center py-5 border-gray-200 border-[1px] rounded-xl px-5">
                            <h3 className="justify-center items-center">
                                Visi Kami
                            </h3>
                            <p>
                                Menjadi perusahaan multi dimensional yang eksis, inovatif, dan antisipatif.
                            </p>
                        </div>
                    </div>

                <div className="my-10">
                    <div className="flex items-center justify-center mb-10">
                        <h3>
                            Misi Kami
                        </h3>
                    </div>
                    <div className="flex items-center justify-center gap-5 mb-10">
                        <div className="items-center justify-center gap-2 border-gray-200 border-[2px] p-4 rounded-xl">
                            <div className=" flex items-center justify-center mb-5">
                            <img src="assets/images/one.png" alt="" />
                            </div>
                            <p className="w-[397px]">
                            Mengoptimalkan nilai perusahaan melalui bisnis yang berkembang dengan sumber daya terbaik dan mengakomodir gagasan – gagasan yang kekinian
                            </p>
                        </div>
                        <div className="items-center justify-center gap-2 border-gray-200 border-[2px] p-4 rounded-xl">
                            <div className=" flex items-center justify-center mb-5">
                            <img src="assets/images/two.png" alt="" />
                            </div>
                            <p className="w-[397px]">
                            Mengoptimalkan nilai perusahaan melalui bisnis yang berkembang dengan sumber daya terbaik dan mengakomodir gagasan – gagasan yang kekinian
                            </p>
                        </div>
                        <div className="items-center justify-center gap-2 border-gray-200 border-[2px] p-4 rounded-xl">
                            <div className=" flex items-center justify-center mb-5">
                            <img src="assets/images/three.png" alt="" />
                            </div>
                            <p className="w-[397px]">
                            Mengoptimalkan nilai perusahaan melalui bisnis yang berkembang dengan sumber daya terbaik dan mengakomodir gagasan – gagasan yang kekinian
                            </p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#73ABFF] bg-opacity-20 items-center justify-center py-10">
                <div className="flex items-center justify-center mb-10">
                    Mengapa memilih tiket travel di ‎  
                    <div className="text-[#000077]">
                     RAMA TRANZ?
                    </div>
                    </div>
                    
                <div className="flex items-center justify-center">
                    <div className="">

                    <div className="flex w-[1000px] mb-10">
                        <div className="flex gap-10 px-20">
                            <img src="assets/images/about-img-1.png" alt="" />
                            <div>

                            <h2 className="text-[20px] font-bold mb-1">
                            Mudah dan cepat
                            </h2>
                            <p>
                                Beli tiket Travel kapan saja dan di mana saja dengan Rama Tranz. Tak perlu lagi membuang waktu untuk pergi ke terminal atau kantor agen, kini Anda dapat membeli tiket dari rumah.
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-[1000px] mb-10">
                        <div className="flex gap-10 px-20">
                            <div>

                            <h2 className="text-[20px] font-bold mb-1">
                            Layanan Pelanggan 24 Jam
                            </h2>
                            <p>
                            Kami menyediakan Layanan Pelanggan 24 jam. Jadi, kapan pun Anda memiliki masalah atau pertanyaan, hubungi kami melalui telepon, chat, atau kirim pesan dari Aplikasi Traveloka Anda. Kami akan selalu siap membantu.
                            </p>
                            </div>
                        </div>
                            <img src="assets/images/about-img-2.png" alt="" />
                    </div>

                    <div className="flex w-[1000px] mb-10">
                        <div className="flex gap-10 px-20">
                            <img src="assets/images/about-img-3.png" alt="" />
                            <div>

                            <h2 className="text-[20px] font-bold mb-1">
                            Info Lengkap
                            </h2>
                            <p>
                            Dari jadwal travel, rute, titik keberangkatan dan kedatangan, harga tiket, hingga foto dan fasilitasnya, semuanya dapat Anda temukan di Rama Tranz. Kami menyediakan info lengkap untuk membantu menentukan Travel Anda.
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-[1000px] mb-10">
                        <div className="flex gap-10 px-20">
                            <div>
                            <h2 className="text-[20px] font-bold mb-1">
                            Pembayaran Mudah
                            </h2>
                            <p>
                            Baik Anda ingin membayar melalui transfer bank, kartu kredit, atau tunai di, kami siap membantu Anda.
                            </p>
                            </div>
                        </div>
                            <img src="assets/images/about-img-4.png" alt="" />
                    </div>

                        
                    </div>
                </div>
                </div>
                

            <div>
                <div className="flex bg-white px-[70px] pt-[20px] pb-[40px] justify-between">
                    <div>
                        <div className="flex gap-[35px] items-start">
                            <img src="/assets/images/image 1.png" alt="" width="103" height="75"/>
                            <p className="text-justify w-[243px] text-gray-700 text-opacity-80 text-lg">Rama Trans adalah perusahaan transportasi yang menyediakan layanan bus travel berkualitas. Kami menawarkan kenyamanan dan keamanan dalam setiap perjalanan Anda.</p>
                        </div>
                        
                    </div>
                    <div className="w-[180px]">
                        <h3 className="mb-[20px]">
                            Tentang Kami
                        </h3>
                        <div className="gap-[20px]">
                            <h6>Sejarah</h6>
                            <h6>Visi dan Misi</h6>
                            <h6></h6>
                        </div>
                    </div>
                    <div className="w-[131px]">
                        <h3 className="mb-[20px]">
                            Product
                        </h3>
                        <div className="gap-[20px]">
                            <h6>Travel</h6>
                            <h6>Paket</h6>
                            <h6>Rental</h6>
                            <h6>Hotel</h6>
                        </div>
                    </div>
                    <div className="w-[180px]">
                        <h3 className="mb-[20px]">
                            Informasi
                        </h3>
                        <div>
                            <h6>Blog</h6>
                            <h6>FAQ</h6>
                            <h6>Terms and Conditions</h6>
                        </div>
                    </div>
                    <div className="flex-col gap-[30px]">
                        <div >
                            <h3 className="mb-[20px]">
                                Download Rama Trans App
                            </h3>
                            <button>
                                <img src="/assets/icons/Google Play.png" alt="" />
                            </button>
                        </div>
                        <div>
                            <h4 className="text-gray-700 my-3 font-semibold">Ikuti kami di:</h4>
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
  

