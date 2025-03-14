import  "./MenuShimmer.css"

export default function MenuShimmer(){
    return (
        <div className="flex flex-col gap-[30px]">
			<div className="w-[1000px] h-[300px] rounded-xl bg-[#d3d3d3]"></div>
			<div className="flex flex-col mt-5 items-center gap-[10px]">
				<div className="w-[900px] h-[200px] rounded-xl bg-[#d3d3d3]"></div>
				<div className="w-[900px] h-[200px] rounded-xl bg-[#d3d3d3]"></div>
				<div className="w-[900px] h-[200px] rounded-xl bg-[#d3d3d3]"></div>
			</div>
		</div>
    )
}