/**
 * Complete verbatim data extracted from https://www.enzoxyair.com/
 * Company: ENZOXY AIR LLP
 */

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Review {
  name: string;
  location: string;
  comment: string;
  rating: number;
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  desc: string;
  read: string;
  img: string;
  body: string;
}

export interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

export interface BusinessPackage {
  name: string;
  range: string;
  target: string;
  items: string[];
  featured: boolean;
}

export const SITE_INFO = {
  name: "ENZOXY AIR",
  legalName: "ENZOXY AIR LLP",
  tagline: "Don't Just Breathe Your Air. Know It.",
  subtagline: "Purity in every breathe.",
  email: "info@enzoxyair.com",
  phone: "+91 93168 20082",
  phoneRaw: "919316820082",
  whatsappUrl: "https://wa.me/919316820082",
  location: "Ahmedabad, Gujarat",
  gstin: "24AAMFE6475D1ZD",
  certifications: ["ISO 9001:2015", "LMPC", "EPR", "Startup India"],
  heroImage: "https://customer-assets-lqy194kg.emergentagent.net/job_enzoxy-air-quality/artifacts/l0y7i5f2_Only%20the%20product.png",
  demoVideo: "https://customer-assets.emergentagent.com/job_enzoxy-air-quality/artifacts/nw25lxd7_gemini_generated_video_070cce5f.mp4",
  pdfManual: "https://enzoxyair.com/Manual.pdf"
};

export const PRODUCT_DATA = {
  model: "AP-200-H3",
  title: "ENZOXY AP-200-H3",
  rating: 4.8,
  reviewsCount: "240+ verified buyers",
  price: 10999,
  mrp: 17999,
  discountPercentage: 39,
  shortDesc: "Intelligent purification for everyday living. Medical-grade H13 HEPA, real-time PM2.5 sensing and app-connected control — engineered for homes, offices, cabins and clinics that take their air seriously.",
  heroBullets: [
    "Medical-grade H13 HEPA",
    "Real-time PM2.5 & AQI display",
    "Auto Mode",
    "Smart Life app · Voice-ready"
  ],
  gallery: [
    { label: "Frontal View", src: "https://customer-assets-lqy194kg.emergentagent.net/job_enzoxy-air-quality/artifacts/3aw27k7h_image.png" },
    { label: "Back View", src: "https://customer-assets-lqy194kg.emergentagent.net/job_enzoxy-air-quality/artifacts/f51g9tip_image.png" },
    { label: "Top View", src: "https://customer-assets-lqy194kg.emergentagent.net/job_enzoxy-air-quality/artifacts/aqe7g0mn_image.png" },
    { label: "Pre-Filter + H13 HEPA", src: "https://customer-assets-lqy194kg.emergentagent.net/job_enzoxy-air-quality/artifacts/jbvf06ln_image.png" },
    { label: "Activated Carbon Filter", src: "https://customer-assets-lqy194kg.emergentagent.net/job_enzoxy-air-quality/artifacts/9xa0467e_image.png" }
  ],
  features: [
    { text: "Triple-layer filtration — Pre-filter, H13 HEPA and Activated Carbon", highlight: false },
    { text: "Real-time PM2.5 & AQI display with adaptive Auto Mode", highlight: true },
    { text: "Whisper-quiet operation — as low as ~22 dB in Sleep Mode", highlight: false },
    { text: "Smart Life app — schedule, monitor and receive filter alerts", highlight: false },
    { text: "Voice-ready — works with Google Assistant and Amazon Alexa", highlight: false },
    { text: "Child Lock, Sleep Mode, Timer (2H / 5H / 8H) and 4 wind speeds", highlight: false },
    { text: "3,000-hour filter life · one-year comprehensive warranty", highlight: false }
  ],
  specs: [
    { label: "Model", value: "AP-200-H3" },
    { label: "CADR", value: "200 m³/h" },
    { label: "Coverage", value: "Up to 550 sq.ft (recommended: 200–350 sq.ft)" },
    { label: "Filtration", value: "Pre-filter · H13 HEPA · Activated Carbon" },
    { label: "Noise", value: "~22 dB (Sleep mode) · < 55 dB (Turbo mode)" },
    { label: "Modes", value: "Auto · Sleep · 4 Wind Speeds" },
    { label: "Smart", value: "Wi-Fi · Smart Life app · Alexa / Google" },
    { label: "Sensors", value: "Real-time PM2.5" },
    { label: "Filter life", value: "3,000 hrs" },
    { label: "Warranty", value: "12 months comprehensive" },
    { label: "Max power", value: "24 W" },
    { label: "Power supply", value: "24 V / 1 A adapter" },
    { label: "Weight", value: "3.2 kg" }
  ],
  filterPack: {
    name: "ENZOXY Replacement Filter Pack (Pre-Filter + H13 HEPA + Activated Carbon)",
    price: 1299,
    mrp: 1999,
    image: "https://customer-assets-lqy194kg.emergentagent.net/job_enzoxy-air-quality/artifacts/jbvf06ln_image.png",
    desc: "A complete 3-in-1 replacement for the AP-200-H3. Restores 99.97% filtration and neutralises smoke, VOCs and cooking odours every 6–7 months. Fits perfectly, installs in under a minute.",
    layers: [
      { name: "Pre-Filter", desc: "Traps hair, dust and large particles" },
      { name: "H13 HEPA", desc: "99.97% of particles ≥0.3 microns" },
      { name: "Activated Carbon", desc: "Smoke, VOCs and odour neutralisation" }
    ]
  },
  comparison: [
    { feature: "H13 HEPA Filtration", enzoxy: true, traditional: false },
    { feature: "Activated Carbon Layer", enzoxy: true, traditional: true },
    { feature: "Real-time PM2.5 Sensor", enzoxy: true, traditional: false },
    { feature: "Auto Mode", enzoxy: true, traditional: false },
    { feature: "Sleep Mode (~22 dB)", enzoxy: true, traditional: false },
    { feature: "Smart Life App Control", enzoxy: true, traditional: false },
    { feature: "Voice Assistant Support", enzoxy: true, traditional: false }
  ],
  reviews: [
    {
      name: "Aarav S.",
      location: "Delhi",
      rating: 5,
      comment: "Quiet enough to sleep beside. The AQI on the display finally makes me trust the air we're breathing."
    },
    {
      name: "Priya M.",
      location: "Bengaluru",
      rating: 5,
      comment: "Set-up was 3 minutes via Smart Life. The Auto Mode is genuinely intelligent — kicks in the second we start cooking."
    }
  ]
};

