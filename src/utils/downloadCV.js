export const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/CV-LeonardoSantos.pdf';
  link.download = 'CV-LeonardoSantos.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
