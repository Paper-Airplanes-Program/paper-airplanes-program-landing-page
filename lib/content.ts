export const org = {
  name: "Paper Airplanes",
  tagline: "Free Online Education For Refugees",
  headline: "Back to School. Forward for Life.",
  motto: "One class. One connection. One future changed.",
  mission:
    "Bridge gaps in language, higher education, and professional skills training for individuals affected by conflict. By harnessing virtual learning technology and the benefits of peer-to-peer connections, we seek to provide a means of pursuing educational and employment opportunities.",
  vision:
    "Paper Airplanes envisions a world in which all individuals affected by violence and conflict regain access to educational opportunities, knowledge, and personal growth.",
  ein: "EIN 81-4278267",
  founder: "Bailey Ulbricht",
  website: "https://www.paper-airplanes.org",
} as const;

export const heroStats = [
  { value: 10, suffix: "+", label: "Years", note: "Teaching since 2014" },
  { value: 5476, suffix: "+", label: "Students", note: "Across the world" },
  { value: 6000, suffix: "+", label: "Volunteers", note: "Tutors & mentors" },
  { value: 46, suffix: "+", label: "Nationalities", note: "One classroom" },
] as const;

export const nav = [
  {
    label: "Who We Are",
    href: "#about",
    children: [
      { label: "Our Story", href: "#about", hint: "From a Skype call in 2013" },
      { label: "Our Impact", href: "#impact", hint: "The numbers behind 2025" },
      { label: "Our Students", href: "#voices", hint: "Where they are now" },
      { label: "Annual Reports", href: "#impact", hint: "Published every year" },
    ],
  },
  {
    label: "Our Programs",
    href: "#programs",
    children: [
      { label: "English Program", href: "#programs", hint: "1-on-1 + speaking classes" },
      { label: "Women in Tech", href: "#programs", hint: "Python, Web, UX, AI" },
      { label: "Professional Skills", href: "#programs", hint: "Jobs & scholarships" },
      { label: "Legacy Programs", href: "#programs", hint: "Turkish, Advising, Youth" },
    ],
  },
  {
    label: "Get Involved",
    href: "#involved",
    children: [
      { label: "Students", href: "#involved", hint: "Apply for a seat" },
      { label: "Volunteers", href: "#involved", hint: "Tutor from anywhere" },
      { label: "Support Us", href: "#involved", hint: "Fund a semester" },
      { label: "Career", href: "#involved", hint: "Join the staff team" },
    ],
  },
  { label: "Partners", href: "#partners" },
  { label: "Portal", href: "#portal" },
] as const;

export const programs = [
  {
    id: "english",
    eyebrow: "Flagship · since June 2014",
    name: "English Program",
    summary:
      "Personalised language education for individuals affected by conflict — one-on-one tutoring plus interactive speaking classes, all delivered virtually.",
    points: [
      "90-minute session, once a week, for 18 weeks",
      "Speaking classes in small groups of 3–5 students",
      "IELTS & TOEFL prep, academic and professional English",
      "Matched on language ability, age, gender and interests",
    ],
    metrics: [
      { value: "4,343", label: "Applications in 2025" },
      { value: "1,012", label: "Students accepted" },
      { value: "1,192", label: "Active tutors" },
      { value: "4,151", label: "Cumulative learners" },
    ],
    accent: "aurora",
    span: "wide",
  },
  {
    id: "wit",
    eyebrow: "Since 2017",
    name: "Women in Tech",
    summary:
      "A unique program that aims to provide women with opportunities to learn skills such as analytics, programming, and coding — tutor-led, with ongoing mentorship.",
    points: [
      "10–14 week courses, 3–4 hours a week",
      "Python · Web Development · Business Analytics",
      "UX Design · AI · Microsoft Office",
      "Curriculum built with volunteer tutors and Stanford students",
    ],
    metrics: [
      { value: "918", label: "Women since 2017" },
      { value: "70%+", label: "Completion rate" },
    ],
    accent: "iris",
    span: "tall",
  },
  {
    id: "psd",
    eyebrow: "The final bridge",
    name: "Professional Skills Development",
    summary:
      "Turning English and tech expertise into scholarships, internships, and full-time jobs — through weekly mentorship, expert workshops and mock interviews.",
    points: [
      "1:2 mentor-to-student ratio",
      "Résumés, CVs and cover letters to international standards",
      "Mock interviews with real feedback",
      "Workshops on time management and Erasmus Mundus scholarships",
    ],
    metrics: [
      { value: "100+", label: "Students in 4 semesters" },
      { value: "92%", label: "Satisfaction (4.6/5)" },
      { value: "20+", label: "Recent career wins" },
    ],
    accent: "dawn",
    span: "tall",
  },
  {
    id: "legacy",
    eyebrow: "2016 – 2021",
    name: "Legacy Programs",
    summary:
      "Programs that have been discontinued but had a massive impact on our students — kept here as part of the record.",
    points: [
      "Turkish Program (2016–2021) — language for refugees in Turkey",
      "Student Advising (2020–2021) — scholarships across 12 countries",
      "Youth Exchange (2017–2021) — merged into the English Program",
    ],
    metrics: [],
    accent: "mint",
    span: "wide",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    name: "Train",
    body: "Tutors receive instruction on organisational policies and safeguarding practices before they ever meet a student.",
  },
  {
    step: "02",
    name: "Match",
    body: "Students and tutors are paired on language ability, age, gender and shared interests — a person, not a queue number.",
  },
  {
    step: "03",
    name: "Learn",
    body: "Matched pairs meet on a mutually agreed platform for a 90-minute session once a week, for 18 weeks.",
  },
  {
    step: "04",
    name: "Grow",
    body: "Professional development support: résumé preparation, personal statements, and the soft skills the global market expects.",
  },
  {
    step: "05",
    name: "Apply",
    body: "Students put the skills to work in the real world — university applications, interviews, and first jobs.",
  },
] as const;

