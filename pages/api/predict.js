export default async function handler(req, res) {
  // Example: accepts { imageUrl } in JSON body
  // Replace this stub with actual model inference code or call to your model server.
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { imageUrl } = req.body || {};
    // TODO: call real model here
    // For now return a fake prediction
    const fake = {
      label: 'larva',
      confidence: 0.93,
      probs: { egg: 0.02, larva: 0.93, pupa: 0.03, adult: 0.02 }
    };
    return res.status(200).json({ success: true, prediction: fake });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}
