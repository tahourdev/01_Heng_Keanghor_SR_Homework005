'use client';
import { SearchIcon } from 'lucide-react';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchComp = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchCartoon = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchQuery.trim()) {
      params.delete('query');
      params.set('search', searchQuery);
    } else {
      params.delete('search');
    }

    router.push(`${pathname}?${params}`);
  };

  return (
    <form
      onSubmit={handleSearchCartoon}
      className="w-full mt-14 flex items-center bg-card shadow-sm p-3 px-6 rounded-full">
      <SearchIcon className="text-gray-400" />
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full outline-0 indent-1.5"
        type="text"
        value={searchQuery}
        placeholder="Search anything you want"
      />
    </form>
  );
};

export default SearchComp;
