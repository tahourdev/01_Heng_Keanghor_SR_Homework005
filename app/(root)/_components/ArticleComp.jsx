import React from 'react';
import Image from 'next/image';
import { getYear } from '@/lib/utils';
import { Eye } from 'lucide-react';

const ArticleComp = ({ bookDetail, cartoonDetail }) => {
  const title = bookDetail?.book_title ?? cartoonDetail?.ct_title ?? 'Unknown Title';
  const imageSrc = bookDetail?.image ?? cartoonDetail?.image ?? '/default-image.jpg';
  const author = bookDetail?.book_author ?? cartoonDetail?.ct_creator ?? 'Unknown Author';
  const publishedYear = cartoonDetail?.published_year ? getYear(cartoonDetail.published_year) : '';
  const description = cartoonDetail?.ct_description ?? bookDetail?.description ?? 'No description available.';
  const viewCount = cartoonDetail?.view_count;

  const ViewCount = ({ viewCount, publishedYear }) => (
    <div className="flex items-center gap-2">
      <Eye className="text-primary" size={20} />
      <p className="text-primary font-bold">
        {viewCount} times | {publishedYear}
      </p>
    </div>
  );

  return (
    <div>
      <div className="px-20 z-10 pt-60 pb-4 h-fit relative mt-20 space-y-2 w-full rounded-t-[50px] bg-background drop-shadow-sm">
        <div>
          <div className="flex justify-between items-end">
            <h1 className="text-xl font-bold">{title}</h1>
            <Image
              className="rounded-3xl absolute right-20 -top-25"
              src={imageSrc}
              width={260}
              height={400}
              alt="detail"
            />
          </div>
          <p>
            by <span className="font-bold text-primary">{author}</span>
          </p>

          {viewCount && <ViewCount viewCount={viewCount} publishedYear={publishedYear} />}

          <p className="pt-4 text-sm text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleComp;
