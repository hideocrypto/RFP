import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import { EmbedForm } from '@/components';

export const metadata: Metadata = {
  title: 'Order Form for Builders | Rainforest Pools USA',
  description: 'Online order form for authorized builders of Rainforest Pools USA fiberglass pools.',
};

export default function BuilderOrderPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Order Form for Builders
        </h1>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <EmbedForm 
            src="https://www.superform.spot-nik.com/form/67f092bff7495ed0964f9b81"
            title="Builder Order Form"
            width={680}
            height={900}
          />
        </div>
      </div>
    </Layout>
  );
}
