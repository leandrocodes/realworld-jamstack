export default function Home({ posts }) {
	return (
		<div>
			{/* loop over the posts and render them */}
			{posts &&
				posts.map(post => (
					<div key={post.id}>
						<h2>{post.Title}</h2>
					</div>
				))}
		</div>
	)
}

export async function getStaticProps() {
	// GET post from STRAPI

	const res = await fetch('http://localhost:1337/posts')
	const posts = await res.json()

	return {
		props: { posts }
	}
}
