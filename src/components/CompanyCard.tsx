
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin } from 'lucide-react';
import { Company } from '@/data/companies';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{company.name}</CardTitle>
          <Badge 
            className={`${
              company.sponsorshipStatus === 'Active' 
                ? 'bg-sponsorship-active hover:bg-sponsorship-active/80' 
                : 'bg-sponsorship-inactive hover:bg-sponsorship-inactive/80'
            }`}
          >
            {company.sponsorshipStatus}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="h-4 w-4" />
            <span>{company.sector}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{company.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