export const displacement = [
  {
    label: "Internally displaced",
    value: 48.68,
    color: "var(--color-chart-1)",
  },
  {
    label: "Other displacement or migration status",
    value: 37.17,
    color: "var(--color-chart-2)",
  },
  {
    label: "Registered refugees",
    value: 14.15,
    color: "var(--color-chart-3)",
  },
] as const;

export const funnel2025 = [
  { stage: "Applications received", value: 4343 },
  { stage: "Students accepted", value: 1012 },
] as const;

export const impactFigures = [
  { value: "5,256", label: "Tutors since 2014" },
  { value: "~500", label: "New students each year" },
  { value: "~600", label: "Returning participants" },
  { value: "45+", label: "Staff, many former students" },
] as const;

export const testimonials = {
  students: [
    {
      quote:
        "My favorite part of being involved with Paper Airplanes is the authentic and supportive connections it fosters between students and tutors.",
      name: "Naya Melhem",
      role: "Student",
    },
    {
      quote:
        "Paper Airplanes has been a game changer for me. I've found an encouraging learning space that respects my journey.",
      name: "Raghad Abdo",
      role: "Student",
    },
    {
      quote:
        "Over the past year, the English program has significantly impacted me. I've seen significant improvement in my language proficiency.",
      name: "Khalid Hassan",
      role: "Student",
    },
    {
      quote:
        "After all these semesters I took, I was able to overcome many problems, such as the fear of speaking English.",
      name: "Sotai Doghoz",
      role: "Student",
    },
  ],
  tutors: [
    {
      quote:
        "I am not just a tutor, I am also a learner and my student has taught me so much about life, resilience.",
      name: "Krisha Niroula",
      role: "Tutor",
    },
    {
      quote:
        "It's important for me to know that my international students get the support they need.",
      name: "Oksana Chugai",
      role: "Tutor",
    },
    {
      quote:
        "I feel a deep sense of fulfillment each time I'm able to make my student smile by teaching her something new.",
      name: "Dipti Vaithiswaran",
      role: "Tutor",
    },
    {
      quote:
        "Being part of a global community of tutors with a shared commitment to providing opportunities has profoundly impacted my perspective.",
      name: "Noor Haidar",
      role: "Tutor",
    },
  ],
} as const;

export const spotlights = [
  {
    name: "Khaldon Homsi",
    outcome: "Medicine student, scholarship winner",
    tag: "Scholarship",
  },
  {
    name: "Radwan Kareen al deen",
    outcome: "Full-Stack Developer",
    tag: "Employment",
  },
  {
    name: "Mahfoza Sultani",
    outcome: "Paid internship with the Canadian organisation Booky",
    tag: "Internship",
  },
  {
    name: "Mona Darwish",
    outcome: "AI course project — “ConvNeXt: Redefining Deep Learning”",
    tag: "WiT · AI",
  },
  {
    name: "Yasmine Ben Abdallah",
    outcome: "Python course project — “Virtual Pet Game Built with Python”",
    tag: "WiT · Python",
  },
] as const;

export const portals = [
  {
    role: "Student",
    href: "https://paper-airplanes-program-student.vercel.app/",
    blurb:
      "Your classes, your tutor, your homework and your certificates — in one place.",
    features: ["Session schedule", "Course materials", "Progress & attendance", "Certificates"],
    accent: "var(--accent-cool)",
  },
  {
    role: "Teacher",
    href: "https://paper-airplanes-program-teacher.vercel.app/",
    blurb:
      "Run your cohort: lesson plans, attendance, feedback and student progress.",
    features: ["Class roster", "Lesson planning", "Attendance & grading", "Student feedback"],
    accent: "var(--accent)",
  },
] as const;

