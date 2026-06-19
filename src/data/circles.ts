export const circles = [
  {
    id: 'adhd-focus-circle',
    title: 'ADHD Focus Circle',
    icon: '🧠',
    color: '#5c6b4a',
    category: 'ADHD',
    facilitator: {
      name: 'Dr. Sarah Johnson',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
      credentials: 'Clinical Psychologist',
      experience: '10 years',
      specialization: 'ADHD Specialist',
      bio: 'Dr. Johnson combines CBT with mindfulness-based strategies to help adults with ADHD build sustainable routines.'
    },
    format: 'Online',
    frequency: 'Weekly',
    maxMembers: 15,
    currentMembers: 12,
    nextSession: '2026-06-24T19:00:00',
    level: 'Beginner Friendly',
    goal: 'Learn practical ADHD strategies and build accountability with peers.',
    challenges: ['Procrastination', 'Time management', 'Focus', 'Organization'],
    whoIsItFor: 'Designed for adults who struggle with focus, planning, task completion, and daily organization.',
    whatYoullWorkOn: [
      'Building routines',
      'Managing overwhelm',
      'Setting realistic goals',
      'Accountability',
      'Reducing procrastination'
    ],
    sessionStructure: [
      { duration: '10 min', activity: 'Check-in' },
      { duration: '20 min', activity: 'Topic discussion' },
      { duration: '20 min', activity: 'Group exercises' },
      { duration: '10 min', activity: 'Action planning' }
    ],
    rules: ['Confidentiality', 'Respect', 'No judgment', 'Active participation'],
    price: '$45',
    pricingModel: 'Per session',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop'
  },
  {
    id: 'burnout-recovery',
    title: 'Burnout Recovery Circle',
    icon: '💚',
    color: '#8a7d6b',
    category: 'Burnout & Exhaustion',
    facilitator: {
      name: 'Marcus Williams',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
      credentials: 'LCSW, Certified Group Therapist',
      experience: '8 years',
      specialization: 'Stress & Burnout',
      bio: 'Marcus helps professionals recover from emotional exhaustion and rebuild healthy boundaries.'
    },
    format: 'Hybrid',
    frequency: 'Every 2 weeks',
    maxMembers: 10,
    currentMembers: 7,
    nextSession: '2026-06-25T18:00:00',
    level: 'Open to all',
    goal: 'Recover from emotional exhaustion and rebuild healthy routines.',
    challenges: ['Burnout', 'Stress', 'Work-Life Balance', 'Fatigue'],
    whoIsItFor: 'For professionals feeling emotionally drained, overwhelmed, or disconnected from their work and personal life.',
    whatYoullWorkOn: [
      'Recognizing burnout signs',
      'Setting boundaries',
      'Energy management',
      'Self-care routines',
      'Rebuilding motivation'
    ],
    sessionStructure: [
      { duration: '10 min', activity: 'Grounding exercise' },
      { duration: '25 min', activity: 'Stress mapping discussion' },
      { duration: '15 min', activity: 'Boundary-setting practice' },
      { duration: '10 min', activity: 'Recovery goal setting' }
    ],
    rules: ['Confidentiality', 'Respect', 'No judgment', 'Active participation'],
    price: '$55',
    pricingModel: 'Per session',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop'
  },
  {
    id: 'grief-support-circle',
    title: 'Good Grief',
    icon: '🌿',
    color: '#6b8e6b',
    category: 'Grief & Loss',
    facilitator: {
      name: 'Jonathan Grey',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      credentials: 'LCSW, Grief Specialist',
      experience: '12 years',
      specialization: 'Bereavement & Loss',
      bio: 'Jonathan guides individuals through the complexities of grief with compassion and evidence-based therapeutic approaches.'
    },
    format: 'Online',
    frequency: 'Weekly',
    maxMembers: 8,
    currentMembers: 4,
    nextSession: '2026-06-26T20:00:00',
    level: 'Beginner Friendly',
    goal: 'Find support and healing through shared grief experiences.',
    challenges: ['Loss', 'Bereavement', 'Life transitions', 'Loneliness'],
    whoIsItFor: 'Adults navigating the loss of a loved one, recent divorce, or major life transition.',
    whatYoullWorkOn: [
      'Processing grief stages',
      'Building coping strategies',
      'Finding community support',
      'Rebuilding daily routines'
    ],
    sessionStructure: [
      { duration: '10 min', activity: 'Opening ritual' },
      { duration: '25 min', activity: 'Sharing circle' },
      { duration: '15 min', activity: 'Coping skill practice' },
      { duration: '10 min', activity: 'Closing reflection' }
    ],
    rules: ['Confidentiality', 'Respect', 'No judgment', 'Active participation'],
    price: '$40',
    pricingModel: 'Per session',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop'
  },
  {
    id: 'anxiety-support-circle',
    title: 'Anxiety Support Circle',
    icon: '💙',
    color: '#7a9e9f',
    category: 'Anxiety & Stress',
    facilitator: {
      name: 'Dr. Sarah Chen',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
      credentials: 'Clinical Psychologist',
      experience: '10 years',
      specialization: 'Anxiety & Trauma',
      bio: 'Dr. Chen integrates CBT with mindfulness to help clients manage anxiety and reclaim calm.'
    },
    format: 'Online',
    frequency: 'Weekly',
    maxMembers: 10,
    currentMembers: 6,
    nextSession: '2026-06-27T19:00:00',
    level: 'Open to all',
    goal: 'Develop practical tools for managing anxiety in a supportive group setting.',
    challenges: ['Social anxiety', 'Panic', 'Stress management', 'Overthinking'],
    whoIsItFor: 'Adults experiencing anxiety, panic, or overwhelming stress who want evidence-based strategies.',
    whatYoullWorkOn: [
      'Recognizing anxiety triggers',
      'Breathing and grounding techniques',
      'Cognitive reframing',
      'Building a support network'
    ],
    sessionStructure: [
      { duration: '10 min', activity: 'Mindful arrival' },
      { duration: '25 min', activity: 'Skill building' },
      { duration: '15 min', activity: 'Group practice' },
      { duration: '10 min', activity: 'Take-home exercise' }
    ],
    rules: ['Confidentiality', 'Respect', 'No judgment', 'Active participation'],
    price: '$50',
    pricingModel: 'Per session',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop'
  },
  {
    id: 'relationship-growth',
    title: 'Relationship Growth',
    icon: '💬',
    color: '#b0a594',
    category: 'Relationships',
    facilitator: {
      name: 'Amara Okafor',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
      credentials: 'LMFT, Couples Therapist',
      experience: '7 years',
      specialization: 'Relationships & Communication',
      bio: 'Amara helps individuals and couples develop healthier communication patterns and deeper connection.'
    },
    format: 'Online',
    frequency: 'Every 2 weeks',
    maxMembers: 10,
    currentMembers: 7,
    nextSession: '2026-06-28T19:00:00',
    level: 'Open to all',
    goal: 'Improve communication skills and build healthier relationship dynamics.',
    challenges: ['Communication', 'Conflict resolution', 'Boundaries', 'Trust'],
    whoIsItFor: 'Anyone looking to improve their relationships, whether romantic, familial, or professional.',
    whatYoullWorkOn: [
      'Active listening skills',
      'Conflict de-escalation',
      'Setting healthy boundaries',
      'Expressing needs clearly'
    ],
    sessionStructure: [
      { duration: '10 min', activity: 'Warm-up exercise' },
      { duration: '25 min', activity: 'Role-play scenarios' },
      { duration: '15 min', activity: 'Group feedback' },
      { duration: '10 min', activity: 'Commitment practice' }
    ],
    rules: ['Confidentiality', 'Respect', 'No judgment', 'Active participation'],
    price: '$55',
    pricingModel: 'Per session',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop'
  },
  {
    id: 'life-transition-circle',
    title: 'Life Transition Circle',
    icon: '🌱',
    color: '#8fbc8f',
    category: 'Life Transition',
    facilitator: {
      name: 'Daniel Tan',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      credentials: 'LCSW, Career Counselor',
      experience: '9 years',
      specialization: 'Life Transitions',
      bio: 'Daniel guides clients through major life changes with clarity, purpose, and renewed confidence.'
    },
    format: 'Online',
    frequency: 'Weekly',
    maxMembers: 8,
    currentMembers: 3,
    nextSession: '2026-06-29T20:00:00',
    level: 'Beginner Friendly',
    goal: 'Navigate major life changes with clarity and community support.',
    challenges: ['Career change', 'Relocation', 'Identity', 'Uncertainty'],
    whoIsItFor: 'Adults facing career shifts, moves, retirement, or any transition that feels overwhelming.',
    whatYoullWorkOn: [
      'Clarifying values and goals',
      'Managing uncertainty',
      'Building resilience',
      'Creating action plans'
    ],
    sessionStructure: [
      { duration: '10 min', activity: 'Check-in' },
      { duration: '20 min', activity: 'Topic discussion' },
      { duration: '20 min', activity: 'Vision mapping' },
      { duration: '10 min', activity: 'Next steps' }
    ],
    rules: ['Confidentiality', 'Respect', 'No judgment', 'Active participation'],
    price: '$45',
    pricingModel: 'Per session',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop'
  }
];