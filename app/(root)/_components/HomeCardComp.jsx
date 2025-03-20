import { Tags } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const homePageCategories = [
  {
    name: 'book',
    link: 'book-categories',
    img: '/book-cat.jpg',
  },
  {
    name: 'cartoon',
    link: 'old-school-cartoons',
    img: '/cartoon-cat.jpg',
  },
];

const HomeCardComp = () => {
  return (
    <div className="flex items-center justify-center gap-20 mt-20 pb-30">
      {homePageCategories.map((item, index) => (
        <Link key={index} href={`/${item.link}`} className="w-70 relative rounded-2xl overflow-hidden">
          <Image src={item.img} alt={item.name} width={400} height={200} />
          <div className="absolute z-20 flex font-bold items-center gap-2 bg-slate-200 p-1 rounded-full px-3 left-4 top-2 text-white">
            <Tags className="text-primary" />
            <p className="text-primary">{item.name}</p>
          </div>
          <div className="bg-black/0 hover:bg-black/40 hover:opacity-100 opacity-0 text-4xl z-10 flex text-center justify-center items-center text-white transition-all duration-300 ease-in-out top-0 absolute w-full h-full left-0">
            View <br /> All Available <br /> {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeCardComp;
