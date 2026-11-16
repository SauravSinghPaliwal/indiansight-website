import { client } from '../lib/sanity';
import { allSlugsQuery } from '../lib/queries';
import { SITE_URL } from '../lib/site';

export const revalidate = 3600;

export default async function sitemap() {
  const pages = ['', '/about', '/blog', '/contact'].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));

  let posts = [];
  try {
    const slugs = await client.fetch(allSlugsQuery);
    posts = slugs.map(({ slug }) => ({ url: `${SITE_URL}/blog/${slug}` }));
  } catch {}

  return [...pages, ...posts];
}