export const COMMITMENTS = [
  {
    num: "01",
    title: "Affordable Premium",
    desc: "Flagship intelligence at a price real Indian families can commit to."
  },
  {
    num: "02",
    title: "Integrated Ecosystem",
    desc: "Devices, filters, AMC and app — designed as one experience."
  },
  {
    num: "03",
    title: "Built for India",
    desc: "Engineered for the way Indian homes, offices and cities breathe."
  },
  {
    num: "04",
    title: "Tier-2 First",
    desc: "Clean air beyond metros — reaching cities that need it most."
  },
  {
    num: "05",
    title: "Sustainable Advantage",
    desc: "Healthier lives today, a cleaner tomorrow — built into every filter cycle."
  },
  {
    num: "06",
    title: "Trusted & Smart",
    desc: "ISO 9001:2015, Startup India, LMPC and EPR — trust you can verify."
  }
];

export const TECH_PROCESS_STAGES = [
  { num: "01", title: "Detect", desc: "Laser PM2.5 sensor scans your air in real-time." },
  { num: "02", title: "Analyse", desc: "Auto Mode analysis of pollutants and calculates." },
  { num: "03", title: "Filter", desc: "Triple filtration cleans at molecular level." },
  { num: "04", title: "Monitor", desc: "OLED display shows live AQI, PM2.5 and filter status." },
  { num: "05", title: "Deliver", desc: "Clean air distributed silently across 550 sq.ft." }
];

export const TECH_FILTER_LAYERS = [
  {
    num: "Layer 01",
    title: "Pre-Filter",
    desc: "Washable outer mesh traps hair, lint and larger dust — extending the life of HEPA and carbon layers.",
    tag: "Washable · Reusable"
  },
  {
    num: "Layer 02",
    title: "H13 True HEPA",
    desc: "Medical-grade filtration captures 99.97% of particles ≥0.3µm — pollen, PM2.5, smoke, bacteria and viral droplets.",
    tag: "99.97% @ 0.3µm"
  },
  {
    num: "Layer 03",
    title: "Activated Carbon",
    desc: "Honeycomb coconut-shell carbon absorbs VOCs, cooking fumes, formaldehyde and household odours molecularly.",
    tag: "Coconut-shell"
  }
];

