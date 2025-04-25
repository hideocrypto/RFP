/* eslint-disable react/no-unescaped-entities */
import React from 'react';

interface SpecTableProps {
  model: {
    dimensions: {
      length: number;
      width: number;
      depth: number;
    };
    gallons: number;
    weight: number;
    features?: string[];
  };
}

const SpecTable: React.FC<SpecTableProps> = ({ model }) => {
  return (
    <div className="overflow-hidden bg-white shadow rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Specification
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Value
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Dimensions
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {model.dimensions.length}' × {model.dimensions.width}' × {model.dimensions.depth}'
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Water Capacity
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {model.gallons.toLocaleString()} gallons
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Weight
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {model.weight.toLocaleString()} lbs
            </td>
          </tr>
          {model.features && (
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Features
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <ul className="list-disc pl-5">
                  {model.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
