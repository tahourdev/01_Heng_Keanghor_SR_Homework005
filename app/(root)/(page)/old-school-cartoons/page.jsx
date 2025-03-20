import React from 'react'
import { getCartoonByTitle, getCartoonGenreById, getCartoonGenres } from '@/app/services/cartoon.service';
import { Separator } from '@/components/ui/separator';
import { getAllCartoons } from '@/app/services/cartoon.service';
import { Search } from 'lucide-react';
import ContainerComp from '../../_components/ContainerComp';
import CategoryHeaderComp from '../../_components/CategoryHeaderComp';
import ContentWrapperComp from '../../_components/ContentWrapperComp';
import SearchComp from '../../_components/SearchComp';
import CartoonListComp from '../../_components/cartoon/CartoonListComp';

const OldSchoolCartoons = async ({ searchParams }) => {  
  const { search, genre } = (await searchParams);
  const [categoryTitle, categoryLists, cartoons, searchCartoon] = await Promise.all([
    getCartoonGenreById(genre),
    getCartoonGenres(),
    getAllCartoons(),
    getCartoonByTitle(search),
  ]);
  
  return (
    <>
      <SearchComp />
      <ContainerComp>
        <CategoryHeaderComp
          categoryTitle={categoryTitle?.payload}
          categoryLists={categoryLists?.payload}
          queryId={genre}
        />
        <Separator className="!bg-primary" />
        <ContentWrapperComp>
          <CartoonListComp searchCartoon={searchCartoon.payload} cartoons={cartoons.payload} genreId={genre} />
        </ContentWrapperComp>
      </ContainerComp>
    </>
  );
}

export default OldSchoolCartoons