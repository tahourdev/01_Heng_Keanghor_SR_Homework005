import React, { Suspense } from 'react';
import BookCard from './BookCardComp';

const BookListComp = ({ searchBooks, books, queryId }) => {
  if (searchBooks?.length) {
    return (
      <section className="flex gap-4 flex-wrap mt-40 gap-y-50">
        {searchBooks.map((item) => (
          <BookCard key={item.id} book={item} />
        ))}
      </section>
    );
  }

  const bookFilters = queryId ? books.filter((book) => book.book_cate_id === queryId) : books;

  return (
    <div className="flex gap-4 flex-wrap mt-40 gap-y-50">
      {bookFilters?.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookListComp;
