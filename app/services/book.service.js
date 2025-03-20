'use server';

import { revalidate } from '../read-full-article/[id]/page';

export const getAllBooks = async () => {
  try {
    const res = await fetch('https://nextjs-homework005.vercel.app/api/book', {
      next: {
        tags: ['books'],
        revalidate: 3600,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllBookCategories = async () => {
  try {
    const res = await fetch('https://nextjs-homework005.vercel.app/api/book_category', {
      next: {tags: ['categories'], revalidate: 3600}
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBookCategoryById = async (id) => {
  try {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book_category/search?query=${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBookById = async (id) => {
  try {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBookByTitle = async (title) => {
  try {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book?search=${title}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
