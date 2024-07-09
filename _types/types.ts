export type ShowTableType = "domain info" | "contact info";

export interface DomainTableProps {
  showTable: ShowTableType;
  domainData: {
    domainName?: string;
    registrarName?: string;
    registryData?: {
      createdDate?: string;
      expiresDate?: string;
      registrant?: {
        name?: string;
      };
      technicalContact?: {
        name?: string;
      };
      administrativeContact?: {
        name?: string;
      };
      nameServers?: {
        hostNames: string[];
      };
    };
    estimatedDomainAge?: string;
    registrant?: {
      name?: string;
      organization?: string;
    };
    technicalContact?: {
      name?: string;
      organization?: string;
    };
    administrativeContact?: {
      name?: string;
      organization?: string;
    };
    contactEmail?: string;
  };
}
