
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="container py-4 text-center text-muted-foreground">
        <p>UK Visa Sponsorship Finder &copy; {new Date().getFullYear()}</p>
        <p className="text-sm">Helping international professionals find UK companies with sponsorship licenses</p>
      </div>
    </footer>
  );
};

export default Footer;
