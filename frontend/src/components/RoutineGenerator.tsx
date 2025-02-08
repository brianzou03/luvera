import { useState } from "react";
import productsData from "../data/products.json"; // Import the JSON file

interface Product {
  name: string;
  price: string;
  rating: number;
  link: string;
}

interface Step {
  step: string;
  products: Product[];
}

export default function RoutineGenerator() {
  const [routine, setRoutine] = useState<Product[]>([]);

  const generateRoutine = () => {
    const selectedRoutine = productsData.steps.map((step: Step) => {
      // Pick a random product from each step
      return step.products[Math.floor(Math.random() * step.products.length)];
    });

    setRoutine(selectedRoutine);
  };

  return (
    <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-md text-white text-center">
      <h2 className="text-xl font-semibold mb-4">Generate Your Skincare Routine</h2>

      <button
        onClick={generateRoutine}
        className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-md text-white font-medium"
      >
        Show Routine
      </button>

      {routine.length > 0 && (
        <div className="mt-6 p-4 bg-gray-900 rounded-md text-left">
          <h3 className="text-lg font-medium mb-2">Your Skincare Routine</h3>
          <ul className="list-disc list-inside space-y-2">
            {routine.map((product, index) => (
              <li key={index} className="text-gray-300">
                <strong>{product.name}</strong> ({product.price}, ⭐{product.rating}) -{" "}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  Buy Here
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
