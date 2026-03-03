import LitterPage from '../../components/LitterPage';
const IMG = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0007.jpg';
const litter = {
  title: 'F1 Colliedoodles', breeder: 'Luke & Eli Yarnelle', generation: 'F1',
  priceRange: '$650', parents: 'Liberty × Thomas',
  photos: [IMG,IMG,IMG,IMG,IMG],
  dob: 'TBD', takeHome: 'TBD',
  size: '30–55 lbs', grooming: 'Every 6–8 weeks',
  temperament: 'Graceful, intelligent, loyal, rare and beautiful, great family dogs',
  puppies: [
    { name:'TBD', gender:'Girl', price:'$650' },
    { name:'TBD', gender:'Boy', price:'$650' },
  ],
  dam: { name:'Liberty', desc:'F1 Colliedoodle' },
  sire: { name:'Thomas', desc:'AKC Standard Poodle' },
  damPhoto: IMG, sirePhoto: IMG,
  prevPhotos: [IMG,IMG,IMG,IMG],
  deposit: 200, contact: 'Luke · (260) 213-1685',
};
export default function Page() { return <LitterPage litter={litter} />; }
