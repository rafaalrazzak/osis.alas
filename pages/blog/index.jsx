import {
	Layout,
	Container,
	SectionBadge,
	SectionDescription,
	SEO,
	BlogCard,
} from "@components";
import supabase from "@/libs/supabase";

export async function getStaticProps() {

	const { data: blog, error: errorBlog } = await supabase
		.from("blog")
		.select(`*, author (*)`)
		.order("id", { ascending: false });
	if (errorBlog) throw errorBlog;
	return {
		props: { blog },
	};
}


export default function Blog({ blog }) {
	return (
		<>
			<SEO title="Blog" />
			<Layout noBg>
				<div className="mx-4 py-12 flex flex-col lg:mx-24 ">
					<div className="w-full px-6 py-4 text-center md:text-start">
						<SectionBadge>Artikel terbaru</SectionBadge>
						<SectionDescription>
							Artikel terbaru yang telah kami tulis sedemikian rupa
						</SectionDescription>
					</div>
					<div className="flex w-full flex-wrap items-center justify-center gap-4 space-y-5">
						{blog
							.map(
								({
									id,
									created_at,
									title,
									description,
									thumbnail,
									author,
									slug,
								}) => (
									<BlogCard
										key={id}
										title={title}
										description={description}
										thumbnail={thumbnail}
										date={created_at}
										author={author}
										slug={slug}
									/>
								)
							)}
					</div>
				</div>
			</Layout>
		</>
	);
}
