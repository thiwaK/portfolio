{/* =========================
      CERTIFICATIONS
  ========================== */}

<div className="space-y-5">
    <div>
        <h2 className="text-xl font-semibold text-base-content">
            Certifications
        </h2>

        <p className="text-sm text-base-content/60">
            Technical courses and credentials
        </p>
    </div>

    <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-4
      "
    >
        {certifications.map((cert, idx) => (
            <CardCertificate key={idx} cert={cert} />
        ))}
    </div>
</div>