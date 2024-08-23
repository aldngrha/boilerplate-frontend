import { Container } from "postcss"

export default function Travel() {
    return (
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
  
            <div className="bg-[#73ABFF] bg-opacity-20 pt-28">
                <div className="flex justify-center items-center pt-10">
                    <h2 className="font-bold text-[35px]">
                        Banyak Keunggulan yang didapatkan pesan tiket di Rama Tranz
                    </h2>
                </div>

                    <div className="flex justify-center items-center gap-10 py-10">

                        <div className="">
                            <div className="flex gap-4 mx-4 mb-4">
                                <img src="assets/images/tickets 1.png" alt="" />
                                <div>
                                    <h3 className="font-bold">Pasti dapat kursi</h3>
                                    <p>Bisa langsung berangkat dengan nyaman, bebas khawatir.</p>
                                </div>

                            </div>
                            <div className="flex gap-4 mx-4 mb-4">
                                <img src="assets/images/best-price.png" alt="" />
                                <div>
                                    <h3 className="font-bold">Harga kompetitif</h3>
                                    <p>Bisa langsung berangkat dengan nyaman, bebas khawatir.</p>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="flex gap-4 mx-4 mb-4">
                                <img src="assets/images/trophy.png" alt="" />
                                <div>
                                    <h3 className="font-bold">Layanan kelas satu</h3>
                                    <p>Bisa langsung berangkat dengan nyaman, bebas khawatir.</p>
                                </div>

                            </div>
                            <div className="flex gap-4 mx-4 mb-4">
                                <img src="assets/images/driver.png" alt="" />
                                <div>
                                    <h3 className="font-bold"> Layanan antar jemput</h3>
                                    <p>Bisa langsung berangkat dengan nyaman, bebas khawatir.</p>
                                </div>

                            </div>

                        </div>
                    </div>

            </div>

            <div className="flex justify-center m-10">
                <div className="flex justify-center">
                    <div className="flex mx-5 gap-10">
                        <div className="flex gap-4 rounded-lg p-2 border-gray-200 border-[2px] bg-white">
                            <img src="assets/images/completed-task 1.png" alt="" />
                            <div>
                            <h2 className="font-bold">
                                Cara memesan tiket
                            </h2>
                            <p className="w-[500px]">
                            Mari, cari tau mudahnya memesan tiket Travel di Rama Tranz dengan cepat dan nyaman.
                            </p>
                            </div>
                        </div>
                        <div className="flex gap-4 rounded-lg p-2 border-gray-200 border-[1px] bg-white">
                            <img src="assets/images/compliant 1.png" alt="" />
                            <div>
                            <h2 className="font-bold">
                                Persyaratan Perjalanan
                            </h2>
                            <p className="w-[500px]">
                            Mari, cari tau mudahnya memesan tiket Travel di Rama Tranz dengan cepat dan nyaman.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className="px-20">
                <h2 className="font-bold mb-4">
                    Keunggulan pesan tiket Online di Rama Tranz
                </h2>
                <h3 className="font-bold mb-1">
                    1. Pesan dari Mana Saja
                </h3>
                <p className="mb-7">
                    Anda dapat membeli tiket dari mana saja dan kapan saja, tanpa harus mengunjungi loket atau agen perjalanan. Ini memberi Anda fleksibilitas untuk merencanakan perjalanan dengan mudah dari rumah, kantor, atau, bahkan saat bepergian.
                </p>
                <h3 className="font-bold mb-1">
                    2. Pilihan Rute dan Mobil Lengkap
                </h3>
                <p className="mb-7">
                    Anda dapat membeli tiket dari mana saja dan kapan saja, tanpa harus mengunjungi loket atau agen perjalanan. Ini memberi Anda fleksibilitas untuk merencanakan perjalanan dengan mudah dari rumah, kantor, atau, bahkan saat bepergian.
                </p>
                <h3 className="font-bold mb-1">
                    3. Harga Murah
                </h3>
                <p className="mb-7">
                    Anda dapat membeli tiket dari mana saja dan kapan saja, tanpa harus mengunjungi loket atau agen perjalanan. Ini memberi Anda fleksibilitas untuk merencanakan perjalanan dengan mudah dari rumah, kantor, atau, bahkan saat bepergian.
                </p>
                <h3 className="font-bold mb-1">
                    4. Layanan Customer Service 24 Jam
                </h3>
                <p className="mb-14">
                    Anda dapat membeli tiket dari mana saja dan kapan saja, tanpa harus mengunjungi loket atau agen perjalanan. Ini memberi Anda fleksibilitas untuk merencanakan perjalanan dengan mudah dari rumah, kantor, atau, bahkan saat bepergian.
                </p>

                <h2 className="font-bold mb-4">
                    Kenali Lebih Jauh Kelas Travel di Rama Tranz
                </h2>
                <h3 className="font-bold mb-1">
                    1. Toyota Hiace Premio
                </h3>
                <p className="mb-7">
                    Kelas ini menawarkan mobil Toyota Hiace Premio yang dirancang untuk memberikan kenyamanan maksimal. Dengan ruang yang luas, kursi yang nyaman, dan fasilitas premium, Toyota Hiace Premio ideal untuk perjalanan panjang atau grup besar yang mengutamakan kemewahan dan kualitas.
                </p>
                <h3 className="font-bold mb-1">
                    2. Toyota Hiace Commuter
                </h3>
                <p className="mb-14">
                    Untuk pilihan yang lebih ekonomis namun tetap nyaman, Toyota Hiace Commuter adalah opsi yang tepat. Kelas ini menyediakan ruang yang cukup untuk penumpang dengan fitur yang memadai, membuatnya cocok untuk perjalanan sehari-hari atau perjalanan jarak menengah dengan efisiensi biaya.
                </p>

















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
  

