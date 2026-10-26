// Copy for the "Who it's for" cards. Shared by the V1 card grid (v3/AudienceGrid.astro) and the V2 rows (v3/AudienceRows.astro).
// `audienceSlidesV3` is the client's approved copy (Oct 26, 2026) for homepage V3; `label` is the photo's graphic label.
export const audienceSlides = [
  {
    id: 'audience-schools', tab: 'For schools', tone: 'brand' as const,
    eyebrow: 'FOR SCHOOLS',
    headline: ['Lead with evidence.', 'Meet compliance.', 'Scale with confidence.'],
    benefits: ['Transition Evidence Reports', 'Indicator 13 support', 'IDEA Part B & Title IV-A ready', 'Consistent across classrooms'],
    cta: { label: 'Explore for schools →', href: '#' },
    photo: '[PHOTO — real special education leader with students]',
    image: { src: '/images/photos/audience-schools.jpg', alt: 'A teacher working with a group of young students seated around a classroom table' },
    stat: { value: 'Indicator 13', caption: 'evidence, built automatically' },
  },
  {
    id: 'audience-teachers', tab: 'For teachers', tone: 'yellow' as const,
    eyebrow: 'FOR TEACHERS',
    headline: ['Save planning time.', 'Personalize every lesson.', 'Skip the paperwork.'],
    benefits: ['Ready-made life-skills lessons', 'IEP-linked progress notes', 'Students work independently', 'Free 45-day trial'],
    cta: { label: 'Start your free trial →', href: '#' },
    photo: '[PHOTO — real teacher working with a small group]',
    image: { src: '/images/photos/audience-teachers.jpg', alt: 'Two educators and a student reading a book together at a classroom table' },
    stat: { value: '10 min', caption: 'to a personalized class' },
  },
  {
    id: 'audience-students', tab: 'For students', tone: 'orange' as const,
    eyebrow: 'FOR STUDENTS',
    headline: ['Learn what matters.', 'Practice what they love.', 'Grow real independence.'],
    benefits: ['Lessons under 10 minutes', 'Built on their interests', 'Any device, anywhere', 'Reading-level support'],
    cta: { label: 'See the student app →', href: '#' },
    photo: '[PHOTO — real student, 16–20, practicing a real task]',
    image: { src: '/images/photos/audience-students.jpg', alt: 'A young student reading a book with a teacher in front of library shelves' },
    stat: { value: '< 10 min', caption: 'per lesson' },
  },
];

export const audienceSlidesV3 = [
  {
    id: 'audience-schools',
    headline: ['See student progress.', 'Make informed decisions.'],
    benefits: ['Student transition progress and performance reports', 'Individual and classroom-level insights', 'Evidence to support IEP reviews and transition planning', 'Consistent reporting across classrooms'],
    cta: 'Explore for schools →',
    label: 'Student progress, clearly documented',
    image: audienceSlides[0].image,
  },
  {
    id: 'audience-teachers',
    headline: ['Individualized learning.', 'Without the extra work.'],
    benefits: ['Personalized learning plans for each student', 'Ready-to-use lessons tailored to student interests and abilities', 'Automatic progress tracking and documentation'],
    cta: 'Start your free trial →',
    label: 'Personalized lessons, ready to teach',
    image: audienceSlides[1].image,
  },
  {
    id: 'audience-students',
    headline: ["Life skills learning they'll actually enjoy."],
    benefits: ['Modern, intuitive interface designed for students', 'Short, engaging lessons built around their interests', 'Lessons that build practical, real-world skills', "Personalized to each student's abilities and learning level"],
    cta: 'See the student app →',
    label: 'Personalized learning, made engaging',
    image: audienceSlides[2].image,
  },
];
