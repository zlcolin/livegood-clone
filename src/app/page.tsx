import Layout from '@/components/layout/Layout'
import HeroBanner from '@/components/home/HeroBanner'
import FeatureShowcase from '@/components/home/FeatureShowcase'
import ProductShowcase from '@/components/home/ProductShowcase'
import CallToAction from '@/components/home/CallToAction'

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <FeatureShowcase />
      <ProductShowcase />
      <CallToAction />
    </Layout>
  );
}
