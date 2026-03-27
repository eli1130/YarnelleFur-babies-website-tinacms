import { client } from '../../tina/__generated__/client';
import LitterPage from '../../components/LitterPage';

export default function LitterPageRoute({ litter }) {
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
  const { data } = await client.queries.litter({ relativePath: `${params.slug}.json` });
  const node = data.litter;

  return {
    props: {
      litter: {
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
        deposit: node.deposit || '',
        contact: node.contact || '',
        dam: { name: node.damName || '', desc: node.damDesc || '' },
        sire: { name: node.sireName || '', desc: node.sireDesc || '' },
        damPhoto: node.damPhoto || '',
        sirePhoto: node.sirePhoto || '',
        cardPhoto: node.cardPhoto || '',
        photos: [],
        prevPhotos: [],
        showCarousel: false,
        showPrevCarousel: false,
        puppyCarousels: [],
        puppies: (node.puppies || []).map(p => ({
          name: p.name || '',
          gender: p.gender || '',
          price: p.price || '',
          status: p.status || '',
        })),
      },
    },
  };
}
