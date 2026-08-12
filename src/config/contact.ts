/**
 * ═══════════════════════════════════════════════════════════════
 *  ISLORA CONTACT DETAILS — edit these values to update the site
 * ═══════════════════════════════════════════════════════════════
 *  whatsappNumber : digits only, country code first (Lebanon = 961)
 *  displayPhone   : how the number is shown on the page
 *  instagram      : your Instagram handle (without @)
 *  address        : street address shown in the "Visit us" section
 */
export const CONTACT = {
  whatsappNumber: '96176606783',
  displayPhone: '+961 76 606 783',
  instagram: 'islora.earlylearning', // TODO: replace with your Instagram handle
  addressEn: 'Tripoli, North Lebanon', // TODO: add street address
  addressAr: 'طرابلس، شمال لبنان', // TODO: أضيفوا عنوان الشارع
}

export const whatsappLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
