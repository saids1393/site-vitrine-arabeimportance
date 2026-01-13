import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { ArrowRight, BookOpen, Sparkles, Twitter, Linkedin, Instagram } from 'lucide-react';

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
    <article className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
        <BookOpen className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
      {post.excerpt && (
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
      )}
      {post.date && (
        <p className="text-sm text-gray-400 mb-4">{post.date}</p>
      )}
      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center text-blue-500 hover:text-blue-800 font-semibold transition-colors"
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
        <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
          <div className="section-container">
            <div className="flex justify-between items-center h-16 md:h-20">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ArabeImportance</span>
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Retour a l'accueil
              </Link>
            </div>
          </div>
        </header>

        <main>
          <div className="main-container">
            <div className="section-container py-20">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-900">Blog</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Articles et conseils
                </h1>
                <p className="text-xl text-gray-500 max-w-3xl mx-auto">
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

          <footer className="bg-gradient-to-b from-blue-50 to-blue-100 mt-20 rounded-t-3xl relative overflow-hidden">
            <div className="section-container py-16 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                  <Link href="/" className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-blue-500">ArabeImportance</span>
                  </Link>
                  <p className="text-gray-600 max-w-sm">
                    Pour toute question ou demande d'information, n'hesitez pas a nous contacter.
                  </p>
                </div>

                <div>
                  <h4 className="text-blue-500 font-bold uppercase tracking-wider text-sm mb-4">Social</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-center gap-2 text-blue-500 hover:text-blue-800 font-medium">
                        <Twitter className="w-5 h-5" />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-blue-500 hover:text-blue-800 font-medium">
                        <Linkedin className="w-5 h-5" />
                        Linkedin
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/arabeimportance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-800 font-medium">
                        <Instagram className="w-5 h-5" />
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
              <div className="flex items-center gap-4 text-blue-200/40 mb-[-20px]">
                <div className="w-20 h-20 bg-blue-200/30 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-12 h-12" />
                </div>
                <span className="text-[120px] md:text-[180px] font-bold leading-none">ArabeImportance</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
