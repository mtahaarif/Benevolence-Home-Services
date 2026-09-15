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

/**
 * Footer "Quick Links".
 *
 * These deliberately do NOT reuse `navItems`. The header needs short labels to
 * fit the bar, but reusing them in the footer meant every page shipped a dozen
 * single-word internal anchors ("Home", "Services", "Careers", "Blog"…) and
 * gave pages like /careers and /about-owner an identical anchor on all 83
 * incoming internal links. Descriptive, distinct anchor text here tells search
 * engines what each destination is actually about.
 */
export type FooterLink = {
  label: string;
  href: string;
  target?: "_blank" | "_self";
};

export const footerLinks: FooterLink[] = [
  { label: "Home Care in Westchester", href: "/" },
  { label: "About Our Agency", href: "/about-us" },
  { label: "Meet Our Founder", href: "/about-owner" },
  { label: "In-Home Care Services", href: "/services" },
  { label: "Chicagoland Service Areas", href: "/areas-we-serve" },
  { label: "Caregiver Job Openings", href: "/careers" },
  { label: "Senior Care Resources", href: "/resources" },
  { label: "Home Care Blog", href: "/blog" },
  { label: "Make a Secure Payment", href: "https://www.paypal.com/ncp/payment/H8ETWPE4HU59A", target: "_blank" },
  { label: "Contact Our Care Team", href: "/contact-us" },
];

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

/**
 * Priority local markets.
 *
 * The business ranks first in Westchester (where the office is) but nowhere
 * else, and the town pages were reachable only from /areas-we-serve — one
 * internal link each, which tells Google they are low-priority leaves. These
 * are the markets worth spending internal link equity on, surfaced from the
 * homepage and the footer so every page passes authority into them.
 *
 * Anchors are full descriptive phrases rather than bare town names so each
 * link states what the destination is about.
 */
export const priorityAreas = [
  { city: "Westchester", slug: "westchester-il", note: "Our headquarters" },
  { city: "Oak Brook", slug: "oak-brook-il", note: "DuPage County" },
  { city: "Elmhurst", slug: "elmhurst-il", note: "DuPage County" },
  { city: "La Grange", slug: "la-grange-il", note: "Cook County" },
  { city: "Western Springs", slug: "western-springs-il", note: "Cook County" },
  { city: "Oak Park", slug: "oak-park-il", note: "Cook County" },
  { city: "River Forest", slug: "river-forest-il", note: "Cook County" },
  { city: "Downers Grove", slug: "downers-grove-il", note: "DuPage County" },
  { city: "Lombard", slug: "lombard-il", note: "DuPage County" },
] as const;

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
    href: "/services/companionship",
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

// Add this to the bottom of src/data/site-content.ts

export interface CityData {
  name: string;
  county: string;
  slug: string;
  zipCodes: string;
  hospitals: string[];
  landmarks: string[];
  desc: string;
}

