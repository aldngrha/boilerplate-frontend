import { Container } from "postcss"

export default function Paket() {
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
  
                <div className="bg-gray-100 items-center justify-center border-[1px] border-solid border-gray-300 pt-28">
                    <div className="flex items-center m-10 justify-evenly">
                        <div className="bg-white p-6 rounded-xl border-[1px] border-solid border-gray-300 group">
                            <div className="">
                                <div>
                                    <img src="/assets/images/pakettt.png" alt="" width="540" height="333" className="rounded-xl"/>
                                </div>
                            </div>
                            <button className="flex bg-[#73ABFF] py-4 text-black w-[540px] items-center text-xl font-sans justify-center rounded-xl mt-6 hover:bg-[#102C79] hover:text-white">
                                <div className="justify-center items-center text-center">
                                Silahkan hubungi admin kami 
                                <br />
                                <div className="flex align middle items-center justify-center text-lg gap-2">
                                <img src="/assets/icons/WhatsApp.png" alt="" />
                                +6285736471993
                                </div>
                                </div>   
                            </button>
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
  

