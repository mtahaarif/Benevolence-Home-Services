export const brand = {
  name: "Benevolence Home Services and Staffing Agency",
  shortName: "Benevolence",
  tagline: "Homecare Solution Enterprises",
};


// Upgraded type to support opening links in new tabs
export type NavItem = {
  label: string;
  href: string;
  target?: "_blank" | "_self";
  subItems?: { 
    label: string; 
    href: string; 
    target?: "_blank" | "_self";
  }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { 
    label: "About Us", 
    href: "/about-us",
    subItems: [
      { label: "About Owner", href: "/about-owner" }
    ]
  },
  { 
    label: "Services", 
    href: "/services",
    subItems: [
      { label: "Personal Care", href: "/services/personal-care" },
      { label: "Companionship", href: "/services/companionship" },
      { label: "Meal Preparation & Nutrition", href: "/services/meal-preparation" },
      { label: "Light Housekeeping", href: "/services/light-housekeeping" },
      { label: "Medication Reminders", href: "/services/medication-reminders" },
      { label: "Respite Care", href: "/services/respite-care" },
      { label: "Transportation Services", href: "/services/transportation" },
      { label: "Specialized Support", href: "/services/specialized-support" },
    ]
  },
    { 
    label: "Areas We Serve", 
    href: "/areas-we-serve",
  },
  { 
    label: "Careers", 
    href: "/careers",
    subItems: [
      // ADDED: target: "_blank" to open in a new tab
      { label: "Pre-Hire Form", href: "https://www.jotform.com/app/223625216444452", target: "_blank" }
    ]
  },
  { label: "Resources", href: "/resources" },
  { 
    label: "Payment", 
    href: "https://www.paypal.com/ncp/payment/H8ETWPE4HU59A",
    target: "_blank" // ADDED: target: "_blank" to open PayPal in a new tab
  },
  { 
    label: "Contact Us", 
    href: "/contact-us",
    subItems: [
      { label: "Blog", href: "/blog" }
    ]
  },
];

export const contactDetails = {
  phone: "708-304-0296",
  phoneHref: "tel:7083040296",
  email: "info@benevolencehomeservices.com",
  emailHref: "mailto:info@benevolencehomeservices.com",
  address: "One Westbrook Corporate Center, Suite 300, Westchester, IL 60154",
  serviceAreas: "Cook, DuPage, Lake and Will counties",
  calendly: "https://calendly.com/info-27777",
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/benevolence-home-services" },
  { label: "Facebook", href: "https://www.facebook.com/people/Benevolence-Care-Page/61567035436101/" },
  { label: "Instagram", href: "https://www.instagram.com/benevolencehsvc/" },
  { label: "YouTube", href: "https://www.youtube.com/@BenevolenceHomeServicesStaff" },
  { label: "TikTok", href: "https://www.tiktok.com/@benevolencehomeservices" },
] as const;

export const homeHighlights = [
  {
    title: "Companionship",
    body: "We provide companionship to enrich lives and combat loneliness.",
  },
  {

    title: "Personal Care",
    body: "Provides compassionate assistance with daily living needs.",
  },
  {
    title: "Medication Reminders",
    body: "Help individuals manage their prescriptions and ensure adherence to their medication schedules.",
  },
    {
    title: "View More Services",
    body: "Discover comprehensive care solutions for your needs.",
  },
] as const;

export const nurseLedBenefits = [
  "Care is guided by a Registered Nurse with clinical judgment",
  "Decisions are made with wisdom, discernment, and experience",
  "Care plans are thoughtfully overseen and adjusted as needs change",
  "Early signs of decline are recognized and addressed",
  "Caregivers are supported, trained, and guided with accountability",
  "Families receive clarity, reassurance, and peace of mind",
  "Care is delivered with dignity, compassion, and purpose",
] as const;

export const traditionalCare = [
  "Care is typically managed by schedulers or non-clinical staff",
  "Decisions are often reactive or task-focused",
  "Care plans may remain static unless a crisis occurs",
  "Changes may go unnoticed until hospitalization",
  "Caregivers often work with limited oversight",
  "Families may feel uncertainty or confusion",
  "Care is primarily task-based",
] as const;

export const homeCareServices = [
  {
    title: "Personal Care",
    body: "Experience mobility support, including safe transfers and positioning for enhanced ease.",
  },
  {
    title: "Companionship",
    body: "Build connections through engaging conversations, shared activities, and emotional encouragement.",
  },
  {
    title: "Meal Preparation and Nutrition",
    body: "Enjoy nutritious meals thoughtfully prepared to meet dietary preferences and requirements.",
  },
  {
    title: "Light Housekeeping",
    body: "Reduce clutter and ensure spaces remain functional, welcoming, and well-maintained.",
  },
  {
    title: "Medication Reminders",
    body: "Stay on track with consistent reminders to take medications as directed by healthcare providers.",
  },
  {
    title: "Respite Care",
    body: "Allow family caregivers to recharge while professional care continues seamlessly in their absence.",
  },
  {
    title: "Transportation Services",
    body: "Travel seamlessly with organized assistance for both short trips and planned outings.",
  },
  {
    title: "Specialized Support",
    body: "Address care requirements for specific health conditions with attention and expertise.",
  },
] as const;

export const carePillars = [
  {
    title: "Faith in action through care",
    body: "We care with compassion, dignity, and service as a reflection of our values.",
  },
  {
    title: "Helping families navigate care options",
    body: "We simplify decisions with transparent guidance and practical next steps.",
  },
  {
    title: "Serving seniors with dignity at home",
    body: "Every visit is centered on comfort, respect, and consistent support.",
  },
] as const;

export const careersPerks = [
  "Supportive, nurse-led leadership",
  "Consistent, client-focused care assignments",
  "Ongoing guidance and professional support",
  "A culture rooted in compassion, respect, and integrity",
] as const;

export const resources = [
  { label: "Home Care Association of America", href: "https://www.hcaoa.org/" },
  { label: "American Public Health Association", href: "https://www.apha.org/" },
  { label: "National Association for Health Care Recruitment", href: "https://www.nahcr.com/" },
  { label: "U.S. Department of Health & Human Services", href: "https://www.hhs.gov/" },
] as const;

export const privacyHighlights = [
  "Contact details, professional information, application information, and service-related information",
  "Technical data such as device information, website usage, location data, and cookies",
  "Form submissions, newsletter preferences, uploaded files, and correspondence",
] as const;
