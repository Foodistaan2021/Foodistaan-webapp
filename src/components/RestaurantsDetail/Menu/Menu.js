import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { database } from '../../../firebase';
import Cart from './Cart/Cart';
import './Menu.css';
import MenuList from './MenuList/MenuList';
import OverView from './OverView/OverView';
import MenuTypes from './Types/MenuTypes';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import Tabs from './Tabs/Tabs';

const menuTypes = [
  { id: 't1', type: 'Recommended' },
  { id: 't2', type: 'Best Seller' },
  { id: 't3', type: "Chef's Choice" },
];

const Menu = ({ menu, name, address, restaurantId }) => {
  const [selectedType, setSelectedType] = useState('Recommended');
  const [selectedMethod, setSelectedMethod] = useState('Delivery');
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const [filteredMenu, setFilteredMenu] = useState([]);

  const typeClickHandler = (type) => {
    setSelectedType(type);
  };

  const methodClickHandler = (method) => {
    setSelectedMethod(method);
  };

  useEffect(() => {
    const fetchMenuItems = async () => {
      setIsLoading(true);

      try {
        const snapshot = await getDocs(
          collection(database, 'DummyData', restaurantId, 'menu-items')
        );

        const loadedMenu = [];

        snapshot.forEach((doc) => {
          loadedMenu.push(doc.data());
        });

        setMenuItems(loadedMenu);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, [restaurantId]);

  // useEffect(() => {
  //   const filteredListBySelectedType = menu.filter(
  //     (m) => m.type === selectedType
  //   );
  //   setFilteredMenu(filteredListBySelectedType);
  // }, [selectedType, menu]);

  return (
    <>
      <Tabs selectedMethod={selectedMethod} onSelectMethod={methodClickHandler} />
      {/* <MenuTypes
        types={menuTypes}
        selectedType={selectedType}
        onSelect={typeClickHandler}
        selectedMethod={selectedMethod}
      /> */}
      <section className="menu">
        {selectedMethod !== 'Overview' && isLoading && menuItems.length === 0 && (
          <div className="menu-list__list">
            <LoadingSpinner center />
          </div>
        )}
        {selectedMethod !== 'Overview' && !isLoading && menuItems.length === 0 && (
          <div className="menu-list__list">
            <h1 className="center">No items in Menu</h1>
          </div>
        )}
        {selectedMethod !== 'Overview' &&
          !isLoading &&
          menuItems.length > 0 && (
            <MenuList
              menu={menuItems}
              restaurantName={name}
              address={address}
              restaurantId={restaurantId}
              selectedMethod={selectedMethod}
              onSelectMethod={methodClickHandler}
              menuTypes={menuTypes}
              selectedType={selectedType}
              typeClickHandler={typeClickHandler}
            />
          )}
        {selectedMethod === 'Overview' && (
          <OverView
            name={name}
            selectedMethod={selectedMethod}
            onSelectMethod={methodClickHandler}
          />
        )}
        <Cart />
      </section>
    </>
  );
};

export default Menu;
