
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, BookOpen, Calendar } from 'lucide-react';
import { SponsorshipCompany } from '@/types';

interface CompanyCardProps {
  company: SponsorshipCompany;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{company.name}</CardTitle>
          <Badge 
            className="bg-sponsorship-active hover:bg-sponsorship-active/80"
          >
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="h-4 w-4" />
            <span>{company.industry}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{company.town}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span>{company.workerRoute}</span>
          </div>
          {company.licenseExpiryDate && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Expires: {company.licenseExpiryDate}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
