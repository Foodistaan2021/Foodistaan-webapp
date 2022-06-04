import { useRef, useState } from 'react';

import { BsFilterLeft } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import './MenuTypesMobile.css';

const MenuTypesMobile = ({ types, selectedType, onSelect }) => {
  const [showMenuTypes, setShowMenuTypes] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);

  const menuRef = useRef();

  // useEffect(() => {
  //   console.log(menuRef.current.getBoundingClientRect());
  // }, [menuRef]);
  window.onscroll = () => {
    setShowMenuButton(window.pageYOffset === 0 ? false : true);
    return (window.onscroll = null);
  };

  const showMenuTypesItemHandler = () => {
    setShowMenuTypes((prev) => !prev);
  };

  return (
    <>
      {!showMenuTypes && showMenuButton && (
        <button
          className="menu-types__mobile-button"
          onClick={showMenuTypesItemHandler}
          ref={menuRef}
        >
          <BsFilterLeft /> Menu
        </button>
      )}
      {showMenuTypes && (
        <ul className="menu-types__mobile-items">
          <button onClick={showMenuTypesItemHandler}>
            <ImCross />
          </button>
          {types.map((t) => (
            <li
              key={t.id}
              className={selectedType === t.type ? 'active' : ''}
              onClick={onSelect.bind(null, t.type)}
            >
              {t.type}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MenuTypesMobile;
