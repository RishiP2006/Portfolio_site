import Layout from '../components/Layout';
import Link from 'next/link';

export default function Projects() {
  const studies = [
    { id: 'drosophila', title: 'Drosophila Life-stage Classifier', blurb: 'Full case study on dataset, model, and deployment.', href: '/projects/drosophila' },
    // add more studies here
  ];

  return (
    <Layout title="Projects">
      <section style={{marginTop:18}}>
        <h3 style={{margin:'12px 0 8px'}}>Projects</h3>
        <div style={{display:'grid', gap:12}}>
          {studies.map(s => (
            <div key={s.id} className="project">
              <div className="meta">
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
              </div>
              <Link href={s.href}><a style={{color:'var(--muted)', fontSize:13}}>Read</a></Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
