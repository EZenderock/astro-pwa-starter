import { useEffect, useState } from "react"
import { getTopTracks } from "../../utils/spotify";

export default function FollowedArtist() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const topTracks = await getTopTracks(sessionStorage.getItem("xtoken"));
			setData(topTracks.map(({ name, artists }) => ({ name, artists })));
		}
		fetchData();
	}, []);

	console.log(data);

	return (
		<div className="mt-[4%] flex items-center gap-[8%] overflow-x-scroll">
			{data.map(({ name, artists }) => (
				<nav className="text-center w-[100px]" key={name}>
					<button className="h-[100px] w-[100px] rounded-full bg-zinc-800"></button>
					<p className="truncate">{name}</p>
					<p className="truncate text-zinc-500 text-sm">{artists.map((art) => (
						<span key={`id-art-${art.name}`}> {art.name}.</span>
					))}</p>
				</nav>
			))}
		</div>
	);
}
