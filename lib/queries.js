// All posts — for blog listing + home page preview
export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "author": author->name,
    "category": categories[0]->title,
    "mainImage": mainImage.asset->url
  }
`;

// Single post by slug — for blog post page
export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    body,
    excerpt,
    publishedAt,
    "author": author->name,
    "authorBio": author->bio,
    "category": categories[0]->title,
    "mainImage": mainImage.asset->url
  }
`;

// All slugs — for generateStaticParams
export const allSlugsQuery = `
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`;
