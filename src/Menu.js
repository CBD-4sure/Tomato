import { useParams } from "react-router";
import MenuShimmer from "./components/MenuShimmer";
import { imgUrl } from "./utils/data";
import useFetchMenu from "./utils/useFetchMenu";
import MenuCategory from "./components/MenuCategory";
import { useState, useEffect } from "react";

export default function () {
	const { resId } = useParams();
	const menudata = useFetchMenu(resId);
	const [menuCatogories, setMenuCategories] = useState([]);
	useEffect(() => {
		const menuCatogories =
			menudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
				.filter(
					(c) =>
						c.card?.card?.["@type"] ===
						"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
				)
				.map((item) => {
					return {
						...item,
						expanded: false,
					};
				});

		setMenuCategories(menuCatogories);
	}, [menudata]);
	const menuRes = menudata?.data?.cards[2]?.card?.card?.info;

	const handleCategory = (category) => {
		const updatedMenuCategories = menuCatogories.map((existingCategory) => {
			if (
				category.card.card.categoryId ===
				existingCategory.card.card.categoryId
			) {
				return {
					...existingCategory,
					expanded: !category.expanded,
				};
			} else {
				return {
					...existingCategory,
					expanded: false,
				};
			}
		});
		setMenuCategories(updatedMenuCategories);
	};

	return menudata === null ? (
		<MenuShimmer />
	) : (
		<div className="flex flex-col items-center">
			<div className="rounded-2xl bg-red-400 p-3 w-[1000px] mb-3">
				<div className="flex justify-between rounded-2xl bg-white p-5">
					<div className="flex flex-col gap-7">
						<div>
							<h1 className="text-2xl mb-3">
								<strong>{menuRes?.name}</strong>
							</h1>
						</div>
						<div>
							<h3>
								<strong className="text-green-600">
									Star {menuRes?.avgRatingString}
								</strong>

								<span> ({menuRes?.totalRatingsString})</span>
							</h3>

							<p>{menuRes?.costForTwoMessage}</p>
							<h4>
								{menuRes?.locality}, {menuRes?.city}
							</h4>
							<h4>{menuRes?.sla.slaString}</h4>
						</div>
					</div>
					<div className="w-[300px] h-[240px] overflow-hidden rounded-lg">
						<img
							className="object-cover w-[100%] h-[100%]"
							src={imgUrl + menuRes?.cloudinaryImageId}
						></img>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-[900px]">
				{menuCatogories?.map((category) => (
					<MenuCategory
						key={category.card.card.categoryId}
						category={category}
						handleCategory={handleCategory}
					/>
				))}
			</div>
		</div>
	);
}
