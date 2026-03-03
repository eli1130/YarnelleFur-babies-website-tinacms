import LitterPage from '../../components/LitterPage';
const IMG = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0009.jpg';
const litter = {
  title: 'Saint Berdoodles — Gracie', breeder: 'Dakoda & Brooke Labenz', generation: 'F1B',
  priceRange: '$1,850 — $2,000', parents: 'Gracie × Pumpkin',
  photos: [IMG,IMG,IMG,IMG,IMG],
  dob: 'TBD', takeHome: 'TBD',
  size: '75–90+ lbs', grooming: 'Roughly every 4 months',
  temperament: 'Gentle giants, cuddly, calm, patient, great with families and children',
  puppies: [
    { name:'TBD', gender:'Girl', price:'$1,850' },
    { name:'TBD', gender:'Boy', price:'$1,850' },
    { name:'TBD', gender:'Girl', price:'$2,000' },
    { name:'TBD', gender:'Boy', price:'$1,850' },
    { name:'TBD', gender:'Girl', price:'$2,000' },
    { name:'TBD', gender:'Boy', price:'$1,850' },
    { name:'TBD', gender:'Girl', price:'$1,850' },
  ],
  dam: { name:'Gracie', desc:'Standard F1 Saint Berdoodle' },
  sire: { name:'Pumpkin', desc:'AKC Standard Poodle' },
  damPhoto: IMG, sirePhoto: IMG,
  prevPhotos: [IMG,IMG,IMG,IMG,IMG,IMG],
  deposit: 400, contact: 'Brooke · (260) 443-9035',
};
export default function Page() { return <LitterPage litter={litter} />; }
