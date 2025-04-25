"use client";

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PoolModel {
  id: string;
  model: string;
  category: string;
  description?: string;
  filename: string;
  alt: string;
  dimensions: {
    length: number;
    width: number;
    depth: number;
  };
  gallons: number;
  weight: number;
  features?: string[];
}

interface PoolCardProps {
  model: PoolModel;
}

const PoolCard: React.FC<PoolCardProps> = ({ model }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48">
        <Image
          src={`/upload/${model.filename}` || '/images/pools/placeholder.jpg'}
          alt={model.alt || `${model.model} fiberglass pool by Rainforest Pools USA`}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
          {model.gallons.toLocaleString()} gallons
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{model.model}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {model.description || "A beautiful fiberglass pool design that's perfect for your backyard oasis. Contact us for more details about this model's features and benefits."}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {model.dimensions.length}' × {model.dimensions.width}' × {model.dimensions.depth}'
          </span>
          <Link 
            href={`/pools/${model.category}/${model.id}`}
            className="bg-secondary hover:bg-primary text-white text-sm font-medium px-3 py-1 rounded transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PoolCard;
