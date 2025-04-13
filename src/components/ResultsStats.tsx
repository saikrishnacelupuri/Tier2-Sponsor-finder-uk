
import React from 'react';
import { SponsorshipCompany } from '@/types';

interface ResultsStatsProps {
  filteredCompanies: SponsorshipCompany[];
  totalCompanies: number;
  isLoading: boolean;
}

const ResultsStats: React.FC<ResultsStatsProps> = ({ 
  filteredCompanies, 
  totalCompanies,
  isLoading
}) => {
  if (isLoading) {
    return <div className="pb-4 text-muted-foreground">Loading companies...</div>;
  }

  return (
    <div className="pb-4 text-muted-foreground">
      Showing {filteredCompanies.length} of {totalCompanies} companies
    </div>
  );
};

export default ResultsStats;
