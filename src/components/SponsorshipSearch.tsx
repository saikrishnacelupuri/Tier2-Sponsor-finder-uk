
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import CompanyList from './CompanyList';
import ResultsStats from './ResultsStats';
import { useCompanies } from '@/hooks/useCompanies';
import { getUniqueIndustries, getUniqueTowns, getLastUpdatedDate } from '@/services/sponsorshipService';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from 'lucide-react';

const SponsorshipSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sectors, setSectors] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);

  const { companies: filteredCompanies, allCompanies, isLoading, error } = useCompanies({
    searchTerm,
    selectedSector,
    selectedLocation,
    selectedStatus
  });

  useEffect(() => {
    if (allCompanies.length > 0) {
      // Get unique sectors and locations for filters
      setSectors(getUniqueIndustries(allCompanies));
      setLocations(getUniqueTowns(allCompanies));
    }
  }, [allCompanies]);

  const resetFilters = () => {
    setSelectedSector('All');
    setSelectedLocation('All');
    setSelectedStatus('All');
    setSearchTerm('');
  };

  return (
    <div className="container py-6 space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold">Search for UK Companies with Sponsorship Licenses</h2>
          <p className="text-muted-foreground text-sm">
            Data source: UK Government Register of Licensed Sponsors (Workers) - Last updated: {getLastUpdatedDate()}
          </p>
        </div>
        
        <Alert className="mb-4 bg-blue-50">
          <Info className="h-4 w-4" />
          <AlertDescription>
            This app uses real data from the official UK Government's register of licensed sponsors.
          </AlertDescription>
        </Alert>
        
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
            sectors={sectors}
            locations={locations}
          />
        </div>
      </div>
      
      <div className="pt-4">
        <ResultsStats 
          filteredCompanies={filteredCompanies} 
          totalCompanies={allCompanies.length}
          isLoading={isLoading}
          error={error}
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
