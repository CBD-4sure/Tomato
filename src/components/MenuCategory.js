import MenuCard, { bestsellerMenuCard } from "./MenuCard";

export default function MenuCategory({ category, handleCategory }) {
	const menuList = category.card?.card?.itemCards;
	const BestMenuCard = bestsellerMenuCard(MenuCard);
	return (
		<div>
			<div className="flex flex-col my-3 p-4 rounded-xl border-1">
				<div
					className="flex justify-between cursor-pointer"
					onClick={() => handleCategory(category)}
				>
					<h2 className="text-lg">
						<strong>
							{category.card?.card?.title} ({menuList.length})
						</strong>
					</h2>
					<span>
						{category?.expanded ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m4.5 15.75 7.5-7.5 7.5 7.5"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</svg>
						)}
					</span>
				</div>
				<div>
					{category?.expanded &&
						menuList?.map((item) => (
							item.card.info?.isBestseller ? <BestMenuCard key={item.card.info.id} menuItem={item} /> :<MenuCard key={item.card.info.id} menuItem={item} />
						))}
				</div>
			</div>
		</div>
	);
}
