/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Rainforest Pools USA',
  description: 'Find answers to common questions about Rainforest Pools USA fiberglass pools, installation, maintenance, and warranty.',
};

export default function FAQPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-medium text-primary mb-3">
              What makes Rainforest Pools different from other fiberglass pool manufacturers?
            </h2>
            <p className="text-gray-600">
              Rainforest Pools USA uses premium materials with 30 mils of gelcoat and multiple layers of fiberglass for superior strength and durability. Our pools are designed with both aesthetics and functionality in mind, featuring ergonomic seating, slip-resistant surfaces, and a variety of design options to complement any backyard.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium text-primary mb-3">
              How long does installation take?
            </h2>
            <p className="text-gray-600">
              The typical installation process for a Rainforest Pools fiberglass pool takes 2-3 weeks from excavation to filling with water. However, complete backyard projects including decking, landscaping, and additional features may take 4-8 weeks depending on the complexity of the project and weather conditions.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium text-primary mb-3">
              What kind of maintenance do fiberglass pools require?
            </h2>
            <p className="text-gray-600">
              Fiberglass pools require significantly less maintenance than concrete or vinyl liner pools. Regular maintenance includes balancing water chemistry, cleaning the filter, and occasional brushing of the pool walls. The non-porous surface of fiberglass pools prevents algae growth and doesn't require acid washing or resurfacing like concrete pools.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium text-primary mb-3">
              What warranty comes with Rainforest Pools?
            </h2>
            <p className="text-gray-600">
              All Rainforest Pools USA fiberglass pools come with a lifetime structural warranty and a 15-year surface warranty. This industry-leading coverage protects against structural failures and surface blistering, ensuring your investment is protected for years to come. We're confident in our manufacturing process and stand behind our products with one of the best warranties in the industry.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium text-primary mb-3">
              Can fiberglass pools be installed in cold climates?
            </h2>
            <p className="text-gray-600">
              Yes, Rainforest Pools fiberglass pools are designed to withstand freeze-thaw cycles and can be installed in cold climates. Proper winterization is important, and our dealers in colder regions are experienced with the specific requirements for these installations, including appropriate plumbing depth and winterization procedures.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium text-primary mb-3">
              How do I find a dealer or installer in my area?
            </h2>
            <p className="text-gray-600">
              You can find authorized Rainforest Pools USA dealers by using our dealer locator on our website or by contacting our customer service team. We have a network of professional installers across the country who are trained in the proper installation of our fiberglass pools.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium text-primary mb-3">
              Can I customize my fiberglass pool?
            </h2>
            <p className="text-gray-600">
              While the shell shape of fiberglass pools cannot be customized (they are manufactured from pre-designed molds), there are many ways to personalize your pool. You can choose from different color options, add water features, lighting, tanning ledges, spas, and customize the surrounding deck and landscaping to create a unique backyard oasis.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