export const ARTICLES: Article[] = [
  {
    slug: "invisible-cost-indoor-air",
    category: "Foundation",
    title: "The invisible cost of poor indoor air.",
    desc: "Why the air inside your home and office is quietly shaping your health, mood and output — and how to reclaim it.",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    body: `Most people believe air pollution is an outdoor problem. The data says otherwise. The US EPA reports indoor air is typically two to five times more polluted than outdoor air, and in dense Indian cities the ratio widens further. Since we spend close to 90% of our waking lives inside — homes, cabins, cars, meeting rooms — the exposure adds up quietly, day after day.

The culprits are unglamorous. Cooking fumes and burnt oil. VOCs off-gassing from paint, MDF furniture and printers. Dust mites in mattresses and carpets. PM2.5 that slips in through every seal. And CO₂, the silent one, that climbs to 1200–1800 ppm inside closed conference rooms and bedrooms within an hour.

The body reads all of this as low-grade stress. Sleep fragments. Focus dips. Skin dulls. Allergies escalate. The World Health Organization attributes 3.2 million premature deaths every year to household air pollution — more than road accidents and malaria combined.

The paradox is that unlike outdoor air, indoor air is entirely engineerable. Placement, filtration, ventilation and monitoring — four small levers — can shift a space from lightly toxic to genuinely restorative. This library exists to help you pull those levers with confidence, at home and at work.`
  },
  {
    slug: "pm25-modern-workplace",
    category: "Corporate",
    title: "PM2.5 and the modern workplace.",
    desc: "Studies quietly show what every office manager already suspects — cleaner air produces sharper teams.",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    body: `In 2015, Harvard's T.H. Chan School of Public Health ran a double-blind, controlled study on knowledge-workers in real offices. The results were unambiguous: cognitive scores on strategic thinking and information usage improved by 61% in "green + ventilated" conditions versus conventional offices — and by 101% in "green + enhanced ventilation."

The mechanism is boring and biological. Fine particulate matter (PM2.5) enters the bloodstream through the lungs and triggers systemic inflammation. Elevated CO₂ narrows the blood vessels feeding the prefrontal cortex — the region responsible for planning, judgement and complex decisions. Neither effect is dramatic in the short term, which is why offices ignore them. Both are ruinous over quarters.

In Indian metros, workplace PM2.5 routinely runs 4–8× the WHO guideline. HVAC systems designed twenty years ago cannot filter what the modern city throws at them. Bolt-on HEPA H13 units — placed correctly — can lower workspace PM2.5 by 70–90% within a single working hour.

The business case writes itself. Even a conservative 2% productivity uplift on a mid-sized team pays back the entire fleet of purifiers inside a quarter. Everything after is compounding — fewer sick days, better retention, quieter meetings, sharper decisions.`
  },
  {
    slug: "hepa-h13-medical-grade",
    category: "Technology",
    title: "HEPA H13 — what medical-grade actually means.",
    desc: "A short technical primer on the standard hospitals trust — and why it matters in your living room and boardroom.",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    body: `HEPA — High Efficiency Particulate Air — is a European standard, not a marketing term. To be genuinely HEPA, a filter must be independently certified to trap at least 99.95% of particles at the most-penetrating particle size (0.3 microns) in a single pass. Anything less is "HEPA-type" or "HEPA-like" — a very different product.

The standard has grades. H10 and H11 belong in vacuum cleaners. H12 sits in commercial HVAC. H13, at 99.97% efficiency, is the grade used in operating theatres, ICUs and clean-room manufacturing. H14 (99.995%) goes into pharmaceutical labs and semiconductor fabs. Above that, you are into ULPA territory used for the most demanding process work.

Enzoxy AP-200-H3 uses a true H13 media, laser-tested per EN 1822. That means when a particle enters the filter, its likelihood of escape is 3 in 10,000 — irrespective of whether it is PM2.5, PM1, a pollen grain, a dander flake or an aerosolised virus droplet.

Two things kill HEPA performance: bypass and saturation. Bypass happens when air sneaks around a poorly-sealed filter. Saturation is when the media loads up and airflow drops. Both are engineering problems, not marketing problems — and both are solved with proper gaskets, sealed housings and a disciplined 4–6 month replacement cadence.

If you are shopping, ask three questions: Is the filter certified H13 by an independent lab? Is the housing gasket-sealed? What is the rated CADR after 500 hours of use? Vendors who answer all three transparently are usually the ones worth trusting.`
  },
  {
    slug: "boardroom-co2",
    category: "Corporate",
    title: "Boardrooms, CO₂ and better decisions.",
    desc: "How a rising ppm number, unnoticed by everyone in the room, quietly weakens the meetings you care about most.",
    read: "4 min",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    body: `Outdoor CO₂ is roughly 420 ppm today. A well-ventilated room holds around 600–800 ppm. Close eight adults in a mid-sized conference room for an hour, and CO₂ climbs past 1,400 ppm — often past 1,800. Nobody notices. There is no smell, no visual cue, and the ventilation icon on the AC console is decorative in most Indian buildings.

The cognitive cost is measurable. Peer-reviewed research from LBNL and Harvard shows that at 1,000 ppm, performance on the most complex decision-making tasks drops 15%. At 1,400 ppm, the drop widens to 50% for tasks involving strategy and initiative. In simple language: your leadership team is doing its worst thinking in the room where it does its most important thinking.

The fix is unspectacular. A modest CO₂ monitor on the boardroom table. A 10-minute cross-ventilation break every hour. An H13 purifier sized for 1.5× the room's volume, running quietly on Auto. And a cultural nudge — a shared understanding that the number matters, the way calendar hygiene matters.

Fortune 100 companies now write indoor CO₂ targets into their lease agreements. It is not virtue signalling. It is the same logic that made ergonomic chairs standard twenty years ago — a small, silent investment in the quality of the work that gets done inside the room.`
  },
  {
    slug: "aqi-pm25-cadr-decoded",
    category: "Education",
    title: "AQI, PM2.5, CADR — the field guide.",
    desc: "A plain-English map of the acronyms that actually matter, and the vanity metrics you can safely ignore.",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    body: `AQI (Air Quality Index). A single composite score, 0–500, blending PM2.5, PM10, NO₂, SO₂, CO and O₃. 0–50 is Good; 51–100 is Moderate; above 100 you should limit outdoor exposure. Indian metros routinely cross 200 through the winter months.

PM2.5. Particulate matter below 2.5 microns — small enough to bypass nose and lung defenses and enter the bloodstream. WHO's 24-hour safe limit is 15 µg/m³. Delhi's winter average sits above 100 µg/m³.

PM1. The finest particles, under 1 micron. Not tracked by most consumer monitors, yet arguably the most dangerous for cardiovascular health. Genuine H13 HEPA catches them anyway.

CADR (Clean Air Delivery Rate). How much genuinely-clean air a purifier delivers per hour, measured in m³/h or CFM. Higher is faster. For a room, aim for a CADR that covers your floor area at least 5 times per hour.

HEPA H13. Independently certified at 99.97% capture efficiency at 0.3 microns. Anything below H13 is not medical-grade — call it what it is.

ACH (Air Changes per Hour). How many complete refreshes your purifier delivers to the room's total volume. 4–5 ACH is fine for bedrooms; 5–6 is better for allergy sufferers and children's rooms; 6+ suits offices with high occupancy.

Vanity metrics — ignore. "Ions per cm³", "plasma discharge frequency", "aromatherapy-grade purification" — none of these correlate with measurable outcomes. The honest test is simple: does a $30 PM2.5 monitor placed in the room show a sharp drop within 30 minutes of the purifier running? If yes, the machine is doing its job. If no, no acronym will save it.`
  },
  {
    slug: "filtration-connected-office",
    category: "Corporate",
    title: "Filtration for the connected office.",
    desc: "A practical framework for HR, facilities and founders who want to build the healthiest workspace in their category.",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    body: `Office air is a shared resource. Every design decision — from partition heights to HVAC intake position — shapes what everyone in the room breathes for 8+ hours. Here is a working framework for building a clean-air office that scales.

Step 1 — Measure first. Install PM2.5 and CO₂ monitors at three points: near the HVAC intake, in the busiest open-plan zone, and inside a closed meeting room. Log for one working week. This baseline is your ROI reference.

Step 2 — Right-size the fleet. For open-plan zones, plan one H13 unit per 550 sq.ft with a CADR of at least 300 m³/h. Meeting rooms get a dedicated unit at 1.5× overkill so they recover quickly between meetings. Cabins get one small unit each.

Step 3 — Placement discipline. Purifiers work only if air can move through them. Never behind furniture. Never in dead corners. Ideally 3–6 feet from a wall with intake facing occupants.

Step 4 — Filter cadence. Log filter replacement into the facilities calendar every 4 months, not "when someone remembers." Saturated filters can actively re-release trapped particulate. AMC contracts remove the guesswork entirely.

Step 5 — Communicate the effort. Employees value visible investments in their wellbeing more than most balance sheets suggest. Publish your indoor air metrics quietly in the pantry — the same way modern gyms display water quality. Trust compounds.

Step 6 — Review quarterly. Compare occupancy patterns, filter loading rates and reported "brain fog" complaints against baseline. Adjust unit density in the zones that need it most. This is a living system, not a one-time install.

Done well, office filtration pays for itself in reduced sick leave alone. Everything beyond — sharper meetings, calmer HR, better retention — is upside.`
  },
  {
    slug: "child-development",
    category: "Family",
    title: "Air quality & child development.",
    desc: "Cleaner air correlates with fewer sick days, deeper sleep and measurably better learning outcomes in children.",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=80",
    body: `Children breathe up to twice as much air per body-weight as adults. Their lungs, immune systems and brains are still developing. That combination means air pollution hits them hardest, and clean air rewards them most.

Sick days. A landmark UK schools study installed HEPA units in half of a cluster of classrooms and left the rest as controls. Absenteeism from respiratory illness dropped 30% in the filtered rooms in a single winter term. The same effect scales at home.

Cognitive performance. LSE research on Delhi schoolchildren showed measurable declines in memory and attention scores for those living in the highest-PM2.5 zones. Filtration during study hours can recover much of that gap within weeks, according to follow-up studies.

Asthma. One in ten urban Indian children lives with asthma. HEPA H13 captures the top three triggers — dust mites, pollen, pet dander — at over 99.9%. Pediatric pulmonologists routinely see reduced medication reliance in patients whose homes install proper filtration.

Sleep and growth. Human growth hormone is secreted primarily during deep sleep. Poor air quality fragments deep-sleep cycles. Clean bedroom air is not an optional luxury for a growing body — it is structural infrastructure.

Skin and eczema. Airborne allergens exacerbate childhood eczema. Filtered air reduces flare-ups and cuts steroid-cream dependency in most cases.

Every parent optimizes what they can — nutrition, schooling, sports, screen time. Air is invisible, which is what makes it easy to ignore and important to solve.`
  },
  {
    slug: "winter-smog-protocol",
    category: "Guide",
    title: "The winter smog protocol.",
    desc: "A field-tested seasonal playbook for Indian homes and offices from October through February.",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    body: `From late October to mid-February, most of northern and central India sits under a stubborn thermal inversion. Cold air traps warm exhaust close to the ground. PM2.5 climbs. Visibility falls. Emergency rooms fill. This is the season the difference between "having a purifier" and "using one well" becomes life-shaping.

Weeks 1–2 (Late October). Baseline. Install monitors. Confirm filter freshness — replace anything older than 4 months. Seal window gaps with cheap adhesive foam; you will thank yourself later. Run purifiers on Auto to condition the space before smog arrives.

Weeks 3–8 (November–December). Peak season. Purifiers run continuously — 24/7 on Auto, Turbo during cooking hours. Cross-ventilate for exactly 8 minutes twice daily, mid-morning and mid-afternoon; longer only pulls in more of what you are trying to filter out. Track PM2.5 personally in the bedroom before sleep — aim for under 15 µg/m³.

Weeks 9–12 (January). The false calm. Fog masks improving AQI on some days and hides worsening AQI on others. Trust the monitor, not the visual. Schedule a filter check at week 10 — cold-season loading can halve filter life.

Weeks 13–16 (February). Recovery. Wildfire and construction dust replace stubble smoke as the dominant load. Continue running. Book AMC / deep-clean now, ahead of the summer rush.

Everyday habits that compound. Wet-mop instead of dry-sweep. Cook with lids on. Change into "outdoor clothes" bag near the door. Vacuum with a HEPA-fitted machine, not a broom. None of these individually matters much; together they multiply what your purifier can deliver.

Winter is when air-wellness stops being theoretical. It is also when the smallest disciplines yield the largest returns.`
  }
];

