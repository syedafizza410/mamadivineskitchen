'use client'; 

import Image from 'next/image';
import img3 from "../../../public/about.png"

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16" id='about'>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src={img3} 
              alt="Mama's Kitchen Home Chef"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-red-900 mb-4">About Us</h2>

          <p className="text-gray-700 text-xl mb-4">
            Welcome to <strong>Mama&apos;s Kitchen</strong> — where every dish is cooked with love, passion, and the true taste of home.
          </p>
          <p className="text-gray-700 text-xl mb-4">
            We are a proud <strong>home chef partner on Foodpanda</strong>, serving delicious, desi meals that bring back the flavors of your childhood.
          </p>
          <p className="text-gray-700 text-xl mb-4">
            With over <strong>2 years on Foodpanda</strong>, Mama&apos;s Kitchen has become a trusted name for those who crave real home taste.
          </p>
          <p className="text-gray-700 text-xl mb-4">
            Every order is prepared in a clean, home kitchen with the highest hygiene standards — just like how we cook for our own family.
          </p>
          <p className="text-gray-700 text-xl mb-4">
            Our loyal customers love us for our consistent flavor, warm service, and the comfort of knowing they’re eating real, homemade food.
          </p>
          <p className="text-gray-700 text-xl">
            Thank you for supporting local home chefs. We cook not just to serve — but to share our culture, care, and love with every plate.
          </p>
        </div>
      </div>
    </section>
  );
}
