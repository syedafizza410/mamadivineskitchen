'use client';
import Image from 'next/image';
import { useState } from 'react';

interface MenuItem {
  name: string;
  image: string;
  single: string;
  double: string;
}

type Category =
  | 'Continental Food'
  | 'Rice Items'
  | 'Desi Food'
  | 'Parathas'
  | 'Frozen Items'
  | 'Drinks'
  | 'Sides';

const menuData: Record<Category, MenuItem[]> = {
  'Continental Food': [
    {
      name: 'Chicken Fried Rice With Shashlik',
      image: '/chickenfried.jpg',
      single: 'Rs. 650',
      double: 'Rs. 1190',
    },
    {
      name: 'Chicken Chow Mein',
      image: '/chickenchow.avif',
      single: 'Rs. 520',
      double: 'Rs. 1010',
    },
     {
      name: 'Chicken Macaroni',
      image: '/chickenmacaroni.jpg',
      single: 'Rs. 550',
      double: 'Rs. 1050',
    },
  ],
  'Rice Items': [
    {
      name: 'Chicken Biryani',
      image: '/chickenbiryani.jpg',
      single: 'Rs. 350',
      double: 'Rs. 590',
    },
    {
      name: 'Aloo Biryani',
      image: '/aloobiryani.jpg',
      single: 'Rs. 200',
      double: 'Rs. 380',
    },
    {
      name: 'Plain Rice',
      image: '/plainrice.jpg',
      single: 'Rs. 305',
      double: 'Rs. 590',
    },
      {
      name: 'Zeera Rice',
      image: '/zeerarice.jpeg',
      single: 'Rs. 315',
      double: 'Rs. 610',
    },
    {
      name: 'Chicken Fried Rice',
      image: '/fridrice.jpg',
      single: 'Rs. 540',
      double: 'Rs. 1060',
    },
    {
      name: 'Matar Pulao',
      image: '/matarpulao.webp',
      single: 'Rs. 350',
      double: 'Rs. 600',
    },
    {
      name: 'Chicken Yakhni Pulao',
      image: '/yakhnipulao.jpg',
      single: 'Rs. 340',
      double: 'Rs. 570',
    },
    {
      name: 'Tahiri',
      image: '/Tahiri.webp',
      single: 'Rs. 450',
      double: 'Rs. 830',
    },
  ],
  'Desi Food': [
    {
      name: 'Chicken Karahi',
      image: '/chickenkarahi.jpg',
      single: 'Rs. 530',
      double: 'Rs. 1040',
    },
    {
      name: 'Chicken Nihari',
      image: '/nihari.jpg',
      single: 'Rs. 520',
      double: 'Rs. 940',
    },
    {
      name: 'Palak Aloo',
      image: '/aloopalak.jpg',
      single: 'Rs. 300',
      double: 'Rs. 500',
    },
    {
      name: 'Palak Chicken',
      image: '/chickenpalak.png',
      single: 'Rs. 290',
      double: 'Rs. 550',
    },
    {
      name: 'Aloo Katliya',
      image: '/alookatliya.jpg',
      single: 'Rs. 270',
      double: 'Rs. 350',
    },
    {
      name: 'Achaari Chana Daal',
      image: '/chanadaal.jpg',
      single: 'Rs. 380',
      double: 'Rs. 680',
    },
    {
      name: 'Masoor Daal',
      image: '/masoordaal.jpg',
      single: 'Rs. 250',
      double: 'Rs. 450',
    },
    {
      name: 'Malka Masoor Daal',
      image: '/malkadaal.webp',
      single: 'Rs. 280',
      double: 'Rs. 480',
    },
    {
      name: 'Beef Lobia Qeema',
      image: '/lobiaqeema.jpg',
      single: 'Rs. 620',
      double: 'Rs. 1220',
    },
    {
      name: 'Chicken Aloo Qeema',
      image: '/alookeema.jpeg',
      single: 'Rs. 490',
      double: 'Rs. 950',
    },
    {
      name: 'Aloo Bharta',
      image: '/aloobharta.webp',
      single: 'Rs. 250',
      double: 'Rs. 350',
    },
  ],
  'Parathas': [
    {
      name: 'Square Paratha',
      image: '/squareparatha.jpg',
      single: 'Rs. 180',
      double: 'Rs. 340',
    },
    {
      name: 'Cheene Paratha',
      image: '/cheeni.jpg',
      single: 'Rs. 210',
      double: 'Rs. 390',
    },
    {
      name: 'Aloo Paratha',
      image: '/alooparatha.jpg',
      single: 'Rs. 280',
      double: 'Rs. 450',
    },
    {
      name: 'Besan Paratha',
      image: '/besanparatha.jpg',
      single: 'Rs. 290',
      double: 'Rs. 460',
    },
  ],
  'Frozen Items': [
    {
      name: 'Chicken Shami Kabab',
      image: '/shamikabab.jpeg',
      single: 'Rs. 600 6pieces',
      double: 'Rs. 1100 12pieces',
    },
    {
      name: 'Beef Shami Kabab',
      image: '/beefkabab.webp',
      single: 'Rs. 700 6pieces',
      double: 'Rs. 1300 12pieces',
    },
    {
      name: 'Aloo Samosa',
      image: '/aloosamosa.jpg',
      single: 'Rs. 230 6pieces',
      double: 'Rs. 450 12pieces',
    },
    {
      name: 'Chicken Samosa',
      image: '/samosachicken.jpg',
      single: 'Rs. 290 6pieces',
      double: 'Rs. 550 12pieces',
    },
    {
      name: 'Chicken Roll',
      image: '/rollchicken.jpg',
      single: 'Rs. 360 6pieces',
      double: 'Rs. 710 12pieces',
    },
    {
      name: 'Chicken Cheese Roll',
      image: '/cheeseroll.webp',
      single: 'Rs. 520 6pieces',
      double: 'Rs. 1040 12pieces',
    },
    {
      name: 'Chicken Wonton',
      image: '/wonton.avif',
      single: 'Rs. 200 6pieces',
      double: 'Rs. 400 12pieces',
    },
  ],
  'Drinks': [
    {
      name: 'Pepsi 345ml',
      image: '/pepsi.webp',
      single: 'Rs. 110',
      double: '',
    },
    {
      name: '7up 345ml',
      image: '/7up.jpg',
      single: 'Rs. 110',
      double: '',
    },
    {
      name: 'Mirinda',
      image: '/mirinda.webp',
      single: 'Rs. 110',
      double: '',
    },
  ],
  'Sides': [
    {
      name: 'Roti',
      image: '/roti.jpg',
      single: 'Rs. 80',
      double: '',
    },
    {
      name: 'Tali Masala Mirch',
      image: '/talimirch.jpg',
      single: 'Rs. 75',
      double: '',
    },
    {
      name: 'Salad',
      image: '/salad.webp',
      single: 'Rs. 145',
      double: '',
    },
    {
      name: 'Raita',
      image: '/raita.jpg',
      single: 'Rs. 80',
      double: '',
    },
    {
      name: 'Green Chatni',
      image: '/greenchatni.jpg',
      single: 'Rs. 100',
      double: '',
    },
    {
      name: 'Lasan Chatni',
      image: '/lasanchatni.jpg',
      single: 'Rs. 100',
      double: '',
    },
  ],
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('Continental Food');
  const categories = Object.keys(menuData) as Category[];

  return (
    <section id="menu" className="bg-white py-16 px-4 md:px-12">
      {/* Heading & Note */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-red-900 font-serif">Our Delicious Menu</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Enjoy the rich, home-cooked flavors of our desi dishes — carefully prepared with love and tradition.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              activeCategory === cat
                ? 'bg-red-900 text-white border-red-900'
                : 'bg-white text-red-900 border-red-300 hover:bg-red-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

       {activeCategory === 'Frozen Items' && (
        <div className="mb-6 bg-yellow-100 border-l-4 border-red-900 p-4 text-yellow-800 rounded">
          <p className="text-center font-medium">
            Note: Every frozen item order comes with free chutney or ketchup — whichever is available!
          </p>
        </div>
      )}

      {/* Menu Items */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {menuData[activeCategory].map((item: MenuItem, index: number) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center text-center gap-2"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="rounded-md object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold text-red-900">{item.name}</h3>

            {/* Conditional Pricing */}
            {activeCategory === 'Drinks' || activeCategory === 'Sides' ? (
              <p className="text-gray-700">
                <span className='font-semibold text-red-900'>Price: </span>
                <span className="font-medium">{item.single}</span>
              </p>
            ) : (
              <>
                <p className="text-gray-700">
                  <span className='font-semibold text-red-900'>Single Serve: </span>
                  <span className="font-medium">{item.single}</span>
                </p>
                <p className="text-gray-700">
                  <span className='font-semibold text-red-900'>Double Serve: </span>
                  <span className="font-medium">{item.double}</span>
                </p>
              </>
            )}

            <button className="text-black border border-red-900 px-5 py-2 rounded-full hover:bg-red-900 hover:text-white transition-all">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
