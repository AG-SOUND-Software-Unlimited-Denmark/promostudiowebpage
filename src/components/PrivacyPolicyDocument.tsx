import { LegalDocument } from "@/components/LegalDocument";
import { privacyPolicyMeta, privacyPolicySections } from "@/content/privacy-policy";

export function PrivacyPolicyDocument() {
  return <LegalDocument meta={privacyPolicyMeta} sections={privacyPolicySections} />;
}
