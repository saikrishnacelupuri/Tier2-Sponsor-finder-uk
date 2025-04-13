
import { useState, useEffect } from 'react';
import { Company, companies } from '../data/companies';

interface UseCompaniesProps {
  searchTerm: string;
  selectedSector: string;
  selectedLocation: string;
  selectedStatus: string;
}

export const useCompanies = ({
  searchTerm,
  selectedSector,
  selectedLocation,
  selectedStatus
}: UseCompaniesProps) => {
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndFilterCompanies = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Filter companies based on search term and filters
        let results = [...companies];
        
        // Filter by search term
        if (searchTerm) {
          results = results.filter(company => 
            company.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        
        // Filter by sector
        if (selectedSector && selectedSector !== 'All') {
          results = results.filter(company => company.sector === selectedSector);
        }
        
        // Filter by location
        if (selectedLocation && selectedLocation !== 'All') {
          results = results.filter(company => company.location === selectedLocation);
        }
        
        // Filter by sponsorship status
        if (selectedStatus && selectedStatus !== 'All') {
          results = results.filter(company => company.sponsorshipStatus === selectedStatus);
        }
        
        setFilteredCompanies(results);
      } catch (err) {
        setError('Failed to fetch companies data');
        console.error('Error fetching companies:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchAndFilterCompanies();
  }, [searchTerm, selectedSector, selectedLocation, selectedStatus]);
  
  return { companies: filteredCompanies, isLoading, error };
};
