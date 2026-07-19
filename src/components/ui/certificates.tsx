
import React, { useEffect, useRef, useState } from "react";

export type Cert = {
  name: string;
  issuer?: string;
  year?: string;
  image?: string;
  link?: string;
};

type CertificationsProps = {
  certifications: Cert[];
};

export default function Certifications({ certifications }: CertificationsProps) {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Handle ESC key + scroll lock
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedCert(null);
    }
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [selectedCert]);

  return (
    <div className="col-span-full mt-8">
      <h2 className="text-xl font-bold mb-4">Certifications</h2>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedCert(cert)}
            className="p-4 bg-base-200/50 rounded-lg border border-base-content/10 text-left hover:shadow-md transition w-full cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={`${cert.name} badge`}
                  className="w-12 h-12 object-cover rounded border border-base-content/10"
                />
              ) : (
                <div className="w-12 h-12 rounded bg-base-300 flex items-center justify-center text-xs text-base-content/50">
                  CERT
                </div>
              )}
              <div className="flex-1">
                <p className="font-medium text-base-content">{cert.name}</p>
                <p className="text-sm text-base-content/70">
                  {cert.issuer ?? "Unknown issuer"} • {cert.year ?? "—"}
                </p>
                <span className="text-sm text-primary hover:underline mt-1 inline-block">
                  View details →
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative bg-base-100 border border-base-content/10 rounded-lg shadow-xl max-w-xl w-full p-6 text-base-content">
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 text-base-content/60 hover:text-base-content cursor-pointer transition-colors"
              aria-label="Close certificate"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold text-base-content">{selectedCert.name}</h3>
            <p className="text-sm text-base-content/70">
              {selectedCert.issuer ?? "Unknown issuer"} • {selectedCert.year ?? "—"}
            </p>

            {/* Certificate image */}
            <div className="mt-4">
              {selectedCert.image ? (
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.name} Certificate`}
                  className="w-full object-contain rounded border border-base-content/10"
                />
              ) : (
                <div className="w-full rounded border border-base-content/10 p-6 text-center text-sm text-base-content/50">
                  No certificate image provided.
                </div>
              )}
            </div>

            {/* Verification link */}
            <div className="mt-4 flex items-center gap-3">
              {selectedCert.link ? (
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm rounded-md"
                >
                  Verify Credential
                </a>
              ) : (
                <span className="text-sm text-base-content/50">
                  No verification link available
                </span>
              )}

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="btn btn-outline btn-sm rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
