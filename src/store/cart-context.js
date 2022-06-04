import React, { useCallback, useReducer } from 'react';

export const CartContext = React.createContext({
  restaurantId: '',
  restaurantName: '',
  address: '',
  method: '',
  cartItems: [],
  totalAmount: 0,
  cartChanged: '',
  addItem: (cartData) => {},
  removeItem: (id) => {},
  updateItem: (updatedItemData) => {},
  replaceCartContext: () => {},
  fetchCartItems: () => {},
  sendCartItems: () => {},
  cartChangeReset: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const restroInfo = {
      restaurantId: action.itemData.restaurantId,
      restaurantName: action.itemData.restaurantName,
      address: action.itemData.address,
      method: action.itemData.method,
    };

    // await updateDoc(doc(database, 'cart', DUMMY_USER['cart-id']), {
    //   'vendor-id': action.itemData.id,
    //   'vendor-name': action.itemData.restaurantName,
    // });

    const { cartItem } = action.itemData;

    //copied last state of cart context
    const updatedCartItems = [...state.cartItems];
    //checking existing item index in cartItems
    const existingCartItemIndex = updatedCartItems.findIndex(
      (c) => c.id === cartItem.id
    );

    const existingItem = updatedCartItems[existingCartItemIndex];

    //have two case ther is already a item or there is no item
    if (existingCartItemIndex >= 0) {
      const updatedCartItem = {
        ...existingItem,
        qty: existingItem.qty + 1,
      };
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      //updating quantity by 1 and increase totalAmount + price
      // await updateDoc(
      //   doc(database, 'cart', DUMMY_USER['cart-id'], 'items', cartItem.id),
      //   {
      //     id: updatedCartItem.id,
      //     name: updatedCartItem.name,
      //     price: `${updatedCartItem.price}`,
      //     quantity: `${updatedCartItem.qty}`,
      //     veg: false,
      //   }
      // );
      return {
        ...restroInfo,
        cartItems: updatedCartItems,
        totalAmount: state.totalAmount + updatedCartItem.price,
        cartChanged: action.type,
      };
    } else {
      // await setDoc(
      //   doc(database, 'cart', DUMMY_USER['cart-id'], 'items', cartItem.id),
      //   {
      //     id: cartItem.id,
      //     name: cartItem.name,
      //     price: `${cartItem.price}`,
      //     quantity: `${cartItem.qty}`,
      //     veg: false,
      //   }
      // );
      return {
        ...restroInfo,
        cartItems: [...updatedCartItems, cartItem],
        totalAmount: state.totalAmount + cartItem.price,
        cartChanged: action.type,
      };
    }
  }

  if (action.type === 'UPDATE') {
    const updatedCartItems = [...state.cartItems];

    const existingCartItemIndex = updatedCartItems.findIndex(
      (c) => c.id === action.updateItemData.id
    );

    //updateitemData contains id price customize

    const foundCartItem = updatedCartItems[existingCartItemIndex];

    // //there are two ids for same product for eg waffle have different id for half customization 'waffle1-half' and 'waffle2-full'
    let idPreffix;
    if (foundCartItem.id.split('-').length > 2) {
      idPreffix =
        foundCartItem.id.split('-')[0] + '-' + foundCartItem.id.split('-')[1];
    } else {
      idPreffix = foundCartItem.id.split('-')[0];
    }

    const newId = `${idPreffix}-${action.updateItemData.customize}`;

    let totalAmount = state.totalAmount;

    // //reducing old price
    totalAmount -= foundCartItem.qty * foundCartItem.price;

    const exitingItemWithNewIdIndex = updatedCartItems.findIndex(
      (c) => c.id === newId
    );

    if (exitingItemWithNewIdIndex >= 0) {
      const updatedCartItem = updatedCartItems[exitingItemWithNewIdIndex];

      updatedCartItem.customize = action.updateItemData.customize;
      updatedCartItem.qty += foundCartItem.qty;

      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      updatedCartItems.splice(existingCartItemIndex, 1);
    } else {
      // //updating items
      foundCartItem.id = newId;
      foundCartItem.customize = action.updateItemData.customize;
      foundCartItem.price = action.updateItemData.price;

      // //adding new price
      updatedCartItems[existingCartItemIndex] = foundCartItem;
    }

    totalAmount += foundCartItem.qty * action.updateItemData.price;

    return {
      ...state,
      totalAmount,
      cartItems: updatedCartItems,
      cartChanged: `${action.type}_${action.updateItemData.id}_${newId}`,
    };
  }

  if (action.type === 'REMOVE') {
    //copying cartItems
    const updatedCartItems = [...state.cartItems];

    //finding existing itme index
    const existingCartItemIndex = updatedCartItems.findIndex(
      (c) => c.id === action.id
    );

    const updatedCartItem = updatedCartItems[existingCartItemIndex];

    //checking if cart quantity = 1 means permanently remove item or greater than 1 means update existing item
    if (updatedCartItem.qty === 1) {
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.id !== action.id),
        totalAmount: state.totalAmount - +updatedCartItem.price,
        cartChanged: `${action.type}_${action.id}`,
      };
    }
    if (updatedCartItem.qty > 1) {
      const updateItem = { ...updatedCartItem, qty: updatedCartItem.qty - 1 };
      updatedCartItems[existingCartItemIndex] = updateItem;
      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: state.totalAmount - updatedCartItem.price,
        cartChanged: action.type,
      };
    }
  }

  if (action.type === 'REPLACE') {
    // returning initialState
    return {
      restaurantId: '',
      restaurantName: '',
      address: '',
      method: '',
      cartItems: [],
      totalAmount: 0,
      cartChanged: false,
    };
  }

  if (action.type === 'FETCH') {
    //after fetching change Context
    return {
      cartItems: action.items.cartItems,
      restaurantId: action.items.restaurantId,
      restaurantName: action.items.restaurantName,
      address: action.items.address,
      method: action.items.method,
      totalAmount: action.items.totalAmount,
    };
  }

  if (action.type === 'CHANGE') {
    //after fetching change Context
    return {
      ...state,
      cartChanged: false,
    };
  }

  // returning initialState
  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, {
    restaurantId: '',
    restaurantName: '',
    address: '',
    method: '',
    cartItems: [],
    totalAmount: 0,
  });

  const addItem = (itemData) => {
    dispatchCartState({ type: 'ADD', itemData: itemData });
  };

  const updateItem = (updateItemData) => {
    dispatchCartState({ type: 'UPDATE', updateItemData: updateItemData });
  };

  const removeItem = (id) => {
    dispatchCartState({ type: 'REMOVE', id: id });
  };

  const replaceCart = () => {
    dispatchCartState({ type: 'REPLACE' });
  };

  const fetchCart = useCallback((items) => {
    dispatchCartState({ type: 'FETCH', items: items });
  }, []);

  const cartChangeReset = useCallback(() => {
    dispatchCartState({ type: 'CHANGE' });
  }, []);

  const sendCartItems = async () => {};

  const value = {
    ...cartState,
    addItem,
    removeItem,
    replaceCart,
    updateItem,
    fetchCart,
    sendCartItems,
    cartChangeReset,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
