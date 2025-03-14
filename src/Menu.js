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
		<div className="flex flex-col items-center">
			<div className="rounded-2xl bg-red-400 p-3 w-[1000px]">
				<div className="flex justify-between rounded-2xl bg-amber-50 p-5">
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
				<div className="my-8">
					<h2 className="text-lg"> <strong>Top Recommended</strong></h2>
				</div>
				{menuList?.map((item) => (
					<MenuCard key={item.card.info.id} menuItem={item} />
				))}
			</div>
		</div>
	);
}
