
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import CompanyList from './CompanyList';
import ResultsStats from './ResultsStats';
import { companies } from '@/data/companies';
import { useCompanies } from '@/hooks/useCompanies';

const SponsorshipSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const { companies: filteredCompanies, isLoading, error } = useCompanies({
    searchTerm,
    selectedSector,
    selectedLocation,
    selectedStatus
  });

  const resetFilters = () => {
    setSelectedSector('All');
    setSelectedLocation('All');
    setSelectedStatus('All');
    setSearchTerm('');
  };

  return (
    <div className="container py-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Search for UK Companies with Sponsorship Licenses</h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <div className="py-2">
          <h3 className="text-lg font-medium mb-3">Filter Results</h3>
          <Filters
            selectedSector={selectedSector}
            setSelectedSector={setSelectedSector}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            resetFilters={resetFilters}
          />
        </div>
      </div>
      
      <div className="pt-4">
        <ResultsStats 
          filteredCompanies={filteredCompanies} 
          totalCompanies={companies.length}
          isLoading={isLoading}
        />
        <CompanyList 
          companies={filteredCompanies} 
          isLoading={isLoading} 
          error={error} 
        />
      </div>
    </div>
  );
};

export default SponsorshipSearch;
