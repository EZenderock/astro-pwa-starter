import { useEffect, useState } from "react";

export default function AuthComponent() {
	const [show, setShow] = useState(false)
	useEffect(() => {
		const token = sessionStorage.getItem("xtoken")
		if (token.length < 5) {
			setTimeout(() => {
				window.location.href = "/"
			}, 1000)
		}

	}, [])


	return (
		<div className={`absolute z-50 top-0 left-0 h-full w-full bg-zinc-900/60 backdrop-blur-2xl transition-all ${show ? 'scale-100 inline-block' : 'scale-0 hidden'}`}>

		</div>
	)
}
