import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
};

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/30 rounded-2xl p-6 hover:border-pink-500/60 transition-all transform hover:-translate-y-2 h-full cursor-pointer block">
        <div className="flex flex-col h-full">
          <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-slate-400 text-sm mb-4">
            {new Date(post.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className="text-slate-300 text-sm flex-grow">
            {post.excerpt}
          </p>
          <div className="mt-4 pt-4 border-t border-pink-500/20">
            <span className="text-pink-400 text-sm font-semibold hover:text-pink-300">
              Lire l'article →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}