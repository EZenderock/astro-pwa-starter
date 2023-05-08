// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
	"BQBKZ7_L81S47tmi0fNopr-4fT9RQWRdGhnOkAqpObQ5UNZl-DXvma5IswinTeRMVicCZ3rJ2oo60C7DzURaQoHidfMKnQfGoufwVXvlQB1ZBkgrHPZ-Pq6mLL8_cNhT9Qc1mT8rB_eHbl7b5bBkPlqMfAgtlwrqyToDViBHjKqqkgh_HbukYnZDqcxF7geYNdIOlIyqV_zIs_RZcLR0gI1Qdq4bYlluxnmNc4Og2mP3Kl0wv65SHOBHnHNl3autcy9CWh--JXuzjzdR7WzzPi9Ikr0QM2VbvlpiWu87ng"
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

async function getTopTracks() {
	// Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
	return (
		await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")
	).items
}

const topTracks = await getTopTracks()
console.log(
	topTracks?.map(
		({ name, artists }) =>
			`${name} by ${artists.map((artist) => artist.name).join(", ")}`
	)
)
