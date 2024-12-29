'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Input } from '../ui/input';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get('search') || '');

  // Handle debounce and update the URL search parameter
  const hdlSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams as unknown as URLSearchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    router.replace(`?${params.toString()}`);
  }, 500);


  useEffect(()=>{
    if(!searchParams.get('search')){
      setSearch('')
    }
  },[searchParams.get('search')])


  return (
    <Input
      type="text"
      placeholder="ค้นหา..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value)
        hdlSearch(e.target.value)
      }}
      className="max-w-xs"
    />
  );
};

export default Search;