export const FAQS: FAQItem[] = [
  {
    q: "How can I place an order through the website?",
    a: "Simply fill out the order form on our website. A payment QR code will appear after submitting the form. Once the payment is completed, you will receive an order confirmation via email and WhatsApp. You’ll also receive regular updates about your order, including the expected delivery time and tracking details. We believe in keeping our customers connected through Email, WhatsApp, and Customer Care, ensuring you receive the best support throughout your order journey.",
    category: "Orders & Delivery"
  },
  {
    q: "How can I cancel my order?",
    a: "You can request to cancel your order on the customer care contact number within 24 hours of placing it. Once the cancellation is approved, the eligible refund will be processed and credited to your account within 3–5 business days.\n\nShare the following details:\n• Order ID\n• Registered Contact Number\n• Registered Email ID\n• Transaction/Payment ID\n• Reason for cancellation\n• Bank/UPI details for refund\n• Any other information requested by our support team\n\nPlease note: Cancellation requests received after 24 hours may not be eligible for cancellation/refund, depending on the order processing status. For assistance, please contact ENZOXY Customer Support through the official contact details provided on our website.",
    category: "Orders & Delivery"
  },
  {
    q: "How can I update my order details after placing the order, such as my delivery address, contact number, or email address?",
    a: "Please contact our Customer Service team within 24 Hours of placing the Order. Our team will assist you with updating your order details.",
    category: "Orders & Delivery"
  },
  {
    q: "How to use voice control?",
    a: "Using the Smart Life application, you can connect your air purifier to third-party voice assistants such as Amazon Alexa and Google Assistant for convenient voice control. For detailed setup instructions and compatibility information, please refer to the user manual.",
    category: "Smart Features"
  },
  {
    q: "What is Auto mode?",
    a: "The fan speed automatically adjusts based on the detected AQI level, increasing or decreasing as required to maintain optimal air quality.",
    category: "Operation"
  },
  {
    q: "How to connect via Phone?",
    a: "Please download the Smart Life application and follow the setup instructions provided within the application to connect and configure your device. For detailed setup instructions and compatibility information, please refer to the user manual.",
    category: "Smart Features"
  },
  {
    q: "How to reset Filter Life Indicator?",
    a: 'Turn off the device and install the new filter. Then switch the device on and press and hold the Reset button for 5 seconds. You will hear three beeps, and the display will show "F99", with all 10 bars illuminated, confirming that the filter has been successfully reset.',
    category: "Maintenance"
  },
  {
    q: "How often should I replace the filter?",
    a: "The filter replacement frequency depends on the air quality and surrounding environment. However, to maintain the air purifier’s performance and extend its lifespan, the filter should typically be replaced every 6–7 months.",
    category: "Maintenance"
  },
  {
    q: "Is it suitable for asthma & allergies?",
    a: "Yes. H13 HEPA captures 99.97% of particles ≥0.3 microns — allergens, dust mites, pollen — proven to reduce triggers at home and in office.",
    category: "Health & Efficacy"
  },
  {
    q: "Does it remove smoke and odours?",
    a: "The activated carbon layer neutralises smoke, VOCs, cooking fumes and household odours at molecular level.",
    category: "Health & Efficacy"
  },
  {
    q: "How much power does it consume?",
    a: "A maximum of 24 W. Comparable to a modern LED bulb — even lower in Auto / Sleep mode.",
    category: "Operation"
  },
  {
    q: "Can it run all night quietly?",
    a: "Sleep Mode operates at ~22 dB — quieter than a whisper. Display dims automatically.",
    category: "Operation"
  }
];

