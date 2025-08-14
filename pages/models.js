import Layout from '../components/Layout';
import ModelCard from '../components/ModelCard';

export default function Models() {
  const models = [
    {
      id: 'resnet50',
      name: 'ResNet50 Classifier',
      badge: 'R50',
      desc: 'Fine-tuned ResNet50 for Drosophila life-stage classification.',
      acc: 92,
      f1: '0.91',
      precision: '0.92',
      recall: '0.90',
      params: '25M',
      github: 'https://github.com/RishiP2006/Drosophila_stages_models',
      demo: 'https://drosophila-stages-identification-app.streamlit.app',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/3/3c/Drosophila_melanogaster_01.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/1/12/Drosophila_melanogaster_-_male_%282%29.jpg'
      ]
    },
    {
      id: 'inceptionv3',
      name: 'InceptionV3 Fine-tune',
      badge: 'IV3',
      desc: 'Two-stage train: frozen base then fine-tune last layers.',
      acc: 90.5,
      f1: '0.90',
      precision: '0.91',
      recall: '0.89',
      params: '24M',
      github: 'https://github.com/RishiP2006/Drosophila_stages_models',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/7/7e/Drosophila_larva_%28Drosophila_melanogaster%29.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/86/Drosophila_pupa.jpg'
      ]
    },
    {
      id: 'lightcnn',
      name: 'Light CNN (Fast)',
      badge: 'LCN',
      desc: 'A lightweight CNN architecture for fast inference on edge devices.',
      acc: 88,
      f1: '0.87',
      precision: '0.88',
      recall: '0.86',
      params: '2.1M',
      github: 'https://github.com/RishiP2006/Drosophila_stages_models',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/5/55/Light_microscope.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/4/41/Compound_microscope_eyepiece.jpg'
      ]
    },
  ];

  return (
    <Layout title="Models">
      <section id="models" style={{marginTop:18}}>
        <h3 style={{margin:'12px 0 8px'}}>Models & Demos</h3>
        <div className="models-grid">
          {models.map(m => <ModelCard key={m.id} model={m} />)}

          <div className="project-card" style={{gridColumn:'1 / -1', marginTop:6}}>
            <a href="https://drosophila-stages-identification-app.streamlit.app" target="_blank" rel="noreferrer" style={{display:'block',color:'inherit',textDecoration:'none'}}>
              <div className="project-preview" style={{height:300}}>
                <iframe src="https://drosophila-stages-identification-app.streamlit.app" loading="lazy"></iframe>
              </div>
              <div className="project-info">
                <h3 style={{margin:'10px 0 4px'}}>Drosophila Stages Identification App</h3>
                <p>Live demo — AI tool to identify Drosophila life stages. Click to open full app.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
