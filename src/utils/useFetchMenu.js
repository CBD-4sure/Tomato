import { useState, useEffect } from "react";
import { MENU_API } from "./data";

export default function useFetchMenu(resId){
	const [menudata, setMenuData] = useState(null);

    useEffect(() => {
		const fetchMenuData = async () => {
			const response = await fetch(MENU_API + `${resId}`);
			const data = await response.json();
			setMenuData(data);
		};
		fetchMenuData();
	}, []);
    return menudata
}