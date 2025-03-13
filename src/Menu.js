import { useParams } from "react-router";
import MenuShimmer from "./components/MenuShimmer";
import { imgUrl } from "./utils/data";
import MenuCard from "./components/MenuCard";
import useFetchMenu from "./utils/useFetchMenu";

export default function () {

	const { resId } = useParams();
	const menudata = useFetchMenu(resId);

	const menuList =
		menudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
			?.card?.card?.itemCards;
	console.log(menudata);
	const menuRes = menudata?.data?.cards[2]?.card?.card?.info;
	console.log(menuRes);
	return menudata === null ? (
		<MenuShimmer />
	) : (
		<div className="menupage">
			<div className="menures">
				<div className="menuresContainer">
					<div className="menurestext">
						<h1>{menuRes?.name}</h1>
						<h3>
							Star {menuRes?.avgRatingString} (
							{menuRes?.totalRatingsString})
						</h3>
						<p>{menuRes?.costForTwoMessage}</p>
						<h4>
							{menuRes?.locality}, {menuRes?.city} (
							{menuRes?.sla.slaString})
						</h4>
					</div>
					<div className="imgres">
						<img src={imgUrl + menuRes?.cloudinaryImageId}></img>
					</div>
				</div>
			</div>
			<div className="menuitems">
				<div className="itemhead">
					<h2> Top Recommended</h2>
				</div>
				{menuList?.map((item) => (
					<MenuCard key={item.card.info.id} menuItem={item} />
				))}
			</div>
		</div>
	);
}
