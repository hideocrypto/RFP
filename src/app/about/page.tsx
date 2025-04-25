import React from 'react';
import { Layout } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Rainforest Pools USA | Premium Fiberglass Pools',
  description: 'Learn about Rainforest Pools USA, our history, manufacturing process, and commitment to quality in fiberglass pool construction.',
};

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl max-w-none">
          <h1>About Rainforest Pools USA</h1>
          
          <p>
            Founded in 2005, Rainforest Pools USA has become a leading manufacturer of premium fiberglass pools and spas in the United States. Our mission is to create beautiful, durable, and low-maintenance swimming pools that bring joy to families for generations.
          </p>
          
          <h2>Our Story</h2>
          
          <p>
            What began as a small family business has grown into one of the most respected names in the fiberglass pool industry. Our founder, with over 30 years of experience in pool construction, recognized the advantages of fiberglass over traditional concrete and vinyl liner pools. This insight led to the development of our proprietary manufacturing process that combines cutting-edge technology with artisanal craftsmanship.
          </p>
          
          <h2>Manufacturing Excellence</h2>
          
          <p>
            At our state-of-the-art facility in Florida, we manufacture each pool shell with meticulous attention to detail. Our pools feature:
          </p>
          
          <ul>
            <li>30 mils of premium gelcoat for superior durability and color retention</li>
            <li>Multiple layers of hand-laid fiberglass for exceptional strength</li>
            <li>Proprietary resin formulation that prevents osmosis and blistering</li>
            <li>Reinforced structure that exceeds industry standards</li>
            <li>Rigorous quality control at every stage of production</li>
          </ul>
          
          <h2>Environmental Commitment</h2>
          
          <p>
            We are committed to environmentally responsible manufacturing practices. Our production process minimizes waste and energy consumption, and we use eco-friendly materials whenever possible. Rainforest Pools require fewer chemicals and less energy to maintain than traditional pools, making them a greener choice for environmentally conscious homeowners.
          </p>
          
          <h2>Our Team</h2>
          
          <p>
            Our success is built on the expertise and dedication of our team. From our skilled craftspeople who hand-lay each layer of fiberglass to our design engineers who create innovative new models, everyone at Rainforest Pools USA is committed to excellence. Our installation partners across the country are carefully selected and trained to ensure that every pool is installed to our exacting standards.
          </p>
          
          <h2>Quality Assurance</h2>
          
          <p>
            Every Rainforest pool undergoes rigorous testing and inspection before leaving our facility. Our quality control process includes:
          </p>
          
          <ul>
            <li>Thickness testing at multiple points</li>
            <li>Structural integrity verification</li>
            <li>Gel coat quality inspection</li>
            <li>Dimensional accuracy measurement</li>
            <li>Final visual inspection by senior quality control staff</li>
          </ul>
          
          <p>
            This commitment to quality allows us to offer one of the best warranties in the industry: a lifetime structural warranty and a 15-year surface warranty.
          </p>
          
          <h2>Visit Our Showroom</h2>
          
          <p>
            We invite you to visit our showroom to see our pools in person and speak with our knowledgeable staff. Contact us today to schedule an appointment or to find a dealer near you.
          </p>
        </article>
      </div>
    </Layout>
  );
}
