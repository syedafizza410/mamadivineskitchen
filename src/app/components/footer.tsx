import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"; // 👈 Import Icons

const FooterSection = () => {
    return (
        <footer className="bg-red-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Logo & Description */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Mama&apos;s Kitchen</h2>
                        <p className="text-sm">
                            Taste the love of homemade food. Delivering warmth & flavor from our kitchen to your door.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-1 text-sm">
                            <li><Link href="/" className="hover:underline">Home</Link></li>
                            <li><a href="#about" className="hover:underline">About</a></li>
                            <li><a href="#menu" className="hover:underline">Menu</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Contact</h3>
                        <p className="text-sm">📍 Karachi, Pakistan</p>
                        <p className="text-sm">📞 +92 3233956495</p>
                        <p className="text-sm">✉️ mamadivineskitchen@gmail.com</p>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4 text-2xl">
                            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
                            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
                            <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-white pt-4 text-sm text-center">
                    &copy; {new Date().getFullYear()} Mama&apos;s Kitchen. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
