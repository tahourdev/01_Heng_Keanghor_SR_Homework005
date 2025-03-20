'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';




const CategoryHeaderComp = ({ categoryTitle, categoryLists, queryId }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value && pathname === '/old-school-cartoons') {
      params.delete('search');
      params.set('genre', String(value));
    } else {
      params.delete('genre');
    }
    if (value && pathname === '/book-categories') {
      params.delete('search');
      params.set('query', String(value));
    } else {
      params.delete('query');
    }
    router.push(`${pathname}?${params}`);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div className="px-6 py-1.5 bg-muted rounded-lg w-fit mb-2">
        {pathname === '/old-school-cartoons' && (
          <h4 className="font-semibold text-primary">
            {categoryTitle?.cartoon_genre ? categoryTitle?.cartoon_genre : 'All Cartoon'}
          </h4>
        )}
        {pathname === '/book-categories' && (
          <h4 className="font-semibold text-primary">
            {categoryTitle?.book_cate_name ? categoryTitle?.book_cate_name : 'All Books'}
          </h4>
        )}
      </div>

      <Select onValueChange={handleCategoryChange} value={queryId}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categoryLists.map((category) => (
              <SelectItem key={category.id} value={String(category.id)}>
                {category?.cartoon_genre || category?.book_cate_name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryHeaderComp;
