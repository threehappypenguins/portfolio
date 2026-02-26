import { Award } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  url?: string;
}

export function CertificationCard({
  title,
  issuer,
  issued,
  credentialId,
  url,
}: CertificationCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-card focus-ring"
    >
      <div className="about-card-icon-container shrink-0">
        <Award className="about-card-icon" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="about-card-title font-semibold leading-snug">{title}</p>
        <p className="text-sm text-card-text">{issuer}</p>
        <p className="text-xs text-card-text">{issued}</p>
        {credentialId && (
          <p className="text-xs text-card-text">
            Credential ID{" "}
            <span className="font-mono">{credentialId}</span>
          </p>
        )}
      </div>
    </a>
  );
}