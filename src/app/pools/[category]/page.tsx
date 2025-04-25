import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import PoolCard from '@/components/PoolCard';
import poolModels from '@/data/models.json';

// Define the valid categories type
type CategoryType = 'rectangles' | 'freeform' | 'spa-ledges';

// Define the params type for the page
type Props = {
  params: {
    category: CategoryType;
  };
};

// Helper function to capitalize the first letter of a string
const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Generate metadata for the page
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${capitalize(params.category)} Pools | Rainforest Pools USA`,
    description: `Explore our selection of ${params.category} fiberglass pools.`,
  };
};

// The main page component
export default function CategoryPage({ params }: Props) {
  // Filter models by category
  const filteredModels = poolModels.filter(m => m.category === params.category);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={['Pools', params.category]} />
        
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          {capitalize(params.category)} Pools
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model) => (
            <PoolCard key={model.id} model={model} />
          ))}
        </div>
        
        {filteredModels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No pools found in this category. Please check back later.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}

// Generate static params for all categories
export function generateStaticParams() {
  return [
    { category: 'rectangles' },
    { category: 'freeform' },
    { category: 'spa-ledges' }
  ];
}
