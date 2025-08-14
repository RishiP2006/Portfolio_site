import { useState, useEffect } from 'react';

export default function ModelCard({ model }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // animate the accuracy fill after mount
    const el = document.querySelector(`#acc-${model.id}`);
    if (el) {
      const target = parseFloat(el.dataset.target) || 0;
      setTimeout(() => { el.style.width = `${Math.min(target,100)}%`; }, 120);
    }
  }, [model.id]);

  return (
    <>
      <div className="model-card" tabIndex="0"
           onMouseEnter={() => {
             const el = document.querySelector(`#acc-${model.id}`);
             if (el) { el.style.width = '0%'; setTimeout(()=> el.style.width = `${Math.min(parseFloat(el.dataset.target),100)}%`, 80); }
           }}
           onClick={() => setOpen(true)}>
        <div className="card-actions">
          <a className="ghost-btn" href={model.github} target="_blank" rel="noreferrer">Open GitHub</a>
        </div>
        <div className="top">
          <div className="model-badge">{model.badge}</div>
          <div className="model-meta">
            <h4>{model.name}</h4>
            <p>{model.desc}</p>
          </div>
        </div>
        <div className="preview">
          <img alt={model.name} src={model.images?.[0]} onError={(e)=> e.currentTarget.src = '/fallback.svg'} />
        </div>
        <div className="acc-row">
          <div className="acc-label"><span>Accuracy</span><span className="acc-value">{model.acc}%</span></div>
          <div className="acc-bar"><div id={`acc-${model.id}`} className="acc-fill" style={{width:0}} data-target={model.acc}></div></div>
        </div>
      </div>

      {open && (
        <div className="modal-backdrop" style={{display:'flex'}} role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e)=> e.stopPropagation()}>
            <div className="close-x" onClick={() => setOpen(false)}>&times;</div>
            <div className="modal-grid">
              <div>
                <div className="carousel">
                  <img src={model.images?.[0] || '/fallback.svg'} alt={`${model.name} sample`} onError={(e)=> e.currentTarget.src='/fallback.svg'} />
                </div>
                <div style={{marginTop:12}}>
                  <h3>{model.name}</h3>
                  <p>{model.desc}</p>
                </div>
              </div>
              <div className="side">
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <div style={{fontWeight:600}}>Model Details</div>
                  <div style={{fontSize:13,color:'var(--muted)'}}>{model.acc}%</div>
                </div>
                <div className="metrics" style={{marginTop:12}}>
                  <div className="metric">F1: {model.f1 || '—'}</div>
                  <div className="metric">Precision: {model.precision || '—'}</div>
                  <div className="metric">Recall: {model.recall || '—'}</div>
                  <div className="metric">Params: {model.params || '—'}</div>
                </div>
                <div style={{marginTop:12,display:'flex',gap:8}}>
                  <a className="ghost-btn" href={model.github} target="_blank" rel="noreferrer">Open GitHub</a>
                  <a className="ghost-btn" href={model.demo || model.github} target="_blank" rel="noreferrer">Open Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
