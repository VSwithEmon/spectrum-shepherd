// Site-wide destinations and accounts. Change them here, not in components.
export const site = {
  /**
   * Direct calendar booking (Calendly, HubSpot meetings…). When set, every "Book a Demo" button
   * opens this calendar in a pop-up; when empty, the pop-up shows the short demo request form.
   */
  bookingUrl: '',
  /** Where "Start your 45-day free trial" / "Sign up free" go until the app's sign-up link is confirmed. */
  trial: '/teachers#trial',
  demoPage: '/book-a-demo',
  /** Social accounts shown in the footer (as linked from spectrumshepherd.com). Empty hides the icon. */
  social: {
    instagram: 'https://www.instagram.com/spectrumshepherd/',
    facebook: 'https://www.facebook.com/spectrumshepherd',
    linkedin: 'https://www.linkedin.com/company/spectrum-shepherd/',
  },
};