export const BUSINESS_TIERS: BusinessPackage[] = [
  {
    name: "Essentials",
    range: "5 – 25 units",
    target: "CLINICS · SMALL OFFICES · BOUTIQUE HOTELS",
    items: [
      "On-site audit & placement plan",
      "Standard AMC (annual)",
      "Filter subscriptions (semi-annual)",
      "Priority support · WhatsApp channel"
    ],
    featured: false
  },
  {
    name: "Professional",
    range: "25 – 100 units",
    target: "CORPORATE FLOORS · SCHOOLS · MID-SCALE HOSPITALITY",
    items: [
      "Multi-zone AQI dashboard",
      "Priority AMC + emergency SLA",
      "Quarterly wellness reporting",
      "Dedicated account manager"
    ],
    featured: true
  },
  {
    name: "Enterprise",
    range: "100+ units",
    target: "CAMPUSES · HOSPITALS · MULTI-CITY ROLLOUTS",
    items: [
      "Phased city-wise deployment",
      "White-glove AMC · 24×7 SLA",
      "Custom API + facility integration",
      "Executive wellness reporting"
    ],
    featured: false
  }
];

export const BUSINESS_SECTORS = [
  {
    title: "Modern Offices",
    desc: "One AP-200-H3 per 500 sq.ft of open-plan workspace. Ideal for meeting rooms, founder cabins and shared floors."
  },
  {
    title: "Clinics & Hospitals",
    desc: "Waiting areas, consultation rooms and paediatric wards. Reduces airborne pathogens and calms sensitive patients."
  },
  {
    title: "Hospitality",
    desc: "Boutique hotel suites, spas and lounge floors. Adds a quiet wellness benefit guests remember and rate."
  },
  {
    title: "Schools",
    desc: "Classrooms and staff rooms. Cleaner air correlates with reduced sick days and better cognitive performance."
  }
];

