async function extrairTexto() {
  const input = document.getElementById('pdfInput');
  if (!input.files.length) {
    alert('Selecione um PDF primeiro!');
    return;
  }

  const file = input.files[0];
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();

  let textoExtraido = '';
  for (const page of pages) {
    textoExtraido += '[Conteúdo da página não acessível com PDFLib - exemplo demonstrativo]\n';
  }

  const blob = new Blob([textoExtraido], { type: 'text/plain;charset=utf-8' });
  saveAs(blob, 'saida.txt');
  document.getElementById('saida').textContent = '✅ Texto salvo como "saida.txt"';
}
