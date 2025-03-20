export const getAllCartoons = async () => {
  try {
    const res = await fetch('https://nextjs-homework005.vercel.app/api/cartoon', {
      next: {tags: ["cartoons"], revalidate: 3600}
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCartoonGenres = async () => {
  try {
    const res = await fetch('https://nextjs-homework005.vercel.app/api/cartoon_genre', {
      next: {tags: ['genres'], revalidate: 3600}
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCartoonById = async (id) => {
  try {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCartoonByTitle = async (title) => {
  try {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?search=${title}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCartoonGenreById = async (id) => {
  try {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon_genre/search?genre=${id}`);
    const data = await await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
