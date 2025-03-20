import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CartoonCardComp = ({ cartoon }) => {
  const queryParams = new URLSearchParams({
    type: 'cartoon',
    name: 'old school cartoons',
    title: cartoon.ct_title, 
  });

  return (
    <div className="cursor-pointer">
      <Link href={`/read-full-article/${cartoon.id}?${queryParams.toString()}`} className="block">
        <div key={cartoon.id} className="h-[480px] w-80 overflow-hidden">
          <Image
            className="rounded-lg h-full w-full object-cover"
            src={cartoon?.image}
            alt="cartoon image"
            width={260}
            height={300}
          />
        </div>
        <div className="mt-3">
          <h4 className="font-bold">{cartoon.ct_title}</h4>
          <div className="flex items-center gap-2">
            <Image src="/icons/eye.svg" width={20} height={20} alt="eye" />
            <p className="text-primary font-bold">
              {cartoon.view_count} times | {cartoon.published_year}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CartoonCardComp;

