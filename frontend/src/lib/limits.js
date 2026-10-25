// Limite de mărime pentru fișierele încărcate. PDF-ul se citește pe bucăți, deci poate fi mare;
// PPTX se citește doar ca text (nu pozele), deci limita e și mai sus.
export const MAX_MB = { pptx: 500, pdf: 300 }

export function sizeError(file) {
  const kind = file.name.toLowerCase().endsWith('.pdf') ? 'pdf' : 'pptx'
  if (file.size <= MAX_MB[kind] * 1024 * 1024) return ''
  const mb = Math.round(file.size / 1048576)
  return kind === 'pdf'
    ? `PDF-ul are ${mb} MB, iar limita e ${MAX_MB.pdf} MB. Salvează cursul ca .pptx (merge până la ${MAX_MB.pptx} MB) sau comprimă PDF-ul.`
    : `Prezentarea are ${mb} MB, iar limita e ${MAX_MB.pptx} MB.`
}
