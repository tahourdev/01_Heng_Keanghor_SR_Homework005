import { BreadcrumbWithCustomSeparator } from '@/components/BreadcrumbWithCustomSeparator';
import React from 'react';
import Article from '../../(root)/_components/ArticleComp';
import { getAllCartoons, getCartoonById } from '@/app/services/cartoon.service';
import { getAllBooks, getBookById } from '@/app/services/book.service';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const [books, cartoons] = await Promise.all([getAllBooks(), getAllCartoons()]);

  const bookParams = books.payload.map((book) => ({
    id: String(book.id),
  }));

  const cartoonParams = cartoons.payload.map((cartoon) => ({
    id: String(cartoon.id),
  }));

  return [...bookParams, ...cartoonParams];
}

const Page = async ({ searchParams, params }) => {
  const { id } = await params;
  const { type, name, title } = await searchParams;

  let bookDetail = null;
  let cartoonDetail = null;

  if (type === 'cartoon') {
    cartoonDetail = await getCartoonById(id);
  } else if (type === 'book') {
    bookDetail = await getBookById(id);
  }

  return (
    <div className="container mx-auto">
      <div className="pt-14">
        <BreadcrumbWithCustomSeparator type={type} name={name} title={title} />
      </div>
      <Article bookDetail={bookDetail?.payload} cartoonDetail={cartoonDetail?.payload} />
    </div>
  );
};

export default Page;
