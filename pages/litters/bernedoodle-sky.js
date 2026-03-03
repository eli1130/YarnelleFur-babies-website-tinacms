import LitterPage from '../../components/LitterPage';
const IMG = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0011.jpg';
const litter = {
  title: 'Medium F1B Bernedoodles', breeder: 'Hunter & Sarah Nicodemus', generation: 'F1B',
  priceRange: '$1,500', parents: 'Sky × Thor',
  photos: [IMG,IMG,IMG,IMG,IMG],
  dob: 'TBD', takeHome: 'TBD',
  size: '35–55 lbs', grooming: 'Every 6–8 weeks',
  temperament: 'Ideal mid-size family dog, plush coat, gentle nature, great with kids',
  puppies: [
    { name:'TBD', gender:'Girl', price:'$1,500' },
  ],
  dam: { name:'Sky', desc:'Medium Bernedoodle' },
  sire: { name:'Thor', desc:'AKC Mini Poodle' },
  damPhoto: IMG, sirePhoto: IMG,
  prevPhotos: [IMG,IMG,IMG,IMG],
  deposit: 300, contact: 'Sarah · (260) 494-0405',
};
export default function Page() { return <LitterPage litter={litter} />; }
