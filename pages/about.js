import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About">
      <section style={{marginTop:18}}>
        <h3 style={{margin:'12px 0 8px'}}>About Me</h3>
        <div className="side-card">
          <h3 style={{margin:'0 0 8px'}}>Quick bio</h3>
          <p style={{margin:0,color:'var(--muted)'}}>I build ML models and front-end experiences, focusing on reproducible research and deployable demos. I enjoy clean UI, end-to-end pipelines, and mentoring others.</p>
        </div>
      </section>
    </Layout>
  );
}