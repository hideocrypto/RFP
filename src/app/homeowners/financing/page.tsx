/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Financing Options | Rainforest Pools USA',
  description: 'Explore flexible financing options for your new Rainforest Pools USA fiberglass pool, making your dream backyard more affordable.',
};

export default function FinancingPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Financing Your Dream Pool
        </h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            At Rainforest Pools USA, we believe that everyone deserves the opportunity to enjoy the benefits of pool ownership. That's why we've partnered with leading financial institutions to offer flexible financing options that make your dream backyard more affordable.
          </p>
          
          <h2 className="text-2xl font-medium text-primary mt-8 mb-4">
            Financing Options
          </h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-medium text-secondary mb-3">
              Home Improvement Loans
            </h3>
            <p className="mb-4">
              Dedicated pool loans with competitive interest rates and terms up to 15 years. These unsecured loans don't require home equity and offer:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Loan amounts from $15,000 to $100,000</li>
              <li>Fixed monthly payments</li>
              <li>No prepayment penalties</li>
              <li>Quick approval process</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-medium text-secondary mb-3">
              Home Equity Line of Credit (HELOC)
            </h3>
            <p className="mb-4">
              Leverage the equity in your home to finance your pool project with potential tax benefits:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Competitive variable interest rates</li>
              <li>Flexible withdrawal options</li>
              <li>Interest-only payment options available</li>
              <li>Potential tax advantages (consult your tax advisor)</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-medium text-secondary mb-3">
              Cash-Out Refinancing
            </h3>
            <p className="mb-4">
              Replace your existing mortgage with a new, larger loan and use the difference for your pool project:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Potentially lower interest rates than other financing options</li>
              <li>Single monthly payment</li>
              <li>Extended repayment terms</li>
              <li>Possible tax benefits (consult your tax advisor)</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-medium text-primary mt-8 mb-4">
            Financing Process
          </h2>
          
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">
              <strong>Consultation:</strong> Discuss your pool project and budget with your local Rainforest Pools dealer.
            </li>
            <li className="mb-2">
              <strong>Application:</strong> Complete a simple application with our financing partners.
            </li>
            <li className="mb-2">
              <strong>Approval:</strong> Receive a decision, often within 24-48 hours.
            </li>
            <li className="mb-2">
              <strong>Documentation:</strong> Review and sign your financing agreement.
            </li>
            <li className="mb-2">
              <strong>Installation:</strong> Your pool project begins with financing in place.
            </li>
          </ol>
          
          <div className="bg-primary bg-opacity-10 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-medium text-primary mb-3">
              Special Financing Offers
            </h3>
            <p className="mb-4">
              Ask about our seasonal promotions, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>0% interest for 12 months (for qualified buyers)</li>
              <li>No payments for 90 days</li>
              <li>Reduced rate financing for energy-efficient pool equipment</li>
            </ul>
            <p className="text-sm italic">
              *Offers subject to change and credit approval. Contact your local dealer for current promotions.
            </p>
          </div>
          
          <h2 className="text-2xl font-medium text-primary mt-8 mb-4">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 mb-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                What credit score do I need to qualify?
              </h3>
              <p className="text-gray-600">
                While requirements vary by lender and loan type, most financing options require a minimum credit score of 640-680 for competitive rates.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                How long does the approval process take?
              </h3>
              <p className="text-gray-600">
                Many applications receive same-day decisions, with final approval typically within 1-3 business days.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Can I pay off my pool loan early?
              </h3>
              <p className="text-gray-600">
                Yes, our financing partners offer loans with no prepayment penalties, allowing you to pay off your loan early without additional fees.
              </p>
            </div>
          </div>
          
          <div className="bg-secondary bg-opacity-10 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-medium text-secondary mb-3">
              Ready to Take the Next Step?
            </h3>
            <p className="mb-4">
              Contact your local Rainforest Pools USA dealer to discuss financing options for your specific project. Our partners can help you find the right solution to make your dream pool a reality.
            </p>
            <p className="font-medium">
              Call us today at (800) 555-POOL or fill out our contact form to get started.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