export const involvement = [
  {
    title: "Students",
    body: "Spring runs January–May, Fall runs August–December. Applications are posted here and on LinkedIn and Facebook.",
    cta: "Apply as a student",
    href: "https://www.paper-airplanes.org/students",
    meta: "English · Women in Tech · Professional Skills",
  },
  {
    title: "Volunteers",
    body: "No prior tutoring experience necessary, and Arabic is not required. Fall 2026 tutoring is open — August 3 to December 20.",
    cta: "Become a tutor",
    href: "https://www.paper-airplanes.org/volunteers",
    meta: "2–4 hours a week",
  },
  {
    title: "Support Us",
    body: "Every donation pays for another semester of sessions, curriculum and tutor training for a student who cannot pay for it.",
    cta: "Donate",
    href: "https://www.paper-airplanes.org/support-us",
    meta: "501(c)(3) · " + org.ein,
  },
  {
    title: "Career",
    body: "Over 45 people run Paper Airplanes — many of them former students and tutors who stayed.",
    cta: "See open roles",
    href: "https://www.paper-airplanes.org/career",
    meta: "Remote, worldwide",
  },
] as const;

export const partners = [
  "Florida International University",
  "MIT ReACT Hub",
  "Syrian Youth Empowerment",
  "Jusoor Syria",
  "Na'amal",
  "Work Around",
  "NaTakallam",
  "Save Youth Future Society",
  "Reclaim Childhood",
  "HireChance",
  "Talent Beyond Boundaries",
  "Nexford University",
  "Duolingo",
  "International TEFL Academy",
  "Monash University",
  "Jesuit Refugee Service",
  "Gaza Sky Geeks",
  "University of Georgia",
  "AMIDEAST — Jordan",
  "World TESOL Academy",
] as const;

export const timeline = [
  {
    year: "2013",
    title: "A Skype call from Reyhanlı",
    body: "Bailey Ulbricht volunteers in Reyhanlı, Turkey, near the Syrian border, and meets college students trying to finish their degrees. She starts giving English conversation practice over Skype.",
  },
  {
    year: "2014",
    title: "Ten tutors, one program",
    body: "Demand outgrows one person. Ten tutors are recruited from Carleton College and the English program launches in June.",
  },
  {
    year: "2016",
    title: "Officially a nonprofit",
    body: "Paper Airplanes is granted nonprofit status in December — EIN 81-4278267.",
  },
  {
    year: "2017",
    title: "A team of 25",
    body: "The staff grows to 25, and Women in Tech begins teaching its first cohorts.",
  },
  {
    year: "2021",
    title: "45+ staff — many of them alumni",
    body: "Over 45 active staff, a large share of them former students and tutors who came back to run the thing that changed them.",
  },
  {
    year: "Today",
    title: "5,476+ students, 46+ nationalities",
    body: "Three live programs, a global volunteer community, and a decade of learning continuity for people conflict tried to interrupt.",
  },
] as const;

export const footerLinks = [
  {
    title: "Who We Are",
    links: [
      { label: "Our Story", href: "https://www.paper-airplanes.org/our-story" },
      { label: "Board & Advisory Board", href: "https://www.paper-airplanes.org/our-board-and-advisory-board" },
      { label: "Our Students", href: "https://www.paper-airplanes.org/our-students" },
      { label: "Annual Reports", href: "https://www.paper-airplanes.org/annual-reports" },
      { label: "Media", href: "https://www.paper-airplanes.org/media" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "English Program", href: "https://www.paper-airplanes.org/english-program" },
      { label: "Women in Tech", href: "https://www.paper-airplanes.org/women-in-tech-wit" },
      { label: "Professional Skills", href: "https://www.paper-airplanes.org/professional-skills-development" },
      { label: "Student Projects", href: "https://www.paper-airplanes.org/student-projects" },
      { label: "Legacy", href: "https://www.paper-airplanes.org/legacy" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Students", href: "https://www.paper-airplanes.org/students" },
      { label: "Volunteers", href: "https://www.paper-airplanes.org/volunteers" },
      { label: "Support Us", href: "https://www.paper-airplanes.org/support-us" },
      { label: "Career", href: "https://www.paper-airplanes.org/career" },
      { label: "Partner With Us", href: "https://www.paper-airplanes.org/partner-with-us" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Blog", href: "https://www.paper-airplanes.org/blog" },
      { label: "Privacy Policy", href: "https://www.paper-airplanes.org/privacy-policy" },
      { label: "Complaints", href: "https://www.paper-airplanes.org/complaints" },
      { label: "Cookie Policy", href: "https://www.paper-airplanes.org/privacy-policy" },
    ],
  },
] as const;
