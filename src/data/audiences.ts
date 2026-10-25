// "One platform for everyone in a student's corner" (AudienceRows): what each audience gets.
// Approved copy from the client's 26 Oct 2026 feedback. Photos are placeholders; the client is sourcing
// licensed photography of transition-age students and educators.
export const audienceSlides = [
  {
    id: 'audience-schools', tab: 'For schools', tone: 'brand' as const,
    eyebrow: 'FOR SCHOOLS',
    headline: ['See student progress.', 'Make informed decisions.'],
    benefits: [
      'Student transition progress and performance reports',
      'Individual and classroom-level insights',
      'Evidence to support IEP reviews and transition planning',
      'Consistent reporting across classrooms',
    ],
    cta: { label: 'Explore for schools →', href: '/schools' },
    photo: '[PHOTO: real special education leader with students]',
    image: { src: '/images/photos/audience-schools.webp', alt: 'A teacher working with a table of students in a bright classroom' },
    label: 'Student progress, clearly documented',
  },
  {
    id: 'audience-teachers', tab: 'For teachers', tone: 'yellow' as const,
    eyebrow: 'FOR TEACHERS',
    headline: ['Individualized learning.', 'Without the extra work.'],
    benefits: [
      'Personalized learning plans for each student',
      'Ready-to-use lessons tailored to student interests and abilities',
      'Automatic progress tracking and documentation',
    ],
    cta: { label: 'Start your free trial →', href: '/teachers#trial' },
    photo: '[PHOTO: real teacher working with a small group]',
    image: { src: '/images/photos/audience-teachers.webp', alt: 'Two educators reading together with a student at a classroom table' },
    label: 'Personalized lessons, ready to teach',
  },
  {
    id: 'audience-students', tab: 'For students', tone: 'orange' as const,
    eyebrow: 'FOR STUDENTS',
    headline: ["Life skills learning they'll actually enjoy."],
    benefits: [
      'Modern, intuitive interface designed for students',
      'Short, engaging lessons built around their interests',
      'Lessons that build practical, real-world skills',
      "Personalized to each student's abilities and learning level",
    ],
    cta: { label: 'See the student app →', href: '/the-app' },
    photo: '[PHOTO: real student, 16–20, practicing a real task]',
    image: { src: '/images/photos/audience-students.webp', alt: 'An adult reading a book with a young person in a library' },
    label: 'Personalized learning, made engaging',
  },
];
