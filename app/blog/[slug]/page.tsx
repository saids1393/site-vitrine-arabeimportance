import { Metadata } from 'next';
import { getPostBySlug, getAllBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return {
    title: `${post.title} | Arabe Importance`,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://arabeimportance.fr/blog/${slug}`,
      images: [
        {
          url: post.image || 'https://arabeimportance.fr/og-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://arabeimportance.fr/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image || 'https://arabeimportance.fr/og-image.jpg',
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Arabe Importance',
      logo: {
        '@type': 'ImageObject',
        url: 'https://arabeimportance.fr/icon-512.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://arabeimportance.fr/blog/${slug}`,
    },
    wordCount: post.wordCount,
    keywords: post.keywords,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-20">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{post.author}</span>
            <span>•</span>
            <span>{Math.ceil(post.wordCount / 200)} min de lecture</span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none mb-16">
          <style>{`
            .prose h2 {
              font-size: 2em;
              font-weight: bold;
              margin-top: 1.5em;
              margin-bottom: 0.75em;
              color: white;
            }
            .prose h3 {
              font-size: 1.5em;
              font-weight: bold;
              margin-top: 1.25em;
              margin-bottom: 0.5em;
              color: #e2e8f0;
            }
            .prose p {
              line-height: 1.8;
              margin-bottom: 1.25em;
              color: #cbd5e1;
            }
            .prose li {
              margin-bottom: 0.5em;
              color: #cbd5e1;
            }
            .prose strong {
              color: #f1f5f9;
            }
            .prose ul, .prose ol {
              margin-left: 1.5em;
              margin-bottom: 1.25em;
            }
            .prose code {
              background-color: #1e293b;
              padding: 0.2em 0.4em;
              border-radius: 0.3em;
              font-family: monospace;
            }
            .prose blockquote {
              border-left: 4px solid #ec4899;
              padding-left: 1em;
              font-style: italic;
              color: #a1a1aa;
            }
          `}</style>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prêt à apprendre l'arabe avec la méthode ERPR ?
          </h3>
          <p className="text-slate-300 mb-6">
            Rejoignez des apprenants qui progressent avec notre plateforme complète. +500 audios, vidéos explicatives et accompagnement personnalisé.
          </p>
          
            <a href="https://methode-erpr-by-arabeimportance.vercel.app/checkout"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-pink-600 hover:to-blue-600 transition-all inline-block"
          >
            Commencer maintenant - 75,65€ accès à vie
          </a>
  </div>
  
      </article>
    </>
  );
}   