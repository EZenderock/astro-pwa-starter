// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
async function fetchWebApi(endpoint, method, token, body) {
	const res = await fetch(`https://api.spotify.com/${endpoint}`, {
		headers: {
			Authorization: `Bearer ${token}`
		},
		method,
		body: JSON.stringify(body)
	})
	return await res.json()
}

export async function getTopTracks(token) {
	// Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
	return (
		await fetchWebApi(
			"v1/me/top/tracks?time_range=short_term&limit=5",
			"GET",
			token
		)
	).items
}
