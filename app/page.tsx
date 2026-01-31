import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">@skillzmarket/sdk</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl">
        Discover and call paid AI skills with automatic x402 payments.
        Create and monetize your own skills with zero crypto knowledge.
      </p>
      <div className="flex gap-4">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Get Started
        </Link>
        <a
          href="https://github.com/skillzmarket/sdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}
