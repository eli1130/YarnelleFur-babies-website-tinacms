import LitterPage from '../../components/LitterPage';
const IMG = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0006.jpg';
const litter = {
  title: 'Saint Berdoodles — Blake', breeder: 'Luke & Eli Yarnelle', generation: 'F1B',
  priceRange: '$1,000 — $2,000', parents: 'Blake × Bamboo',
  photos: [IMG,IMG,IMG,IMG,IMG],
  dob: 'TBD', takeHome: 'TBD',
  size: '75–90+ lbs', grooming: 'Roughly every 4 months',
  temperament: 'Big-hearted, fluffy, endlessly cuddly, great with families and kids',
  puppies: [
    { name:'TBD', gender:'Girl', price:'$1,000' },
    { name:'TBD', gender:'Boy', price:'$1,000' },
    { name:'TBD', gender:'Girl', price:'$2,000' },
    { name:'TBD', gender:'Boy', price:'$1,000' },
    { name:'TBD', gender:'Girl', price:'$1,000' },
  ],
  dam: { name:'Blake', desc:'Standard F1 Saint Berdoodle' },
  sire: { name:'Bamboo', desc:'AKC Standard Poodle' },
  damPhoto: IMG, sirePhoto: IMG,
  prevPhotos: [IMG,IMG,IMG,IMG,IMG,IMG],
  deposit: 400, contact: 'Luke · (260) 213-1685',
};
export default function Page() { return <LitterPage litter={litter} />; }
