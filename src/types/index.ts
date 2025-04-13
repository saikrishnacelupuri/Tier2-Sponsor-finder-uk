
export interface SponsorshipCompany {
  id: string;
  name: string;
  town: string;
  industry: string;
  workerRoute: string;
  licenseNumber: string;
  licenseExpiryDate: string | null;
  routeType: string;
  rating?: string;
}

export type SponsorshipStatus = 'Active' | 'Inactive' | 'All';
