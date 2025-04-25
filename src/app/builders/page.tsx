import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import { EmbedForm } from '@/components';

export const metadata: Metadata = {
  title: 'Current Builders / Resource Center | Rainforest Pools USA',
  description: 'Resources for current builders and information for potential dealers of Rainforest Pools USA fiberglass pools.',
};

export default function BuildersPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Current Builders / Resource Center
        </h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-700 mb-4">
            Builder Resources
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd"></path>
              </svg>
              <span>Model Specifications (coming soon)</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd"></path>
              </svg>
              <span>Engineering Drawings (coming soon)</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd"></path>
              </svg>
              <span>Line Drawings (coming soon)</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-medium text-gray-700 mb-6">
            Potential Dealer Inquiry
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <EmbedForm 
              src="https://forms.monday.com/forms/embed/ed022dd315148d85ef88401a4fced7f3?r=use1"
              title="Potential Dealer Inquiry"
              width={650}
              height={500}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
