import { client } from '../../tina/__generated__/client';
import { useTina } from 'tinacms/dist/react';
import LitterPage from '../../components/LitterPage';

export default function LitterPageRoute({ data, query, variables }) {
  const { data: tinaData } = useTina({ data, query, variables });
  const node = tinaData.litter;

  const puppies = (node.puppies || []).map(p => ({
    name: p.name || '',
    gender: p.gender || '',
    price: p.price || '',
    status: p.status || '',
    photos: (p.photos || []).map(ph => ph.src).filter(Boolean),
  }));

  const prevPhotos = (node.previousPuppies || []).map(p => p.src).filter(Boolean);
  const showCarousel = node.showCarousel || false;
  const photos = puppies.flatMap(p => p.photos);
  const puppyCarousels = puppies
    .filter(p => p.photos.length > 0)
    .map(p => ({ name: p.name, photos: p.photos, price: p.price }));

  const litter = {
    slug: node.slug,
    title: node.title,
    breeder: node.breeder || '',
    generation: node.generation || '',
    priceRange: node.priceRange || '',
    parents: node.litterTitle || '',
    dob: node.dateOfBirth || '',
    takeHome: node.takeHomeDate || '',
    size: node.estimatedSize || '',
    grooming: node.grooming || '',
    temperament: node.temperament || '',
    deposit: (node.deposit || '').replace('$', ''),
    contact: node.contact || '',
    dam: { name: node.damName || '', desc: node.damDesc || '' },
    sire: { name: node.sireName || '', desc: node.sireDesc || '' },
    damPhoto: node.damPhoto || '',
    sirePhoto: node.sirePhoto || '',
    cardPhoto: node.cardPhoto || '',
    description: node.cardDesc || '',
    photos,
    prevPhotos,
    showCarousel,
    showPrevCarousel: node.showPrevCarousel || false,
    puppyCarousels,
    puppies,
  };

  return <LitterPage litter={litter} />;
}

export async function getStaticPaths() {
  const { data } = await client.queries.litterConnection();
  const paths = data.litterConnection.edges.map(e => ({
    params: { slug: e.node.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data, query, variables } = await client.queries.litter({
    relativePath: `${params.slug}.json`,
  });
  return { props: { data, query, variables } };
}
