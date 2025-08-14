import Link from 'next/link';

export default function Layout({ children, title = 'Rishi Prasad' }) {
  return (
    <div className="container">
      <header>
        <div className="brand">
          <div className="logo">RP</div>
          <div>
            <h1>{title}</h1>
            <div className="subtitle">ML Model Developer • Designer • AI Enthusiast</div>
          </div>
        </div>
        <nav>
          <Link className="btn" href="/">Home</Link>
          <Link className="btn" href="/models">Models</Link>
          <Link className="btn" href="/projects">Projects</Link>
          <Link className="btn" href="/about">About</Link>
          <Link className="btn" href="/contact">Contact</Link>
          <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </nav>
      </header>

      <main>{children}</main>

      <footer id="contact">
        <div style={{ marginBottom: 8 }}>Want to work together? Reach out — <a href="mailto:you@domain.com" style={{ color: '#fff' }}>you@domain.com</a></div>
        <div style={{ color: 'var(--muted)' }}>© {new Date().getFullYear()} Rishi Prasad • Built with Next.js • Deployed on Vercel</div>
      </footer>
    </div>
  );
}
