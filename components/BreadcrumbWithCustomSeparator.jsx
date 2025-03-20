'use client';
import Link from 'next/link';
import { Link2 } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Image from 'next/image';
import { useState } from 'react';

export function BreadcrumbWithCustomSeparator({ type, name, title }) {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const [homeHover, setHomeHover] = useState(false);
  const [bookHover, setBookHover] = useState(false);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              onMouseOver={() => setHomeHover(true)}
              onMouseLeave={() => setHomeHover(false)}
              className="font-bold hover:text-primary text-slate-800 flex items-center gap-2"
              href="/">
              {homeHover ? (
                <Link2 size={20} />
              ) : (
                <Image src="/icons/breadcrumb/home.svg" alt="home icon" width={20} height={20} />
              )}
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <div>
              <Link
                onMouseOver={() => setBookHover(true)}
                onMouseLeave={() => setBookHover(false)}
                className="flex items-center gap-2 hover:text-primary font-bold text-slate-800"
                href={`/${slug}`}>
                {bookHover ? (
                  <Link2 size={20} />
                ) : (
                  <Image src="/icons/breadcrumb/close-book.svg" alt="home icon" width={20} height={20} />
                )}
                {name}
              </Link>
            </div>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-destructive font-bold">
            <div className="flex items-center gap-2">
              <Image src="/icons/breadcrumb/book.svg" alt="home icon" width={20} height={20} />
              {title}
            </div>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
