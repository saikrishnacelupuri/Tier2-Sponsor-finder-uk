
import React from 'react';
import { Company } from '@/data/companies';

interface ResultsStatsProps {
  filteredCompanies: Company[];
  totalCompanies: number;
  isLoading: boolean;
}

const ResultsStats: React.FC<ResultsStatsProps> = ({ 
  filteredCompanies, 
  totalCompanies,
  isLoading 
}) => {
  if (isLoading) {
    return <div className="text-muted-foreground">Loading results...</div>;
  }

  return (
    <div className="text-muted-foreground pb-2">
      Showing {filteredCompanies.length} {filteredCompanies.length === 1 ? 'company' : 'companies'} 
      {filteredCompanies.length !== totalCompanies ? ` (filtered from ${totalCompanies})` : ''}
    </div>
  );
};

export default ResultsStats;
