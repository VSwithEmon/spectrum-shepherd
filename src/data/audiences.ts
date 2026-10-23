// Copy for the "One platform for everyone in a student's corner" cards (Audiences.astro).
// Photos are the Figma placeholders; the client is sourcing licensed photography of teens and young adults (16–22).
export const audienceSlides = [
  {
    id: 'audience-schools', tab: 'For schools', tone: 'brand' as const,
    eyebrow: 'FOR SCHOOLS',
    headline: ['Lead with evidence.', 'Meet compliance.', 'Scale with confidence.'],
    benefits: ['Transition Evidence Reports', 'Indicator 13 support', 'IDEA Part B & Title IV-A ready', 'Consistent across classrooms'],
    cta: { label: 'Explore for schools →', href: '#' },
    photo: '[PHOTO — real special education leader with students]',
    image: { src: '/images/photos/audience-schools.webp', alt: 'A teacher working with a table of students in a bright classroom' },
    stat: { value: 'Indicator 13', caption: 'evidence, built automatically' },
  },
  {
    id: 'audience-teachers', tab: 'For teachers', tone: 'yellow' as const,
    eyebrow: 'FOR TEACHERS',
    headline: ['Save planning time.', 'Personalize every lesson.', 'Skip the paperwork.'],
    benefits: ['Ready-made life-skills lessons', 'IEP-linked progress notes', 'Students work independently', 'Free 45-day trial'],
    cta: { label: 'Start your free trial →', href: '#' },
    photo: '[PHOTO — real teacher working with a small group]',
    image: { src: '/images/photos/audience-teachers.webp', alt: 'Two educators reading together with a student at a classroom table' },
    stat: { value: '10 min', caption: 'to a personalized class' },
  },
  {
    id: 'audience-students', tab: 'For students', tone: 'orange' as const,
    eyebrow: 'FOR STUDENTS',
    headline: ['Learn what matters.', 'Practice what they love.', 'Grow real independence.'],
    benefits: ['Lessons under 10 minutes', 'Built on their interests', 'Any device, anywhere', 'Reading-level support'],
    cta: { label: 'See the student app →', href: '#' },
    photo: '[PHOTO — real student, 16–20, practicing a real task]',
    image: { src: '/images/photos/audience-students.webp', alt: 'A student reading a book with a teacher in a library' },
    stat: { value: '< 10 min', caption: 'per lesson' },
  },
];
