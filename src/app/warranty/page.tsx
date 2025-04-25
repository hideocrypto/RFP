/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Layout, EmbedForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Warranty Information | Rainforest Pools USA',
  description: 'Learn about our lifetime structural warranty and 15-year surface warranty for Rainforest Pools USA fiberglass pools and spas.',
};

export default function WarrantyPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl max-w-none mb-12">
          <h1>Warranty Information</h1>
          
          <p>
            At Rainforest Pools USA, we stand behind the quality of our products with one of the strongest warranties in the industry. Our commitment to excellence in materials and craftsmanship allows us to offer comprehensive coverage that gives you peace of mind with your investment.
          </p>
          
          <h2>Lifetime Structural Warranty</h2>
          
          <p>
            Every Rainforest Pools USA fiberglass pool comes with a lifetime structural warranty that covers the structural integrity of the pool shell. This warranty is transferable to subsequent homeowners, adding value to your property.
          </p>
          
          <p>
            The structural warranty covers:
          </p>
          
          <ul>
            <li>Structural failure due to manufacturing defects</li>
            <li>Delamination of fiberglass layers</li>
            <li>Structural cracks that compromise the integrity of the pool</li>
            <li>Bulges or other structural deformations not caused by improper installation</li>
          </ul>
          
          <h2>15-Year Surface Warranty</h2>
          
          <p>
            Our premium gelcoat surface is backed by a 15-year warranty that protects against:
          </p>
          
          <ul>
            <li>Blistering or bubbling under normal use conditions</li>
            <li>Fading or color loss beyond normal weathering</li>
            <li>Crazing or cracking of the gelcoat surface</li>
            <li>Delamination of the gelcoat from the underlying fiberglass</li>
          </ul>
          
          <p>
            This warranty is prorated after the first five years, with 100% coverage for years 1-5, 75% for years 6-10, and 50% for years 11-15.
          </p>
          
          <h2>Equipment Warranty</h2>
          
          <p>
            Pumps, filters, heaters, and other equipment are covered by their respective manufacturers' warranties, typically ranging from 1-3 years. Your local dealer will provide specific warranty information for all equipment installed with your pool.
          </p>
          
          <h2>Installation Warranty</h2>
          
          <p>
            Installation is covered by your local authorized dealer. Most dealers offer a 1-3 year warranty on workmanship. This typically covers:
          </p>
          
          <ul>
            <li>Plumbing connections and equipment installation</li>
            <li>Backfill settlement issues</li>
            <li>Deck or coping installation (if performed by the dealer)</li>
            <li>Other aspects of installation workmanship</li>
          </ul>
          
          <h2>Warranty Registration</h2>
          
          <p>
            To activate your warranty, you must register your pool within 30 days of installation completion. Registration can be completed online using the form below or by mailing in the warranty card provided with your pool documentation.
          </p>
          
          <h2>Warranty Claims</h2>
          
          <p>
            In the unlikely event that you need to make a warranty claim, please contact your local dealer first. They will assess the issue and coordinate with our warranty department if necessary. For direct warranty assistance, you can contact our customer service department at warranty@rainforestpoolsusa.com or call 1-800-555-POOL.
          </p>
          
          <h2>Warranty Limitations</h2>
          
          <p>
            Our warranties do not cover damage resulting from:
          </p>
          
          <ul>
            <li>Improper installation not following our specifications</li>
            <li>Draining the pool without professional supervision</li>
            <li>Acts of nature such as floods, earthquakes, or ground movement</li>
            <li>Improper water chemistry maintenance</li>
            <li>Modifications to the original structure</li>
            <li>Accidents or abuse</li>
          </ul>
          
          <p>
            For complete warranty details, please refer to the warranty documentation provided with your pool or contact our customer service department.
          </p>
        </article>
        
        <div className="my-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Register Your Warranty</h2>
          <p className="mb-6">Complete the form below to register your Rainforest Pools USA product and activate your warranty coverage.</p>
          
          <EmbedForm 
            src="https://forms.monday.com/forms/embed/ed022dd315148d85ef88401a4fced7f3?r=use1" 
            title="Warranty Registration" 
            width={650} 
            height={500} 
          />
        </div>
      </div>
    </Layout>
  );
}
