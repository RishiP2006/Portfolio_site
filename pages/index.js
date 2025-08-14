import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Rishi Prasad">
      <div>
        <div className="hero">
          <div className="intro">
            <div className="avatar" aria-hidden="true"></div>
            <div style={{flex:1}}>
              <div className="eyebrow">Hi, I am</div>
              <h2 style={{margin:0}}>Rishi Prasad — building delightful apps</h2>
              <p className="lead">I design and develop ML-powered apps with a focus on clean interfaces, fast code, and tiny animations. Currently exploring ML + product design.</p>
              <div className="tags">
                <div className="tag">C++</div>
                <div className="tag">Python</div>
                <div className="tag">AI</div>
                <div className="tag">Open Source</div>
              </div>
            </div>
          </div>

          <section id="models" style={{marginTop:18}}>
            <h3 style={{margin:'12px 0 8px'}}>Featured Demo</h3>
            <div className="projects-grid">
              <div className="project">
                <div className="meta">
                  <h3>Drosophila Stages Identification App</h3>
                  <p>Live demo — AI tool to identify Drosophila life stages.</p>
                </div>
                <a href="https://drosophila-stages-identification-app.streamlit.app" target="_blank" rel="noreferrer" style={{color:'var(--muted)', fontSize:13}}>Open</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