export const ABOUT_PRINCIPLES = [
  { num: "01", title: "Air Wellness Ecosystem", desc: "Devices, filters and app designed as one connected experience." },
  { num: "02", title: "Every Space Covered", desc: "Homes, offices, vehicles and commercial rooms — one philosophy." },
  { num: "03", title: "Innovation First", desc: "Real-time sensing, Auto Mode and H13 medical-grade filtration." },
  { num: "04", title: "Beautifully Designed", desc: "Purification that looks and feels like it belongs in the room." },
  { num: "05", title: "Startup India · MSME", desc: "Recognised, certified and committed to accessible clean air." }
];

export const TIMELINE_MILESTONES = [
  { year: "2024", title: "The Question", desc: "Why is clean air still a luxury in India? We start asking." },
  { year: "Q1 2025", title: "Enzoxy Air LLP", desc: "Incorporated in Ahmedabad. Startup India registered." },
  { year: "Q3 2025", title: "AP-200-H3", desc: "First device engineered — H13 HEPA + Auto Mode." },
  { year: "2026", title: "D2C Launch", desc: "Direct-to-home rollout with subscription AMC." },
  { year: "2030", title: "Vision", desc: "1M+ Indian homes on a connected ecosystem." }
];

export const CITIES_AQI = [
  { city: "Delhi", aqi: 248, pm25: 188, status: "Severe", temp: "28°C", humidity: "42%" },
  { city: "Mumbai", aqi: 132, pm25: 64, status: "Moderate", temp: "31°C", humidity: "68%" },
  { city: "Bengaluru", aqi: 62, pm25: 19, status: "Satisfactory", temp: "26°C", humidity: "58%" },
  { city: "Kolkata", aqi: 178, pm25: 98, status: "Poor", temp: "30°C", humidity: "62%" },
  { city: "Ahmedabad", aqi: 145, pm25: 72, status: "Moderate", temp: "33°C", humidity: "38%" },
  { city: "Pune", aqi: 88, pm25: 32, status: "Moderate", temp: "27°C", humidity: "52%" },
  { city: "Lucknow", aqi: 215, pm25: 142, status: "Very Poor", temp: "29°C", humidity: "46%" },
  { city: "Patna", aqi: 228, pm25: 156, status: "Very Poor", temp: "30°C", humidity: "50%" },
  { city: "Jaipur", aqi: 165, pm25: 84, status: "Moderate", temp: "32°C", humidity: "34%" },
  { city: "Hyderabad", aqi: 94, pm25: 36, status: "Moderate", temp: "29°C", humidity: "54%" }
];

