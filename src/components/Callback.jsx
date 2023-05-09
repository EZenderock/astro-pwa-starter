import { useEffect } from "react"

function extractTokenFromUrl() {
	const url = window.location.href;
	const token = url.match(/access_token=([^&]*)/);
	return token ? token[1] : null;
}


export default function CallBackComponent() {

	useEffect(() => {
		const token = extractTokenFromUrl()
		sessionStorage.setItem("xtoken", token)
		setTimeout(() => {
			window.location.href = "/app"
		}, 1500);

	}, [])

	return (
		<h1 className="text-zinc-100 p-4">Redirecting...</h1>
	)
}


