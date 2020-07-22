import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { rootAPI, perPage } from 'config';
import Header from 'components/organisms/Header/Header';
import Main from 'components/organisms/Main/Main';
import Footer from 'components/organisms/Footer/Footer';
import ItemsList from 'components/organisms/ItemsList/ItemsList';
import Cart from 'components/molecules/Cart/Cart';

const Page = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(perPage);

  useEffect(() => {
    const fetchItems = async () => {
      setisLoading(true);
      const result = await axios(rootAPI);
      setItems(result.data.filter((item) => item.name.includes(query)));
      setCurrentPage(1);
      setisLoading(false);
    };

    fetchItems();
  }, [query]);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header getQuery={(q) => setQuery(q)} />
      <Main>
        <ItemsList
          isLoading={isLoading}
          items={currentItems}
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
        />
        <Cart />
      </Main>
      <Footer />
    </>
  );
};

export default Page;
