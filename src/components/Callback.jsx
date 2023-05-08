import { useEffect } from "react"

export default function CallBackComponent() {

	useEffect(() => {
		const token = window.location.hash.substr(1).split("&")[0].split("=")[1]
		sessionStorage.setItem("xtoken", token)

		setTimeout(() => {
			window.location.href = "/app"
		}, 1500)
	}, [])

	return (
		<h1 className="text-zinc-100">Token: Redirect...</h1>
	)
}


