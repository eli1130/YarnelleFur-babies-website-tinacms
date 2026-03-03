import LitterPage from '../../components/LitterPage';
const IMG = 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0004.jpg';
const litter = {
  title: 'Merle Mini F1BB Goldendoodles', breeder: 'John & Kathy Yarnelle', generation: 'F1BB',
  priceRange: '$800', parents: 'Princess Diana × Billy',
  photos: [IMG,IMG,IMG,IMG,IMG],
  dob: 'TBD', takeHome: 'TBD',
  size: '15–35 lbs', grooming: 'Every 6–8 weeks',
  temperament: 'Hypoallergenic, playful, affectionate, stunning merle patterns',
  puppies: [
    { name:'TBD', gender:'Girl', price:'$800' },
  ],
  dam: { name:'Princess Diana', desc:'Mini Goldendoodle' },
  sire: { name:'Billy', desc:'AKC Mini Poodle' },
  damPhoto: IMG, sirePhoto: IMG,
  prevPhotos: [IMG,IMG,IMG,IMG],
  deposit: 200, contact: 'Kathy · (260) 410-7925',
};
export default function Page() { return <LitterPage litter={litter} />; }
