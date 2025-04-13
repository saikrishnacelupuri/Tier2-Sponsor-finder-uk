
import React from 'react';
import { SponsorshipCompany } from '@/types';

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
    return <div className="pb-4 text-muted-foreground">Unable to load companies data.</div>;
  }

  return (
    <div className="pb-4 text-muted-foreground">
      Showing {filteredCompanies.length} of {totalCompanies} companies
    </div>
  );
};

export default ResultsStats;
