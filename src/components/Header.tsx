
import React from 'react';
import { Building, Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="border-b">
      <div className="container py-4 flex items-center space-x-2">
        <Globe className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-2xl font-bold">UK Visa Sponsorship Finder</h1>
          <p className="text-sm text-muted-foreground">Official UK Government Licensed Sponsors Data</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
