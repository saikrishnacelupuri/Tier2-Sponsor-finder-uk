
export interface Company {
  id: number;
  name: string;
  sector: string;
  location: string;
  sponsorshipStatus: 'Active' | 'Inactive';
}

export const companies: Company[] = [
  {
    id: 1,
    name: "Acme Technologies Ltd",
    sector: "IT",
    location: "London",
    sponsorshipStatus: "Active"
  },
  {
    id: 2,
    name: "HealthPlus Medical",
    sector: "Healthcare",
    location: "Manchester",
    sponsorshipStatus: "Active"
  },
  {
    id: 3,
    name: "Financial Solutions Group",
    sector: "Finance",
    location: "London",
    sponsorshipStatus: "Active"
  },
  {
    id: 4,
    name: "DataTech Systems",
    sector: "IT",
    location: "Birmingham",
    sponsorshipStatus: "Inactive"
  },
  {
    id: 5,
    name: "Global Communications",
    sector: "Telecommunications",
    location: "Edinburgh",
    sponsorshipStatus: "Active"
  },
  {
    id: 6,
    name: "Apex Manufacturing",
    sector: "Manufacturing",
    location: "Leeds",
    sponsorshipStatus: "Inactive"
  },
  {
    id: 7,
    name: "Evergreen Energy",
    sector: "Energy",
    location: "Glasgow",
    sponsorshipStatus: "Active"
  },
  {
    id: 8,
    name: "Legal Associates LLP",
    sector: "Legal",
    location: "London",
    sponsorshipStatus: "Active"
  },
  {
    id: 9,
    name: "Northern Healthcare Trust",
    sector: "Healthcare",
    location: "Newcastle",
    sponsorshipStatus: "Active"
  },
  {
    id: 10,
    name: "Tech Innovations Inc",
    sector: "IT",
    location: "Cambridge",
    sponsorshipStatus: "Active"
  },
  {
    id: 11,
    name: "Digital Solutions Ltd",
    sector: "IT",
    location: "Bristol",
    sponsorshipStatus: "Inactive"
  },
  {
    id: 12,
    name: "Capital Finance Partners",
    sector: "Finance",
    location: "London",
    sponsorshipStatus: "Active"
  },
  {
    id: 13,
    name: "MediCare Services",
    sector: "Healthcare",
    location: "Oxford",
    sponsorshipStatus: "Active"
  },
  {
    id: 14,
    name: "Precision Engineering",
    sector: "Engineering",
    location: "Sheffield",
    sponsorshipStatus: "Active"
  },
  {
    id: 15,
    name: "Global Retail Group",
    sector: "Retail",
    location: "Manchester",
    sponsorshipStatus: "Inactive"
  },
  {
    id: 16,
    name: "EduTech Solutions",
    sector: "Education",
    location: "London",
    sponsorshipStatus: "Active"
  },
  {
    id: 17,
    name: "Quantum Research Labs",
    sector: "Research",
    location: "Cambridge",
    sponsorshipStatus: "Active"
  },
  {
    id: 18,
    name: "Creative Media Agency",
    sector: "Media",
    location: "London",
    sponsorshipStatus: "Active"
  },
  {
    id: 19,
    name: "Sustainable Construction",
    sector: "Construction",
    location: "Birmingham",
    sponsorshipStatus: "Inactive"
  },
  {
    id: 20,
    name: "Nexus Pharmaceuticals",
    sector: "Pharmaceuticals",
    location: "Cambridge",
    sponsorshipStatus: "Active"
  },
  {
    id: 21,
    name: "Horizon Software Solutions",
    sector: "IT",
    location: "Manchester",
    sponsorshipStatus: "Active"
  },
  {
    id: 22,
    name: "Atlas Consulting Group",
    sector: "Consulting",
    location: "London",
    sponsorshipStatus: "Active"
  },
  {
    id: 23,
    name: "Gourmet Food Distributors",
    sector: "Food & Beverage",
    location: "Edinburgh",
    sponsorshipStatus: "Inactive"
  },
  {
    id: 24,
    name: "Pioneer Aerospace",
    sector: "Aerospace",
    location: "Bristol",
    sponsorshipStatus: "Active"
  },
  {
    id: 25,
    name: "Urban Property Developers",
    sector: "Real Estate",
    location: "London",
    sponsorshipStatus: "Active"
  },
  {
    id: 26,
    name: "Integrated Logistics Solutions",
    sector: "Logistics",
    location: "Liverpool",
    sponsorshipStatus: "Active"
  },
  {
    id: 27,
    name: "Elite Security Systems",
    sector: "Security",
    location: "London",
    sponsorshipStatus: "Inactive"
  },
  {
    id: 28,
    name: "Renewable Energy Innovations",
    sector: "Energy",
    location: "Glasgow",
    sponsorshipStatus: "Active"
  },
  {
    id: 29,
    name: "Premium Automotive Group",
    sector: "Automotive",
    location: "Coventry",
    sponsorshipStatus: "Active"
  },
  {
    id: 30,
    name: "Advanced Biotechnology",
    sector: "Biotechnology",
    location: "Oxford",
    sponsorshipStatus: "Active"
  }
];

// Get unique sectors for filter dropdown
export const sectors = [...new Set(companies.map(company => company.sector))].sort();

// Get unique locations for filter dropdown
export const locations = [...new Set(companies.map(company => company.location))].sort();

// Sponsorship status options
export const sponsorshipStatuses = ['All', 'Active', 'Inactive'];