export const POLICIES = {
  terms: {
    title: "Terms & Conditions",
    lastUpdated: "14 February 2026",
    sections: [
      {
        heading: "1. Acceptance",
        body: "By purchasing an Enzoxy product, registering a device or using our website / app, you agree to these Terms & Conditions along with our Privacy Policy and Return & Replacement Policy."
      },
      {
        heading: "2. Products & Pricing",
        body: "All product descriptions, specifications and pricing are subject to change without prior notice. Introductory pricing (₹10,999) applies only while stocks last. GST is included where indicated; else charged extra at applicable rates."
      },
      {
        heading: "3. Orders & Delivery",
        body: "Orders are confirmed upon receipt of full payment. Delivery timelines are estimates — typically 3–7 business days within India. Enzoxy is not liable for delays caused by force majeure (weather, transit disruptions, courier lockouts)."
      },
      {
        heading: "4. Warranty — 1 Year Comprehensive",
        body: "Every Enzoxy AP-200-H3 comes with a comprehensive 12 months manufacturer warranty from the date of purchase.\n\nThe warranty covers:\n• Manufacturing defects in materials or workmanship\n• Failure of the internal motor, sensor board or control PCB under normal residential use\n• Free replacement or repair (at Enzoxy's discretion) with pickup-and-drop logistics included within serviceable pincodes\n\nThe 12 months warranty does not cover accidental physical damage, water ingress, unauthorised repair or consumable filter degradation."
      }
    ]
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "14 February 2026",
    sections: [
      {
        heading: "1. Overview",
        body: "Enzoxy Air LLP (\"Enzoxy\", \"we\", \"us\") is committed to protecting your personal information. This Privacy Policy explains how we collect, use and safeguard your data when you visit our website, purchase a product, register a device or use the Smart Life app.\n\nBy using our services, you consent to the practices described below."
      },
      {
        heading: "2. Information We Collect",
        body: "Account & Order Data: Name, email address, phone number, shipping and billing address, and transaction identifier.\n\nProduct Registration: Device serial number, model, purchase date and location.\n\nApp Usage: Sensor readings (PM2.5, AQI, fan speed and operating schedules) synced via Smart Life.\n\nWebsite Analytics: IP address, browser type and anonymous navigation telemetry."
      },
      {
        heading: "3. How We Use Your Data",
        body: "To fulfil orders, provide warranty and AMC support, send filter-replacement reminders, deliver customer service, and improve product performance. We never sell your data. Ever."
      },
      {
        heading: "4. Data Sharing",
        body: "We share only what is strictly necessary with:\n• Logistics partners (address & phone, for delivery)\n• Payment gateways (transaction verification)\n• Cloud infrastructure providers compliant with global ISO/IEC 27001 standards."
      }
    ]
  },
  shipping: {
    title: "Shipping & Delivery Policy",
    lastUpdated: "14 February 2026",
    sections: [
      {
        heading: "1. Shipping Availability",
        body: "Enzoxy products are currently available for delivery across India, subject to courier and serviceability of the delivery pincode. Customers are responsible for providing an accurate and complete shipping address, including the correct pincode and contact number."
      },
      {
        heading: "2. Order Processing",
        body: "Orders are processed after successful confirmation of payment, typically within 1–2 business days. Orders placed on Sundays, public holidays or during periods of exceptionally high demand may require additional processing time."
      },
      {
        heading: "3. Delivery Timeline",
        body: "Estimated delivery timeline is 3–7 business days within India across major cities and metros. Remote locations, difficult-to-service areas, public holidays, weather conditions, transportation disruptions and other circumstances beyond Enzoxy's reasonable control may result in additional delays."
      },
      {
        heading: "4. Shipping Charges",
        body: "Standard surface shipping across serviceable pincodes in India is included with device and filter orders unless specified otherwise at checkout."
      }
    ]
  },
  returns: {
    title: "Returns & Refund Policy",
    lastUpdated: "14 February 2026",
    sections: [
      {
        heading: "1. 10-Day No-Questions Return",
        body: "Eligible returns can be initiated within 10 days of delivery if the product is in its original packaging with all included accessories, manuals, and protective materials intact."
      },
      {
        heading: "2. Damaged or Defective on Arrival",
        body: "Report any transit damage or manufacturing defects within 48 hours of delivery to info@enzoxyair.com. We will arrange free pickup and dispatch a replacement unit within 3–5 business days across serviceable pincodes."
      },
      {
        heading: "3. How to Initiate a Return",
        body: "1. Email info@enzoxyair.com or WhatsApp +91 93168 20082 with your order ID.\n2. Our team confirms eligibility within 24 hours.\n3. Free reverse-pickup is scheduled at your convenience.\n4. Refund is initiated to your original payment method within 5–7 business days of the returned unit passing quality inspection."
      },
      {
        heading: "4. Non-Returnable Items",
        body: "• Consumable filters once unwrapped from protective plastic sealing\n• Products damaged due to misuse, mishandling or unauthorized modification."
      }
    ]
  },
  warranty: {
    title: "Warranty Policy",
    lastUpdated: "14 February 2026",
    sections: [
      {
        heading: "1. Warranty Period",
        body: "Enzoxy AP-200-H3 comes with a 12-month comprehensive manufacturer's warranty from the date of delivery. The warranty is subject to the terms and exclusions described in this policy."
      },
      {
        heading: "2. What the Warranty Covers",
        body: "The warranty covers manufacturing defects in materials or workmanship under normal residential use:\n• Internal motor\n• Laser PM2.5 sensor board\n• Control PCB and mainboard circuitry\n• Other internal electronic components affected by a manufacturing defect\n\nWhere a covered defect is confirmed, Enzoxy will provide repair or replacement at its discretion. Eligible warranty service includes pickup and drop-back logistics within serviceable pincodes."
      },
      {
        heading: "3. Exclusions",
        body: "• Normal wear and tear, cosmetic marks or scratches\n• Consumable replacement filters (3,000-hour rated lifespan)\n• Damage resulting from accidents, electrical surges, liquid spills or physical drops\n• Attempted repair or alteration by unauthorized third-party technicians."
      }
    ]
  }
};
