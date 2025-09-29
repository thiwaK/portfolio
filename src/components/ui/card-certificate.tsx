import React, { useState } from "react";

export type Cert = {
  name: string;
  issuer?: string;
  year?: string;
  image?: string;
  link?: string;
};

type CardCertificateProps = {
  cert: Cert;
};

export default function CardCertificate({ cert }: CardCertificateProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div>
      {/* Collapsed card */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="section-card p-3 flex-row text-left w-full"
      >
        <div className="flex items-center gap-3">
          {cert.image ? (
            <img
              src={cert.image}
              alt={`${cert.name} badge`}
              className="w-12 h-12 object-cover rounded"
            />
          ) : (
            <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center text-xs">
              CERT
            </div>
          )}
          <div className="flex-1">
            <p className="font-medium text-base-content">{cert.name}</p>
            <p className="text-sm text-base-content/70">
              {cert.issuer ?? "Unknown issuer"} • {cert.year ?? "—"}
            </p>
            <span className="text-sm text-blue-600 mt-1 inline-block">
              View details →
            </span>
          </div>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-xl p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold">{cert.name}</h3>
            <p className="text-sm text-base-content/70">
              {cert.issuer ?? "Unknown issuer"} • {cert.year ?? "—"}
            </p>

            <div className="mt-4">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={`${cert.name} Certificate`}
                  className="w-full object-contain rounded border"
                />
              ) : (
                <div className="w-full rounded border p-6 text-center text-sm text-base-300">
                  No certificate image provided.
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center gap-3">
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Verify Credential
                </a>
              ) : (
                <span className="text-sm text-base-300">
                  No verification link available
                </span>
              )}
            </div>
          </div>
          {/* backdrop */}
          <div
            className="modal-backdrop"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </div>
      
    </>
  );
}
