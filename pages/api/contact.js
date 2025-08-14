export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, email, message } = req.body || {};
  // TODO: forward to email service (SendGrid, Mailgun), or store in DB
  console.log('Contact form:', { name, email, message });
  // return success for now
  return res.status(200).json({ ok: true });
}
