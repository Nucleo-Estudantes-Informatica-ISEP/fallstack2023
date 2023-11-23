import { CompanyProps } from "@/components/Company";

import { DiamondCompanies } from "./DiamondCompanies";
import { GoldCompanies } from "./GoldCompanies";
import { SilverCompanies } from "./SilverCompanies";

interface CompanyDetails {
  props: CompanyProps;
  tier: string;
}

export default function findCompanyByName(name: string): CompanyDetails | null {
  name = name.replaceAll("%20", " ");

  for (const company of DiamondCompanies) {
    if (company.name === name) {
      return { props: company, tier: "Diamond" };
    }
  }

  for (const company of GoldCompanies) {
    if (company.name === name) {
      return { props: company, tier: "Gold" };
    }
  }

  for (const company of SilverCompanies) {
    if (company.name === name) {
      return { props: company, tier: "Silver" };
    }
  }

  return null;
}
