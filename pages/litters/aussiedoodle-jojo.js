import LitterPage from '../../components/LitterPage';
const IMG = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0002.jpg';
const litter = {
  title: 'Toy Aussiedoodles', breeder: 'John & Kathy Yarnelle', generation: 'F1',
  priceRange: '$1,200 — $1,800', parents: 'Jojo × Ash',
  photos: [IMG,IMG,IMG,IMG,IMG],
  dob: 'TBD', takeHome: 'TBD',
  size: '10–20 lbs', grooming: 'Every 6–8 weeks',
  temperament: 'Intelligent, playful, energetic, loyal, great with kids and other pets',
  puppies: [
    { name:'TBD', gender:'Girl', price:'$1,200' },
    { name:'TBD', gender:'Boy', price:'$1,200' },
  ],
  dam: { name:'Jojo', desc:'F1 Toy Aussiedoodle' },
  sire: { name:'Ash', desc:'AKC Toy Poodle' },
  damPhoto: IMG, sirePhoto: IMG,
  prevPhotos: [IMG,IMG,IMG,IMG],
  deposit: 200, contact: 'Brooke · (260) 443-9035',
};
export default function Page() { return <LitterPage litter={litter} />; }
