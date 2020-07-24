import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainTemplate from 'components/templates/MainTemplate';
import { rootAPI, perPage } from 'config';
import { AppProvider } from 'context';
import Header from 'components/organisms/Header/Header';
import Main from 'components/organisms/Main/Main';
import Footer from 'components/organisms/Footer/Footer';
import ItemsList from 'components/organisms/ItemsList/ItemsList';
import Cart from 'components/organisms/Cart/Cart';

const Root = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(perPage);

  useEffect(() => {
    const fetchItems = async () => {
      setisLoading(true);
      const result = await axios(rootAPI);
      setItems(
        result.data.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase()),
        ),
      );
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
    <MainTemplate>
      <>
        <AppProvider>
          <>
            <Header getQuery={(q) => setQuery(q)} />
            <Main>
              <ItemsList
                isLoading={isLoading}
                items={currentItems}
                itemsPerPage={itemsPerPage}
                totalItems={items.length}
                paginate={paginate}
                currentPage={currentPage}
              />
              <Cart />
            </Main>
          </>
        </AppProvider>
        <Footer />
      </>
    </MainTemplate>
  );
};

export default Root;
