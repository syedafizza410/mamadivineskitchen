import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png"
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"; // 👈 Import Icons

const FooterSection = () => {
    return (
        <footer className="bg-red-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    <div>
                         <div className="flex items-center space-x-2 mb-2">
    <Image src={logo} alt="Mama's Kitchen Logo" width={50} height={50} />
    <h2 className="text-2xl font-bold">Mama&apos;s Kitchen</h2>
  </div>
  <p className="text-sm">
    Taste the love of homemade food. Delivering warmth & flavor from our kitchen to your door.
  </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-1 text-sm">
                            <li><Link href="/" className="hover:underline">Home</Link></li>
                            <li><a href="#about" className="hover:underline">About</a></li>
                            <li><a href="#menu" className="hover:underline">Menu</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Contact</h3>
                        <p className="text-sm">📍 Karachi, Pakistan</p>
                        <p className="text-sm">📞 +92 3233956495</p>
                        <p className="text-sm">✉️ mamadivineskitchen@gmail.com</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4 text-2xl">
                            <a href="https://foodpanda.go.link/efANo" className="hover:text-gray-300"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/mamasdivineskitchen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-gray-300"><FaInstagram /></a>
                            <a href="https://www.youtube.com/@Mamadivineskitchen" className="hover:text-gray-300"><FaYoutube /></a>
                            <a href="https://www.tiktok.com/@mamas.kitchen28?_t=ZS-8yLS7HDo28y&_r=1" className="hover:text-gray-300"><FaTiktok /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-white pt-4 text-sm text-center">
                    &copy; {new Date().getFullYear()} Mama&apos;s Kitchen. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
