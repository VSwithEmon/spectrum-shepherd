// Copy for the "Who it's for" cards. Shared by the carousel (Audiences.astro) and the stacked version (v2/AudienceStack.astro).
export const audienceSlides = [
  {
    id: 'audience-schools', tab: 'For schools', tone: 'brand' as const,
    eyebrow: 'FOR SCHOOLS',
    headline: ['Lead with evidence.', 'Meet compliance.', 'Scale with confidence.'],
    benefits: ['Transition Evidence Reports', 'Indicator 13 support', 'IDEA Part B & Title IV-A ready', 'Consistent across classrooms'],
    cta: { label: 'Explore for schools →', href: '#' },
    photo: '[PHOTO — real special education leader with students]',
    image: { src: '/images/photos/audience-schools.jpg', alt: 'A special education teacher reviewing a lesson on a tablet with two students' },
    stat: { value: 'Indicator 13', caption: 'evidence, built automatically' },
  },
  {
    id: 'audience-teachers', tab: 'For teachers', tone: 'yellow' as const,
    eyebrow: 'FOR TEACHERS',
    headline: ['Save planning time.', 'Personalize every lesson.', 'Skip the paperwork.'],
    benefits: ['Ready-made life-skills lessons', 'IEP-linked progress notes', 'Students work independently', 'Free 45-day trial'],
    cta: { label: 'Start your free trial →', href: '#' },
    photo: '[PHOTO — real teacher working with a small group]',
    image: { src: '/images/photos/audience-teachers.jpg', alt: 'A teacher working with a small group of students on laptops' },
    stat: { value: '10 min', caption: 'to a personalized class' },
  },
  {
    id: 'audience-students', tab: 'For students', tone: 'orange' as const,
    eyebrow: 'FOR STUDENTS',
    headline: ['Learn what matters.', 'Practice what they love.', 'Grow real independence.'],
    benefits: ['Lessons under 10 minutes', 'Built on their interests', 'Any device, anywhere', 'Reading-level support'],
    cta: { label: 'See the student app →', href: '#' },
    photo: '[PHOTO — real student, 16–20, practicing a real task]',
    image: { src: '/images/photos/audience-students.jpg', alt: 'A student preparing a salad while following a Shepherd lesson on a tablet' },
    stat: { value: '< 10 min', caption: 'per lesson' },
  },
];
