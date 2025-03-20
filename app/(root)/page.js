import Image from 'next/image';
import Container from './_components/ContainerComp';
import Search from './_components/SearchComp';
import { getAllBooks, getBookByTitle } from '../services/book.service';
import { getAllCartoons, getCartoonByTitle } from '../services/cartoon.service';
import HomeCard from './_components/HomeCardComp';

export default async function Home() {
  return (
    <>
      <Search />
      <Container>
        <div className="px-6 py-1.5 bg-muted rounded-lg w-fit mb-2">
          <h4 className="font-semibold text-primary">Homepage</h4>
        </div>
        <HomeCard />
      </Container>
    </>
  );
}
