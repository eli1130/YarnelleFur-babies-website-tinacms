import LitterPage from '../../components/LitterPage';
const IMG = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0001.jpg';
const litter = {
  title: 'Saint Berdoodles', breeder: 'John & Kathy Yarnelle', generation: 'F1B',
  priceRange: '$1,200 — $2,000', parents: 'Lucy × Bonsai',
  photos: [IMG,IMG,IMG,IMG,IMG],
  dob: 'January 7, 2026', takeHome: 'March 4, 2026',
  size: '75–90+ lbs', grooming: 'Roughly every 4 months',
  temperament: 'Friendly, watchful, calm, gentle, sweet, love to cuddle, incredibly friendly with other dogs, cats, and kiddos',
  puppies: [
    { name:'Leena', gender:'Girl', price:'$1,200' },
    { name:'Lilly', gender:'Girl', price:'$1,200' },
    { name:'Liam', gender:'Boy', price:'$1,200' },
    { name:'Lachlan', gender:'Boy', price:'$1,200' },
    { name:'Laiken', gender:'Girl', price:'$2,000' },
  ],
  dam: { name:'Lucy', desc:'Standard F1 Saint Berdoodle · 100 lbs' },
  sire: { name:'Bonsai', desc:'AKC Blue Merle Standard Poodle · 60 lbs' },
  damPhoto: IMG, sirePhoto: IMG,
  prevPhotos: [IMG,IMG,IMG,IMG,IMG,IMG,IMG],
  deposit: 400, contact: 'Kathy · (260) 410-7925',
};
export default function Page() { return <LitterPage litter={litter} />; }
