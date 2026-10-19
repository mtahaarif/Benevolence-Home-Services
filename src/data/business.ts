/**
 * The business itself: name, address, phone and the facts Google matches
 * against the Google Business Profile.
 *
 * Every page, the footer, the contact page and all structured data read these
 * values from here. Local rankings depend on the name, address and phone being
 * identical everywhere they appear (site, GBP, directories), so change them
 * here and nowhere else.
 *
 * Fields marked OWNER need confirming against the live Google Business
 * Profile. Optional ones stay empty/null until then, and anything empty is
 * left out of the page and the schema rather than rendered blank.
 */
export const business = {
  name: "Benevolence Home Services",
  legalName: "Benevolence Home Services and Staffing Agency",

  phoneDisplay: "708-304-0296",
  phoneHref: "tel:+17083040296",
  phoneE164: "+1-708-304-0296",
  email: "info@benevolencehomeservices.com",
  // OWNER: the contact page has always listed the fax as the same number as
  // the phone. Confirm it, or set this to "" to remove the fax line.
  fax: "708-304-0296",

  // OWNER: must match the Google Business Profile character-for-character.
  address: {
    street: "One Westbrook Corporate Center, Suite 300",
    locality: "Westchester",
    region: "IL",
    postalCode: "60154",
    country: "US",
  },

  // OWNER: confirm from GBP; omitted from schema while null. The old schema
  // value (-87.8856) and the contact-page map (-87.9256) disagree, so neither
  // is trusted here.
  geo: null as { latitude: number; longitude: number } | null,

  // OWNER: the Google Maps listing URL (Share → Copy link on the GBP listing).
  gbpUrl: "",

  // OWNER: IDPH Home Services Agency license number.
  licenseNumber: "",

  servedCounties: ["Cook", "DuPage", "Lake", "Will"],

  // OWNER: must match the hours on the Google Business Profile.
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },

  logo: "/footer-logo.png",
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/benevolence-home-services" },
  { label: "Facebook", href: "https://www.facebook.com/people/Benevolence-Care-Page/61567035436101/" },
  { label: "Instagram", href: "https://www.instagram.com/benevolencehsvc/" },
  { label: "YouTube", href: "https://www.youtube.com/@BenevolenceHomeServicesStaff" },
  { label: "TikTok", href: "https://www.tiktok.com/@benevolencehomeservices" },
] as const;

/** Shown in the footer and on the contact page only when a license number is set. */
export const licenseText = `Licensed by the Illinois Department of Public Health · License #${business.licenseNumber}`;

/** "One Westbrook Corporate Center, Suite 300, Westchester, IL 60154" */
export const fullAddress = `${business.address.street}, ${business.address.locality}, ${business.address.region} ${business.address.postalCode}`;
