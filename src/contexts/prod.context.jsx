import { createContext, useState } from 'react';
import FAKE_SHOP_DATA from '../shop-data.json';

export const ProdContext = createContext({
	prodList: [],
	setProdList: () => [],
});

export const ProdProvider = ({ children }) => {
	const [prodList, setProdList] = useState(FAKE_SHOP_DATA);
	const value = { prodList, setProdList };

	return <ProdContext.Provider value={value}>{children}</ProdContext.Provider>;
};
