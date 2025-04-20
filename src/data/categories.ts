export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  featured?: boolean;
}

const categories: Category[] = [
  {
    id: 'vitamins',
    name: 'Vitamins',
    slug: 'vitamins',
    description: 'Essential vitamins to support overall health and wellness.',
    featured: true
  },
  {
    id: 'minerals',
    name: 'Minerals',
    slug: 'minerals',
    description: 'Key minerals for optimal body function and performance.',
    featured: true
  },
  {
    id: 'superfoods',
    name: 'Superfoods',
    slug: 'superfoods',
    description: 'Nutrient-dense superfoods to boost health and vitality.',
    featured: true
  },
  {
    id: 'cbd',
    name: 'CBD',
    slug: 'cbd',
    description: 'Premium CBD products for relaxation and wellness support.',
    featured: true
  },
  {
    id: 'skin-care',
    name: 'Skin Care',
    slug: 'skin-care',
    description: 'Natural skin care products for radiant, healthy skin.',
    featured: true
  },
  {
    id: 'mens-health',
    name: 'Men\'s Health',
    slug: 'mens-health',
    description: 'Targeted supplements for men\'s specific health needs.'
  },
  {
    id: 'womens-health',
    name: 'Women\'s Health',
    slug: 'womens-health',
    description: 'Specialized formulas for women\'s unique health requirements.'
  },
  {
    id: 'bone-health',
    name: 'Bone Health',
    slug: 'bone-health',
    description: 'Support for strong, healthy bones and skeletal system.'
  },
  {
    id: 'cardiovascular-health',
    name: 'Cardiovascular Health',
    slug: 'cardiovascular-health',
    description: 'Supplements for heart health and cardiovascular function.'
  },
  {
    id: 'immune-support',
    name: 'Immune Support',
    slug: 'immune-support',
    description: 'Products to strengthen and support immune system function.'
  },
  {
    id: 'brain-health',
    name: 'Brain Health',
    slug: 'brain-health',
    description: 'Formulas to support cognitive function and brain health.'
  },
  {
    id: 'stress-support',
    name: 'Stress Support',
    slug: 'stress-support',
    description: 'Supplements to promote relaxation and stress management.'
  },
  {
    id: 'sleep',
    name: 'Sleep',
    slug: 'sleep',
    description: 'Products to support healthy sleep patterns and quality rest.'
  },
  {
    id: 'energy',
    name: 'Energy',
    slug: 'energy',
    description: 'Supplements to boost energy and enhance performance.'
  },
  {
    id: 'weight-management',
    name: 'Weight Management',
    slug: 'weight-management',
    description: 'Products to support healthy weight maintenance and metabolism.'
  },
  {
    id: 'detoxification',
    name: 'Detoxification',
    slug: 'detoxification',
    description: 'Formulas to support the body\'s natural detoxification processes.'
  },
  {
    id: 'joint-health',
    name: 'Joint Health',
    slug: 'joint-health',
    description: 'Supplements for joint comfort, mobility, and flexibility.'
  },
  {
    id: 'inflammation-support',
    name: 'Inflammation Support',
    slug: 'inflammation-support',
    description: 'Products to help manage and reduce inflammation in the body.'
  },
  {
    id: 'anti-aging',
    name: 'Anti-Aging',
    slug: 'anti-aging',
    description: 'Formulas to support healthy aging and vibrant longevity.'
  }
];

export default categories;
