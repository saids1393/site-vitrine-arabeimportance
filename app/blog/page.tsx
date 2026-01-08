import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { ArrowRight, BookOpen } from 'lucide-react';

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
    <article className="bg-white rounded-2xl p-6 border border-gray-100 card-shadow hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
        <BookOpen className="w-6 h-6 text-orange-500" />
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
      {post.excerpt && (
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
      )}
      {post.date && (
        <p className="text-sm text-gray-400 mb-4">{post.date}</p>
      )}
      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors"
      >
        Lire l'article
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Blog | Arabe Importance - Conseils et tutoriels ERPR',
  description: 'Decouvrez nos articles sur la methode ERPR, apprentissage de l\'arabe dans la prononciation authentique des lettres pour progresser rapidement.',
  keywords: 'blog arabe, tutoriel ERPR, conseils arabe, article educatif, article methode ERPR',
  openGraph: {
    title: 'Blog Arabe Importance',
    description: 'Articles et conseils sur l\'apprentissage de l\'arabe avec la methode ERPR',
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
    description: 'Articles sur la methode ERPR et l\'apprentissage de l\'arabe',
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

      <div className="min-h-screen bg-white">
        <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-gray-900">
                Arabe<span className="text-orange-500">Importance</span>
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                Retour a l'accueil
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32 py-20">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Articles et conseils
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tutoriels et conseils pour maitriser l'arabe avec la methode ERPR.
              Decouvrez les secrets pour progresser rapidement.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">
                Aucun article pour le moment. Revenez bientot !
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
