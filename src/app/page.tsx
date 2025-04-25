import Image from 'next/image';
import Link from 'next/link';
// Fix the import to avoid circular dependency
import { getPoolsByCategory } from '@/data/poolUtils';

export default function Home() {
  const featuredPools = getPoolsByCategory('rectangles').slice(0, 3);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto mb-12">
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image 
            src="/upload/Neblina Grande Fiberglass Pool by Rainforest Pools USA.jpg" 
            alt="Rainforest Pools USA" 
            fill
            style={{objectFit: 'cover'}}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Rainforest Pools USA</h1>
            <p className="text-xl md:text-2xl mb-8 text-center">Premium Fiberglass Pools for Your Dream Backyard</p>
            <Link 
              href="/pools/rectangles" 
              className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md"
            >
              Explore Our Pools
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Pools Section */}
      <section className="w-full max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Featured Pool Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPools.map((pool) => (
            <div key={pool.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={pool.image}
                  alt={pool.name}
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{pool.name}</h3>
                <p className="text-gray-600 mb-4">{pool.shortDescription}</p>
                <Link 
                  href={`/pools/${pool.category}#${pool.id}`}
                  className="text-primary hover:underline font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link 
            href="/pools/rectangles" 
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            View All Pool Models
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto mb-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">Why Choose Rainforest Pools USA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Our fiberglass pools are built with the highest quality materials for durability and longevity.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Installation</h3>
            <p className="text-gray-600">Enjoy your new pool faster with our efficient installation process.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
            <p className="text-gray-600">We stand behind our products with industry-leading warranty coverage.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-7xl mx-auto mb-12 bg-primary text-white p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Backyard?</h2>
          <p className="text-xl mb-6">Contact us today to get started on your dream pool project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/homeowners/financing" 
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-md"
            >
              Financing Options
            </Link>
            <Link 
              href="/warranty" 
              className="bg-transparent border border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-6 rounded-md transition-colors"
            >
              View Warranty
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
