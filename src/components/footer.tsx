import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-purple-200 mt-16">
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-blue-600">
          Magic Wormhole is open source software. 
          <a 
            href="https://github.com/magic-wormhole/magic-wormhole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 ml-2"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};