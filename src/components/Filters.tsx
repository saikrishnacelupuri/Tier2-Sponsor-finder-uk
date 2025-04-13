
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';
import { SponsorshipCompany } from '@/types';

interface FiltersProps {
  selectedSector: string;
  setSelectedSector: (sector: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  resetFilters: () => void;
  sectors: string[];
  locations: string[];
}

const Filters: React.FC<FiltersProps> = ({
  selectedSector,
  setSelectedSector,
  selectedLocation,
  setSelectedLocation,
  selectedStatus,
  setSelectedStatus,
  resetFilters,
  sectors,
  locations
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
      <div className="w-full">
        <Select value={selectedSector} onValueChange={setSelectedSector}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Industry" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            <SelectItem value="All">All Industries</SelectItem>
            {sectors.map((sector) => (
              <SelectItem key={sector} value={sector}>{sector}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Town" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            <SelectItem value="All">All Towns</SelectItem>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>{location}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sponsorship Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Statuses</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2" 
          onClick={resetFilters}
        >
          <RefreshCw className="h-4 w-4" />
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default Filters;
