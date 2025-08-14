import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    const fd = new FormData(e.target);
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify({
      name: fd.get('name'), email: fd.get('email'), message: fd.get('message')
    }), headers: { 'Content-Type': 'application/json' }});
    if (res.ok) setStatus('Message sent — thank you!');
    else setStatus('Error sending message.');
  }

  return (
    <Layout title="Contact">
      <section style={{marginTop:18}}>
        <h3 style={{margin:'12px 0 8px'}}>Contact</h3>
        <div className="side-card">
          <form onSubmit={handleSubmit}>
            <label style={{display:'block',marginBottom:8}}>Name</label>
            <input name="name" required style={{width:'100%',padding:8,borderRadius:8,marginBottom:8}} />
            <label style={{display:'block',marginBottom:8}}>Email</label>
            <input name="email" type="email" required style={{width:'100%',padding:8,borderRadius:8,marginBottom:8}} />
            <label style={{display:'block',marginBottom:8}}>Message</label>
            <textarea name="message" required style={{width:'100%',padding:8,borderRadius:8,marginBottom:8}} rows={6} />
            <button type="submit" className="btn">Send</button>
            <div style={{marginTop:8,color:'var(--muted)'}}>{status}</div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
