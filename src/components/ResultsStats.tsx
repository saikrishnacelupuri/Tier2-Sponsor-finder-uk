
import React from 'react';
import { SponsorshipCompany } from '@/types';
import { AlertCircle } from 'lucide-react';

interface ResultsStatsProps {
  filteredCompanies: SponsorshipCompany[];
  totalCompanies: number;
  isLoading: boolean;
  error?: string | null;
}

const ResultsStats: React.FC<ResultsStatsProps> = ({ 
  filteredCompanies, 
  totalCompanies,
  isLoading,
  error
}) => {
  if (isLoading) {
    return <div className="pb-4 text-muted-foreground">Loading companies...</div>;
  }

  if (error) {
    return (
      <div className="pb-4 text-red-500 flex items-center">
        <AlertCircle className="h-4 w-4 mr-2" />
        <span>Unable to load companies data. Using demo data instead.</span>
      </div>
    );
  }

  return (
    <div className="pb-4 text-muted-foreground">
      Showing {filteredCompanies.length} of {totalCompanies} companies
    </div>
  );
};

export default ResultsStats;
