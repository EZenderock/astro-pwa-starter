import { useEffect, useState } from "react";

export default function DominentImageColor() {
	useEffect(() => {
		colorjs.prominent('/de.png', { amount: 5, format: 'hex' }).then(colors => {
			const bgcover = document.querySelector("#bgcover");
			console.log(colors);
			bgcover.classList.add(`from-[${colors[0]}]`)
			bgcover.classList.add(`to-[${colors[1]}]`)
		})

	}, [])
	return (
		<p></p>
	);
}

