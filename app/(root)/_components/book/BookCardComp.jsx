import Link from 'next/link';
import React from 'react';

const BookCardComp = ({ book }) => {
  const queryParams = new URLSearchParams({
    type: 'book',
    name: 'book-categories',
    title: book.book_title,
  });
  return (
    <div className="flex px-11 py-7 bg-muted rounded-4xl h-58 max-w-lg drop-shadow-sm">
      <div className="w-1/2">
        <div className="w-45 h-62 relative -top-38">
          <img className="rounded-2xl" src={book.image} alt={book.title} />
          <Link href={`/read-full-article/${book.id}?${queryParams.toString()}`}>
            <button className="btn transition-all duration-300 ease-in-out hover:-translate-y-2">read full article</button>
          </Link>
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="text-xl font-medium truncate">
          {/* title */}
          {book.book_title}
        </h2>
        <p className="font-light line-clamp-6 text-justify">
          {/* description */}
          {book.description}
        </p>
      </div>
    </div>
  );
};

export default BookCardComp;
