// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
	"BQBbGTrvWZcQKSR9STspmHGFGXRUkUbi6URpvAiCwwEkA-O_oUeFBj12QVEBf0RWM06SNdBWQukUKDeCYCaS4b-bkSouri-Sky7FUstXxwHoLDnHA-k16aNenI_nDVTuzZ9gVdVLLfjhLcGbJjnnCf2klv9xTMYXR_782u5KSVr-lyAIytbBtpFXhPKIKkXIJl048lCbk7fK83n1373kNCtsKthI_VRFjIbyEWftNYJDyb-cNDmoaXZmgcewQo3CPVZsGKPqo_4MUgnWuwNnqUcwzJHo9bWKD6r-z-2TKg"
async function fetchWebApi(endpoint, method, body) {
	const res = await fetch(`https://api.spotify.com/${endpoint}`, {
		headers: {
			Authorization: `Bearer ${token}`
		},
		method,
		body: JSON.stringify(body)
	})
	return await res.json()
}

export async function getTopTracks() {
	// Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
	return (
		await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")
	).items
}
