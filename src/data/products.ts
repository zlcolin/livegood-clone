export interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
  price: number;
  memberPrice: number;
  description: string;
  shortDescription: string[];
  category: string[];
  features: string[];
  benefits: string[];
  ingredients?: string;
  directions?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    slug: 'bio-active-complete-multi-vitamin-men',
    name: 'Bio-Active Complete Multi-Vitamin For Men',
    image: 'https://ext.same-assets.com/2560348819/476148013.png',
    price: 59.95,
    memberPrice: 29.95,
    description: 'Our Bio-Active Complete Multi-Vitamin For Men is a comprehensive formula designed specifically for men\'s health needs. This scientifically formulated supplement contains 24 essential vitamins and minerals that support immune function, cardiovascular health, and promote healthy aging.',
    shortDescription: [
      '24 Vitamins and Minerals',
      'Immune and Cardiovascular Support',
      'Promotes Healthy Aging'
    ],
    category: ['Vitamins', 'Men\'s Health'],
    features: [
      'Complete vitamin and mineral profile',
      'Optimized dosages for maximum absorption',
      'No artificial colors or preservatives',
      'Formulated specifically for men\'s health needs'
    ],
    benefits: [
      'Supports immune system function',
      'Promotes cardiovascular health',
      'Enhances energy production',
      'Supports healthy aging',
      'Maintains bone density'
    ],
    directions: 'Take 2 capsules daily with food or as directed by your healthcare professional.',
    isBestSeller: true
  },
  {
    id: 2,
    slug: 'bio-active-complete-multi-vitamin-women',
    name: 'Bio-Active Complete Multi-Vitamin for Women with Iron',
    image: 'https://ext.same-assets.com/2560348819/3057610637.png',
    price: 59.95,
    memberPrice: 29.95,
    description: 'Our Bio-Active Complete Multi-Vitamin for Women is a comprehensive formula designed specifically for women\'s health needs. With added iron and 24 essential vitamins and minerals, this formula supports hormone balance, immune function, and promotes healthy aging.',
    shortDescription: [
      '24 Vitamins and Minerals',
      'Immune and Cardiovascular Support',
      'Promotes Healthy Aging'
    ],
    category: ['Vitamins', 'Women\'s Health'],
    features: [
      'Complete vitamin and mineral profile',
      'Added iron for women\'s specific needs',
      'Optimized dosages for maximum absorption',
      'No artificial colors or preservatives'
    ],
    benefits: [
      'Supports immune system function',
      'Promotes cardiovascular health',
      'Supports healthy hormone balance',
      'Enhances energy production',
      'Supports healthy aging',
      'Maintains bone density'
    ],
    directions: 'Take 2 capsules daily with food or as directed by your healthcare professional.',
    isBestSeller: true
  },
  {
    id: 3,
    slug: 'organic-d3-k2',
    name: 'Organic D3-K2 2000',
    image: 'https://ext.same-assets.com/2560348819/1638590167.png',
    price: 49.95,
    memberPrice: 24.95,
    description: 'Our Organic D3-K2 2000 supplement combines two essential vitamins that work synergistically for optimal bone health and cardiovascular support. Vitamin D3 helps with calcium absorption, while K2 ensures that calcium is directed to the bones rather than accumulating in the arteries.',
    shortDescription: [
      'Support Strong Bone Density',
      'Maintain Healthy Heart Function',
      'Highest Quality Vitamins D and K'
    ],
    category: ['Vitamins', 'Bone Health', 'Cardiovascular Health'],
    features: [
      '2000 IU of Vitamin D3 per serving',
      '100 mcg of Vitamin K2 (MK-7) per serving',
      'Organic ingredients',
      'No artificial fillers or preservatives'
    ],
    benefits: [
      'Supports calcium absorption and bone health',
      'Promotes cardiovascular health',
      'Enhances immune system function',
      'Supports muscle function and strength',
      'Promotes healthy mood and cognitive function'
    ],
    directions: 'Take 1 capsule daily with food or as directed by your healthcare professional.',
    isNew: true
  },
  {
    id: 4,
    slug: 'ultra-magnesium-complex',
    name: 'Ultra Magnesium Complex',
    image: 'https://ext.same-assets.com/2560348819/2348031465.png',
    price: 49.95,
    memberPrice: 24.95,
    description: 'Our Ultra Magnesium Complex features a blend of highly bioavailable forms of magnesium to support over 300 enzymatic reactions in the body. This essential mineral plays a crucial role in muscle function, nerve transmission, energy production, and sleep quality.',
    shortDescription: [
      'Maximum Muscle, Nerve and Energy Support',
      'Supports Over 300 Enzyme Reactions',
      'Sleep Support',
      'Most Bio-Available Magnesium'
    ],
    category: ['Minerals', 'Sleep', 'Stress Support'],
    features: [
      'Multiple forms of highly bioavailable magnesium',
      'Comprehensive magnesium support',
      'No artificial fillers or preservatives',
      'Gentle on the digestive system'
    ],
    benefits: [
      'Supports healthy muscle function and recovery',
      'Promotes restful sleep and relaxation',
      'Supports nervous system health',
      'Maintains healthy energy production',
      'Supports cardiovascular health'
    ],
    directions: 'Take 2 capsules daily with food or as directed by your healthcare professional.',
    isBestSeller: true
  },
  {
    id: 5,
    slug: 'organic-super-greens',
    name: 'Organic Super Greens',
    image: 'https://ext.same-assets.com/2560348819/3534926415.png',
    price: 79.95,
    memberPrice: 39.95,
    description: 'Our Organic Super Greens is a comprehensive blend of nutrient-dense greens, vegetables, fruits, and herbs designed to support overall health and wellness. This powerful formula provides essential vitamins, minerals, antioxidants, and phytonutrients to boost energy, support immune function, and promote detoxification.',
    shortDescription: [
      'Immune Protection',
      'Energy and Recovery',
      'Stress Support',
      'Digestive Health',
      'Detox Support'
    ],
    category: ['Superfoods', 'Immune Support', 'Detoxification'],
    features: [
      'Blend of organic greens and vegetables',
      'Rich in antioxidants and phytonutrients',
      'No artificial sweeteners or preservatives',
      'Pleasant natural taste'
    ],
    benefits: [
      'Supports overall immune system function',
      'Promotes healthy energy levels',
      'Supports natural detoxification processes',
      'Enhances digestive health',
      'Provides alkalizing effects on the body'
    ],
    directions: 'Mix 1 scoop with 8-10 oz of water or your favorite beverage daily.',
    isBestSeller: true
  },
  {
    id: 6,
    slug: 'organic-super-reds',
    name: 'Organic Super Reds',
    image: 'https://ext.same-assets.com/2560348819/1893705149.png',
    price: 79.95,
    memberPrice: 39.95,
    description: 'Our Organic Super Reds is a delicious blend of antioxidant-rich berries and fruits designed to support cardiovascular health, enhance circulation, and promote cognitive function. This powerful formula provides essential vitamins, minerals, and polyphenols that support overall wellness.',
    shortDescription: [
      'Cardiovascular Health',
      'Circulation',
      'Sexual Health',
      'Brain and Cognitive Function'
    ],
    category: ['Superfoods', 'Cardiovascular Health', 'Brain Health'],
    features: [
      'Blend of organic berries and fruits',
      'Rich in antioxidants and polyphenols',
      'No artificial sweeteners or preservatives',
      'Delicious natural berry flavor'
    ],
    benefits: [
      'Supports cardiovascular health',
      'Enhances circulation and blood flow',
      'Promotes cognitive function and brain health',
      'Supports sexual health',
      'Provides antioxidant protection against free radicals'
    ],
    directions: 'Mix 1 scoop with 8-10 oz of water or your favorite beverage daily.',
    isNew: true
  },
  {
    id: 7,
    slug: 'organic-coffee',
    name: 'Organic Coffee',
    image: 'https://ext.same-assets.com/2560348819/558655422.png',
    price: 59.95,
    memberPrice: 29.95,
    description: 'Our Organic Coffee is more than just your average cup of joe. This premium blend is infused with functional mushrooms and herbs to support cognitive function, focus, and healthy weight management. Enjoy the rich flavor while boosting your mental clarity and energy levels.',
    shortDescription: [
      'Support a Healthy Mood',
      'Focus and Mental Clarity',
      'Weight Loss',
      'Functional Mushrooms',
      'Tastes Amazing!'
    ],
    category: ['Superfoods', 'Energy', 'Weight Management'],
    features: [
      'Premium organic coffee beans',
      'Infused with lion\'s mane, chaga, and cordyceps mushrooms',
      'No artificial flavors or preservatives',
      'Rich, smooth flavor'
    ],
    benefits: [
      'Enhances mental focus and clarity',
      'Provides clean, sustained energy',
      'Supports healthy metabolism and weight management',
      'Promotes positive mood',
      'Contains antioxidants for overall wellness'
    ],
    directions: 'Use 1-2 tablespoons per 8 oz of hot water. Brew and enjoy!',
    isBestSeller: true
  },
  {
    id: 8,
    slug: 'factor4-anti-inflammatory',
    name: 'Factor4 - Anti-Inflammatory',
    image: 'https://ext.same-assets.com/2560348819/3668535294.png',
    price: 79.95,
    memberPrice: 39.95,
    description: 'Our Factor4 Anti-Inflammatory formula is designed to combat inflammation throughout the body. This comprehensive blend of natural ingredients helps support joint health, immune function, and overall wellness by addressing the root causes of inflammation.',
    shortDescription: [
      'Fights Inflammation',
      'Supports Joint and Organ Health',
      'Promotes Immune Health',
      'Promotes Healthy Circulation'
    ],
    category: ['Immune Support', 'Joint Health', 'Inflammation Support'],
    features: [
      'Comprehensive blend of anti-inflammatory compounds',
      'Clinically studied ingredients',
      'No artificial fillers or preservatives',
      'Holistic approach to inflammation'
    ],
    benefits: [
      'Reduces inflammatory markers in the body',
      'Supports joint comfort and mobility',
      'Enhances immune system function',
      'Promotes healthy circulation',
      'Supports overall organ health'
    ],
    directions: 'Take 2 capsules twice daily with food or as directed by your healthcare professional.',
    isNew: true
  },
  {
    id: 9,
    slug: 'cbd-oil',
    name: 'CBD Oil',
    image: 'https://ext.same-assets.com/2560348819/3323504095.png',
    price: 99.95,
    memberPrice: 49.95,
    description: 'Our premium CBD Oil is formulated for maximum absorption and effectiveness. Available in both 750mg and 1500mg strengths, this full-spectrum hemp extract supports relaxation, comfort, and overall wellness without the psychoactive effects of THC.',
    shortDescription: [
      'Highest Quality',
      'Faster Absorption',
      'Maximum Benefit',
      'Natural or Peppermint Flavor'
    ],
    category: ['CBD', 'Stress Support', 'Sleep'],
    features: [
      'Full-spectrum hemp extract',
      'Available in 750mg or 1500mg strengths',
      'Enhanced absorption formula',
      'Less than 0.3% THC',
      'Choice of natural or peppermint flavor'
    ],
    benefits: [
      'Promotes relaxation and calm',
      'Supports joint comfort and mobility',
      'Enhances sleep quality',
      'Supports balanced mood',
      'Promotes overall wellness'
    ],
    directions: 'Take 1 dropper (1ml) under the tongue, hold for 60 seconds, then swallow. Use once or twice daily as needed.',
    isBestSeller: true
  },
  {
    id: 10,
    slug: 'ageless-renewal',
    name: 'Ageless Renewal',
    image: 'https://ext.same-assets.com/2560348819/340030926.jpeg',
    price: 89.95,
    memberPrice: 44.95,
    description: 'Our Ageless Renewal is a nutrient-rich facial cream designed to restore youthful appearance and vitality to your skin. Packed with natural antioxidants and collagen-promoting ingredients, this formula helps reduce the appearance of fine lines and wrinkles while improving skin texture and elasticity.',
    shortDescription: [
      'Nutrient-Rich Superfood for Your Skin',
      'Packed with Natural Antioxidants',
      'Promote Natural Regeneration of Collagen'
    ],
    category: ['Skin Care', 'Anti-Aging'],
    features: [
      'Rich in antioxidants and peptides',
      'Contains natural moisturizing factors',
      'Free from harsh chemicals and parabens',
      'Suitable for all skin types'
    ],
    benefits: [
      'Reduces the appearance of fine lines and wrinkles',
      'Improves skin elasticity and firmness',
      'Enhances skin hydration and moisture retention',
      'Promotes even skin tone and texture',
      'Protects against environmental damage'
    ],
    directions: 'Apply a small amount to clean face and neck morning and evening, gently massaging until absorbed.',
    isNew: true
  }
];

export default products;
