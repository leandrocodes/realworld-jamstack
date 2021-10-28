import Link from 'next/link'
export default function Home({ posts }) {
	return (
		<div>
			{/* loop over the posts and render them */}
			{posts &&
				posts.map(post => (
					<Link href={`/${post.Slug}`} key={post.id} passHref>
						<a>
							<h2>{post.Title}</h2>
							<p>{post.User.username}</p>
						</a>
					</Link>
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
