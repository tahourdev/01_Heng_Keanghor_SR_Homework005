import { Separator } from '@/components/ui/separator';
import {
  getAllBookCategories,
  getAllBooks,
  getBookByTitle,
  getBookCategoryById,
} from '@/app/services/book.service';
import { Suspense } from 'react';
import SearchComp from '../../_components/SearchComp';
import ContainerComp from '../../_components/ContainerComp';
import CategoryHeaderComp from '../../_components/CategoryHeaderComp';
import ContentWrapperComp from '../../_components/ContentWrapperComp';
import BookListComp from '../../_components/book/BookListComp';

export async function generateStaticParams() {
  const bookCategories = await getAllBookCategories();
  return bookCategories.payload.map((cat) => ({
    id: String(cat.id),
  }));
}

const Books = async ({ searchParams }) => {
  const params = await searchParams;
  const [categoryLists, allBooks, categoryTitle, searchBooks] = await Promise.all([
    getAllBookCategories(),
    getAllBooks(),
    getBookCategoryById(params.query),
    getBookByTitle(params.search),
  ]);

  return (
    <>
      <SearchComp />
      <ContainerComp>


        <CategoryHeaderComp
          categoryTitle={categoryTitle?.payload}
          categoryLists={categoryLists?.payload}
          queryId={params.query}
        />

        <Separator className="!bg-primary" />
        {/* Book List */}
        <ContentWrapperComp>
            <BookListComp
              searchBooks={searchBooks.payload}
              books={allBooks.payload}
              queryId={parseInt(params.query)}
            />
        </ContentWrapperComp>
      </ContainerComp>
    </>
  );
};

export default Books;
