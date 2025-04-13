import { useState, useEffect } from 'react';
import { SponsorshipCompany } from '../types';
import { fetchSponsors } from '../services/sponsorshipService';

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
  const [allCompanies, setAllCompanies] = useState<SponsorshipCompany[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<SponsorshipCompany[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCompanies = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const sponsors = await fetchSponsors();
        setAllCompanies(sponsors);
      } catch (err) {
        setError('Failed to fetch sponsors data. Please try again later.');
        console.error('Error fetching sponsors:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    getCompanies();
  }, []);

  useEffect(() => {
    if (allCompanies.length === 0) return;
    
    setIsLoading(true);
    
    try {
      let results = [...allCompanies];
      
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        results = results.filter(company => 
          company.name.toLowerCase().includes(term)
        );
      }
      
      if (selectedSector && selectedSector !== 'All') {
        results = results.filter(company => company.industry === selectedSector);
      }
      
      if (selectedLocation && selectedLocation !== 'All') {
        results = results.filter(company => company.town === selectedLocation);
      }
      
      if (selectedStatus === 'Active') {
        results = results;
      } else if (selectedStatus === 'Inactive') {
        results = [];
      }
      
      setFilteredCompanies(results);
    } catch (err) {
      setError('Error filtering companies data');
      console.error('Error filtering companies:', err);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, selectedSector, selectedLocation, selectedStatus, allCompanies]);
  
  return { 
    companies: filteredCompanies, 
    allCompanies,
    isLoading, 
    error 
  };
};
