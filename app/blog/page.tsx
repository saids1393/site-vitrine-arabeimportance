import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog';

type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  author?: string;
  image?: string;
};

function BlogCard({ post }: { post: Post }) {
  return (
    <article className="bg-slate-800 rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-white mb-2">{post.title}</h2>
      {post.excerpt && <p className="text-slate-300 mb-4">{post.excerpt}</p>}
      <a href={`/blog/${post.slug}`} className="text-indigo-400 hover:underline">
        Lire l'article
      </a>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Blog | Arabe Importance - Conseils et tutoriels ERPR',
  description: 'Découvrez nos articles sur la méthode ERPR, apprentissage de l\'arabe dans la prononciation authentique des lettres pour progresser rapidement.',
  keywords: 'blog arabe, tutoriel ERPR, conseils arabe, article éducatif, article méthode ERPR',
  openGraph: {
    title: 'Blog Arabe Importance',
    description: 'Articles et conseils sur l\'apprentissage de l\'arabe avec la méthode ERPR',
    type: 'website',
    url: 'https://arabeimportance.fr/blog',
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Arabe Importance',
    description: 'Articles sur la méthode ERPR et l\'apprentissage de l\'arabe',
    url: 'https://arabeimportance.fr/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Arabe Importance',
      logo: 'https://arabeimportance.fr/icon-512.png',
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://arabeimportance.fr/blog/${post.slug}`,
      datePublished: post.date,
      author: { '@type': 'Person', name: post.author },
      image: post.image || 'https://arabeimportance.fr/og-image.jpg',
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      
      <div className="px-6 py-20 bg-black">
        <h1 className="text-5xl font-bold text-white mb-4">
          Blog Arabe Importance
        </h1>
        <p className="text-xl text-slate-300 mb-12 max-w-3xl">
          Articles, tutoriels et conseils pour maîtriser l'arabe avec la méthode ERPR. Découvrez les secrets pour progresser rapidement et atteindre vos objectifs linguistiques.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-slate-400 text-center text-lg">
            Aucun article pour le moment. Revenez bientôt !
          </p>
        )}
      </div>
    </>
  );
}