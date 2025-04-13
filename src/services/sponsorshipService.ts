
import { SponsorshipCompany } from '../types';

const CORS_PROXY = 'https://corsproxy.io/?';
// Updated URL to the latest version of the sponsorship register
const SPONSORSHIP_REGISTER_URL = 'https://assets.publishing.service.gov.uk/media/679ac9d47292510013eb6dea/2024-04-11_Worker_and_Temporary_Worker.csv';
const LAST_UPDATED_DATE = 'April 11, 2024'; // Updated date to reflect current data

export const fetchSponsors = async (): Promise<SponsorshipCompany[]> => {
  try {
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(SPONSORSHIP_REGISTER_URL)}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    
    const csv = await response.text();
    return parseCSV(csv);
  } catch (error) {
    console.error('Error fetching sponsorship data:', error);
    throw error;
  }
};

const parseCSV = (csv: string): SponsorshipCompany[] => {
  // Skip the header row and split by newlines
  const rows = csv.split('\n').slice(1);
  
  return rows
    .filter(row => row.trim() !== '')
    .map((row, index) => {
      // CSV parsing is complex due to potential commas in quoted fields
      // This is a simplified approach - a proper CSV parser would be better
      const columns = row.split(',');
      
      if (columns.length < 7) return null;
      
      return {
        id: `sponsor-${index}`,
        name: columns[0]?.replace(/"/g, '').trim() || 'Unknown',
        town: columns[1]?.replace(/"/g, '').trim() || 'Unknown',
        industry: columns[3]?.replace(/"/g, '').trim() || 'Unknown',
        workerRoute: columns[4]?.replace(/"/g, '').trim() || 'Unknown',
        licenseNumber: columns[5]?.replace(/"/g, '').trim() || 'Unknown',
        licenseExpiryDate: columns[6]?.replace(/"/g, '').trim() || null,
        routeType: columns[7]?.replace(/"/g, '').trim() || 'Unknown',
        rating: columns[8]?.replace(/"/g, '').trim() || 'Unknown'
      };
    })
    .filter(item => item !== null) as SponsorshipCompany[];
};

export const getLastUpdatedDate = (): string => {
  return LAST_UPDATED_DATE;
};

export const getUniqueIndustries = (companies: SponsorshipCompany[]): string[] => {
  const industries = [...new Set(companies.map(company => company.industry))];
  return industries.sort();
};

export const getUniqueTowns = (companies: SponsorshipCompany[]): string[] => {
  const towns = [...new Set(companies.map(company => company.town))];
  return towns.sort();
};

export const getUniqueRoutes = (companies: SponsorshipCompany[]): string[] => {
  const routes = [...new Set(companies.map(company => company.workerRoute))];
  return routes.sort();
};