export const cityDirectory: Record<string, CityData> = {
  // Cook County
  "westchester-il": {
    name: "Westchester",
    county: "Cook County",
    slug: "westchester-il",
    zipCodes: "60154",
    hospitals: ["Loyola University Medical Center", "AdventHealth La Grange"],
    landmarks: ["Westchester Woods", "Westbrook Corporate Center"],
    desc: "As our central headquarters base, Benevolence Home Services provides premier round-the-clock nurse-led personal care, medication management, and specialized senior support for Westchester families."
  },
  "oak-park-il": {
    name: "Oak Park",
    county: "Cook County",
    slug: "oak-park-il",
    zipCodes: "60301, 60302, 60304",
    hospitals: ["Rush Oak Park Hospital", "West Suburban Medical Center"],
    landmarks: ["Frank Lloyd Wright Home and Studio", "Oak Park Conservatory"],
    desc: "Compassionate, reliable in-home elderly care, companion services, and safe post-hospital recovery support tailored to seniors and historic homes in Oak Park."
  },
  "river-forest-il": {
    name: "River Forest",
    county: "Cook County",
    slug: "river-forest-il",
    zipCodes: "60305",
    hospitals: ["Rush Oak Park Hospital", "Gottlieb Memorial Hospital"],
    landmarks: ["Dominican University", "Thatcher Woods"],
    desc: "Concierge-level private duty personal assistance, daily routine care, and dedicated caregiver respite relief for River Forest seniors."
  },
  "la-grange-il": {
    name: "La Grange",
    county: "Cook County",
    slug: "la-grange-il",
    zipCodes: "60525",
    hospitals: ["UChicago Medicine AdventHealth La Grange"],
    landmarks: ["Historic Downtown La Grange", "Waiola Park"],
    desc: "Compassionate dementia support, mobility accompaniment, and tailored personal care services delivered directly to homes across La Grange."
  },
  "western-springs-il": {
    name: "Western Springs",
    county: "Cook County",
    slug: "western-springs-il",
    zipCodes: "60558",
    hospitals: ["UChicago Medicine AdventHealth La Grange", "AdventHealth Hinsdale"],
    landmarks: ["Western Springs Water Tower", "Spring Rock Park"],
    desc: "Attentive senior personal care, medication reminders, and customized companion models keeping Western Springs older adults thriving at home."
  },
  "orland-park-il": {
    name: "Orland Park",
    county: "Cook County",
    slug: "orland-park-il",
    zipCodes: "60462, 60467",
    hospitals: ["Northwestern Medicine Palos Hospital"],
    landmarks: ["Centennial Park", "Orland Square"],
    desc: "Trustworthy companion care, personalized memory support, and flexible daily assistance for seniors throughout Orland Park."
  },
  "palos-park-il": {
    name: "Palos Park",
    county: "Cook County",
    slug: "palos-park-il",
    zipCodes: "60464",
    hospitals: ["Palos Community Hospital"],
    landmarks: ["Swallow Cliff Woods", "The Center in Palos Park"],
    desc: "Gentle mobility guidance, private duty care plans, and daily routine assistance for Palos Park residents."
  },
  "palos-heights-il": {
    name: "Palos Heights",
    county: "Cook County",
    slug: "palos-heights-il",
    zipCodes: "60463",
    hospitals: ["Northwestern Medicine Palos Hospital"],
    landmarks: ["Lake Katherine Nature Center & Botanic Gardens"],
    desc: "Reliable post-hospital discharge care, bathing support, and friendly companion care across Palos Heights."
  },
  "northbrook-il": {
    name: "Northbrook",
    county: "Cook County",
    slug: "northbrook-il",
    zipCodes: "60062",
    hospitals: ["NorthShore Glenbrook Hospital"],
    landmarks: ["Northbrook Court", "Techny Prairie Park"],
    desc: "Structured cognitive wellness support, homemaker care, and light housekeeping designed for Northbrook seniors."
  },
  "glenview-il": {
    name: "Glenview",
    county: "Cook County",
    slug: "glenview-il",
    zipCodes: "60025, 60026",
    hospitals: ["Glenbrook Hospital"],
    landmarks: ["The Glen Town Center", "Wagner Farm"],
    desc: "Attentive personal care, routine medication reminders, and family caregiver respite throughout Glenview."
  },
  "wilmette-il": {
    name: "Wilmette",
    county: "Cook County",
    slug: "wilmette-il",
    zipCodes: "60091",
    hospitals: ["NorthShore Evanston Hospital", "Skokie Hospital"],
    landmarks: ["Bahá'í House of Worship", "Gillson Park"],
    desc: "Discreet in-home elder care, mobility guidance, and personalized meal support for Wilmette families."
  },
  "hillside-il": {
    name: "Hillside",
    county: "Cook County",
    slug: "hillside-il",
    zipCodes: "60162",
    hospitals: ["Loyola University Medical Center", "Edward Hines Jr. VA Hospital"],
    landmarks: ["Mount Carmel Cemetery", "Hillside Town Center"],
    desc: "Minutes from our Westchester headquarters, Hillside families receive fast-response nurse-led personal care, companionship, and post-hospital recovery support."
  },
  "chicago-il": {
    name: "Chicago",
    county: "Cook County",
    slug: "chicago-il",
    zipCodes: "Select Neighborhoods",
    hospitals: ["Northwestern Memorial Hospital", "Rush University Medical Center"],
    landmarks: ["Downtown Chicago", "Millennium Park"],
    desc: "Comprehensive home care coverage across Chicago neighborhoods, focusing on safe, independent urban living and specialized senior support."
  },

  // DuPage County
  "oak-brook-il": {
    name: "Oak Brook",
    county: "DuPage County",
    slug: "oak-brook-il",
    zipCodes: "60523",
    hospitals: ["AdventHealth Hinsdale Hospital", "Advocate Good Samaritan Hospital"],
    landmarks: ["Oakbrook Center", "Fullersburg Woods"],
    desc: "Private-duty home care, concierge personal support, and 24-hour caregiver coverage for seniors and families residing in Oak Brook."
  },
  "elmhurst-il": {
    name: "Elmhurst",
    county: "DuPage County",
    slug: "elmhurst-il",
    zipCodes: "60126",
    hospitals: ["Elmhurst Hospital - Edward-Elmhurst Health"],
    landmarks: ["Wilder Park Conservatory", "Downtown Elmhurst"],
    desc: "Dedicated homemaker services, light housekeeping, and nutritious meal preparation tailored to Elmhurst families."
  },
  "glen-ellyn-il": {
    name: "Glen Ellyn",
    county: "DuPage County",
    slug: "glen-ellyn-il",
    zipCodes: "60137",
    hospitals: ["Northwestern Medicine Central DuPage Hospital"],
    landmarks: ["Lake Ellyn Park", "Prairie Path"],
    desc: "Compassionate respite relief for devoted family caregivers, paired with engaging companionship across Glen Ellyn."
  },
  "wheaton-il": {
    name: "Wheaton",
    county: "DuPage County",
    slug: "wheaton-il",
    zipCodes: "60187, 60189",
    hospitals: ["Northwestern Medicine Central DuPage Hospital"],
    landmarks: ["Cantigny Park", "Downtown Wheaton"],
    desc: "Holistic senior wellness, personal hygiene assistance, and dedicated respite care options for Wheaton residents."
  },
  "downers-grove-il": {
    name: "Downers Grove",
    county: "DuPage County",
    slug: "downers-grove-il",
    zipCodes: "60515, 60516",
    hospitals: ["Advocate Good Samaritan Hospital"],
    landmarks: ["Tivoli Theatre", "Main Street Station"],
    desc: "Flexible hourly home care, overnight monitoring, and reliable medication prompting throughout Downers Grove."
  },
  "naperville-il": {
    name: "Naperville",
    county: "DuPage County",
    slug: "naperville-il",
    zipCodes: "60540, 60563, 60564",
    hospitals: ["Edward Hospital - Naperville"],
    landmarks: ["Naperville Riverwalk", "Centennial Beach"],
    desc: "Comprehensive senior home care tailored to Naperville residents, including hourly non-medical support and medical transport accompaniment."
  },
  "lombard-il": {
    name: "Lombard",
    county: "DuPage County",
    slug: "lombard-il",
    zipCodes: "60148",
    hospitals: ["Advocate Good Samaritan Hospital", "Elmhurst Hospital"],
    landmarks: ["Lilacia Park", "Yorktown Center"],
    desc: "Trustworthy companion care, daily routine assistance, and fall prevention services for Lombard seniors."
  },
  "clarendon-hills-il": {
    name: "Clarendon Hills",
    county: "DuPage County",
    slug: "clarendon-hills-il",
    zipCodes: "60514",
    hospitals: ["AdventHealth Hinsdale Hospital"],
    landmarks: ["Prospect Park", "Downtown Clarendon Hills"],
    desc: "Personalized mobility support, fall prevention guidance, and trusted hourly senior care in Clarendon Hills."
  },
  "darien-il": {
    name: "Darien",
    county: "DuPage County",
    slug: "darien-il",
    zipCodes: "60561",
    hospitals: ["AdventHealth Hinsdale Hospital"],
    landmarks: ["Waterfall Glen Forest Preserve"],
    desc: "Dependable personal hygiene care, routine comfort checks, and homemaker assistance for Darien older adults."
  },
  "willowbrook-il": {
    name: "Willowbrook",
    county: "DuPage County",
    slug: "willowbrook-il",
    zipCodes: "60527",
    hospitals: ["AdventHealth Hinsdale Hospital", "AdventHealth La Grange"],
    landmarks: ["Willowbrook Town Center", "Community Park"],
    desc: "Dignified routine care, meal preparation, and private duty caregiving solutions in Willowbrook."
  },
  "lisle-il": {
    name: "Lisle",
    county: "DuPage County",
    slug: "lisle-il",
    zipCodes: "60532",
    hospitals: ["Edward Hospital", "Advocate Good Samaritan Hospital"],
    landmarks: ["The Morton Arboretum", "Community Park"],
    desc: "Warm companion care, medication reminders, and flexible day-to-day senior living assistance across Lisle."
  },
  "hinsdale-il": {
    name: "Hinsdale",
    county: "DuPage County",
    slug: "hinsdale-il",
    zipCodes: "60521, 60522",
    hospitals: ["UChicago Medicine AdventHealth Hinsdale", "Advocate Good Samaritan Hospital"],
    landmarks: ["Katherine Legge Memorial Park", "Robert Crown Center"],
    desc: "Discreet private-duty caregiving, dementia support, and recovery care at home for Hinsdale seniors, coordinated closely with local hospital discharge teams."
  },
  "burr-ridge-il": {
    name: "Burr Ridge",
    county: "DuPage County",
    slug: "burr-ridge-il",
    zipCodes: "60527",
    hospitals: ["UChicago Medicine AdventHealth Hinsdale", "Advocate Good Samaritan Hospital"],
    landmarks: ["Burr Ridge Village Center", "Pleasant Dale Park"],
    desc: "Concierge-level in-home senior care, overnight caregiver coverage, and respite relief for Burr Ridge families across the 60527 corridor."
  },

  // Lake County
  "lake-forest-il": {
    name: "Lake Forest",
    county: "Lake County",
    slug: "lake-forest-il",
    zipCodes: "60045",
    hospitals: ["Northwestern Medicine Lake Forest Hospital"],
    landmarks: ["Market Square", "Lake Forest Beach"],
    desc: "Private duty assistance, dignified personal routines, and dedicated companion care in Lake Forest."
  },
  "highland-park-il": {
    name: "Highland Park",
    county: "Lake County",
    slug: "highland-park-il",
    zipCodes: "60035",
    hospitals: ["NorthShore Highland Park Hospital"],
    landmarks: ["Ravinia Festival", "Rosewood Beach"],
    desc: "Reliable meal prep, family respite relief, and customized living support for Highland Park seniors."
  },
  "deerfield-il": {
    name: "Deerfield",
    county: "Lake County",
    slug: "deerfield-il",
    zipCodes: "60015",
    hospitals: ["Highland Park Hospital", "Glenbrook Hospital"],
    landmarks: ["Deerfield Historic Village", "Briarwood"],
    desc: "Dependable medication reminders, active socialization, and routine personal care in Deerfield."
  },
  "libertyville-il": {
    name: "Libertyville",
    county: "Lake County",
    slug: "libertyville-il",
    zipCodes: "60048",
    hospitals: ["Advocate Condell Medical Center"],
    landmarks: ["Adler Memorial Park", "MainStreet Libertyville"],
    desc: "High-caliber respite relief, engaging companionship, and safe fall prevention configurations in Libertyville."
  },
  "vernon-hills-il": {
    name: "Vernon Hills",
    county: "Lake County",
    slug: "vernon-hills-il",
    zipCodes: "60061",
    hospitals: ["Advocate Condell Medical Center"],
    landmarks: ["Hawthorn Center", "Century Park"],
    desc: "Dedicated personal routines care, post-hospital transition plans, and memory care support in Vernon Hills."
  },
  "gurnee-il": {
    name: "Gurnee",
    county: "Lake County",
    slug: "gurnee-il",
    zipCodes: "60031",
    hospitals: ["Advocate Condell Medical Center", "Vista Medical Center East"],
    landmarks: ["Gurnee Mills", "Viking Park"],
    desc: "Trustworthy non-medical support, prescription prompts, and reliable companion systems for Gurnee seniors."
  },

  // Will County
  "frankfort-il": {
    name: "Frankfort",
    county: "Will County",
    slug: "frankfort-il",
    zipCodes: "60423",
    hospitals: ["Silver Cross Hospital", "Franciscan Health"],
    landmarks: ["Frankfort Historic District", "Old Plank Road Trail"],
    desc: "Dignified assistance with personal routines, bathing help, and dedicated respite relief in Frankfort."
  },
  "homer-glen-il": {
    name: "Homer Glen",
    county: "Will County",
    slug: "homer-glen-il",
    zipCodes: "60491",
    hospitals: ["Silver Cross Hospital"],
    landmarks: ["Heritage Park", "Messenger Woods"],
    desc: "Attentive companion care, mobility support, and family caregiver peace of mind in Homer Glen."
  },
  "plainfield-il": {
    name: "Plainfield",
    county: "Will County",
    slug: "plainfield-il",
    zipCodes: "60544, 60585",
    hospitals: ["Edward Hospital", "Ascension Saint Joseph - Joliet"],
    landmarks: ["Settlers' Park", "Downtown Plainfield"],
    desc: "Safe transitional assistance following clinical discharge, paired with warm daily companion care in Plainfield."
  },
  "bolingbrook-il": {
    name: "Bolingbrook",
    county: "Will County",
    slug: "bolingbrook-il",
    zipCodes: "60440, 60490",
    hospitals: ["UChicago Medicine AdventHealth Bolingbrook"],
    landmarks: ["The Promenade Bolingbrook", "Hidden Oaks Nature Center"],
    desc: "Dependable medication reminders, active social companionship, and routine comfort checks in Bolingbrook."
  },
  "joliet-il": {
    name: "Joliet",
    county: "Will County",
    slug: "joliet-il",
    zipCodes: "60431, 60432, 60435",
    hospitals: ["Ascension Saint Joseph - Joliet", "Silver Cross Hospital"],
    landmarks: ["Rialto Square Theatre", "Pilcher Park Nature Center"],
    desc: "Professional private duty care configurations, hourly caregiver relief, and non-medical support for Joliet families."
  },
  "new-lenox-il": {
    name: "New Lenox",
    county: "Will County",
    slug: "new-lenox-il",
    zipCodes: "60451",
    hospitals: ["Silver Cross Hospital"],
    landmarks: ["The Commons", "Hickory Creek Preserve"],
    desc: "Custom senior care plans, household meal support, and dependable daily living assistance in New Lenox."
  }
};