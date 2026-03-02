import { jsPDF } from 'jspdf';

export const generateCV = () => {
  const doc = new jsPDF();
  const primaryColor = '#00f2ff'; // Cyber Cyan
  const secondaryColor = '#141414'; // Neural Black
  const textColor = '#333333';
  const lightTextColor = '#666666';

  // Header
  doc.setFillColor(secondaryColor);
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor('#FFFFFF');
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('BERK KILINÇER', 15, 20);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('AI Engineer | LLM & Computer Vision Specialist', 15, 30);
  
  doc.setFontSize(10);
  doc.text('berkkilincer@gmail.com | Bursa / Karabük, Turkey', 15, 36);
  doc.text('linkedin.com/in/berk-kılınçer-61b784254', 140, 36);

  let y = 50;

  // Experience Section
  doc.setTextColor(secondaryColor);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('EXPERIENCE', 15, y);
  y += 2;
  doc.setDrawColor(primaryColor);
  doc.setLineWidth(0.5);
  doc.line(15, y, 45, y);
  y += 8;

  const experiences = [
    {
      company: 'Amazon',
      role: 'Intern AI Engineer (Fulfillment Technologies & Robotics)',
      period: 'Nov 2025 - Present',
      desc: 'Designing and training artificial neural networks for real-world robotics applications. Optimizing fulfillment processes through advanced AI models.'
    },
    {
      company: 'CA Engineering BV',
      role: 'Intern AI Engineer',
      period: 'Jan 2026 - Present',
      desc: 'Focusing on specialized LLMs for computer vision, data mining, and scalable AWS cloud algorithms.'
    },
    {
      company: 'NSK Rota Group',
      role: 'Software Engineering Intern',
      period: 'Aug 2024 - Oct 2024',
      desc: 'Worked on industrial automation software and internal data management systems. Developed Python-based tools for process optimization.'
    },
    {
      company: 'Etiya',
      role: 'QA Specialist',
      period: 'Previous',
      desc: 'Developed automated test scripts using Python/Selenium. Conducted performance testing with JMeter.'
    }
  ];

  experiences.forEach(exp => {
    doc.setTextColor(textColor);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`${exp.role} @ ${exp.company}`, 15, y);
    doc.setTextColor(lightTextColor);
    doc.setFontSize(9);
    doc.text(exp.period, 160, y);
    y += 5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const splitDesc = doc.splitTextToSize(exp.desc, 180);
    doc.text(splitDesc, 15, y);
    y += (splitDesc.length * 5) + 5;
  });

  // Skills Section
  doc.setTextColor(secondaryColor);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('TECHNICAL SKILLS', 15, y);
  y += 2;
  doc.line(15, y, 60, y);
  y += 8;

  doc.setTextColor(textColor);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Languages:', 15, y);
  doc.setFont('helvetica', 'normal');
  doc.text('Python (Advanced), C (Advanced), Java, C#, SQL, Apex, Rust', 45, y);
  y += 6;

  doc.setFont('helvetica', 'bold');
  doc.text('AI & ML:', 15, y);
  doc.setFont('helvetica', 'normal');
  doc.text('Neural Networks, Deep Learning, Computer Vision, NLP, PyTorch, TensorFlow', 45, y);
  y += 6;

  doc.setFont('helvetica', 'bold');
  doc.text('Tools:', 15, y);
  doc.setFont('helvetica', 'normal');
  doc.text('Selenium, JMeter, AWS, Postman, OpenCV, Scikit-learn, Pandas, NumPy', 45, y);
  y += 12;

  // Education & Certifications
  doc.setTextColor(secondaryColor);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('CERTIFICATIONS', 15, y);
  y += 2;
  doc.line(15, y, 55, y);
  y += 8;

  const certs = [
    'CS50’s Introduction to AI with Python (Harvard University)',
    'ML Engineer Associate (AWS)',
    'Neural Networks and Deep Learning (DeepLearning.AI)',
    'Make Agentic AI Work for You (IBM)',
    'Database Design & SQL (Oracle)'
  ];

  doc.setTextColor(textColor);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  certs.forEach(cert => {
    doc.text(`• ${cert}`, 15, y);
    y += 6;
  });

  // Projects
  y += 6;
  doc.setTextColor(secondaryColor);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('KEY PROJECTS', 15, y);
  y += 2;
  doc.line(15, y, 50, y);
  y += 8;

  const projects = [
    'Hybrid Stock Prediction System (TÜBİTAK 2209-A Research Project)',
    'Neuro-Evolution Traffic Sim (Rust & Bevy AI Research)',
    'Social Robot (AI-Driven Interaction)'
  ];

  doc.setTextColor(textColor);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  projects.forEach(proj => {
    doc.text(`• ${proj}`, 15, y);
    y += 6;
  });

  // Save the PDF
  doc.save('Berk_Kilincer_CV.pdf');
};
