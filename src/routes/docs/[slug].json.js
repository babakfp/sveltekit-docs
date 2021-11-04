/**
 * @type {import('@sveltejs/kit').RequestHandler}
*/
export async function get({ params, fetch }) {
	const { slug } = params

	const data = await fetch(`${API_BASE}/docs/kit/docs${slug}`).then(r => r.json())

	if (data) {
		return {
			body: {
				data
			}
		};
	}
}
