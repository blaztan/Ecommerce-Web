import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  listViewHandler: () => {},
  gridViewHandler: () => {},
  sort: "price-lowest",
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const listViewHandler = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const gridViewHandler = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const updateSort = (event) => {
    // for demostartion
    // const name = event.target.name;
    const value = event.target.value;

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, products]);

  return (
    <FilterContext.Provider
      value={{ ...state, listViewHandler, gridViewHandler, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
