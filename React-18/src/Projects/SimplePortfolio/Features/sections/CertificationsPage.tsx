export default function CertificationsPage() {
  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    // Add more certifications
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[var(--theme-color)] mb-6">
        Certifications
      </h1>
      <ul className="space-y-4">
        {certifications.map((cert) => (
          <li key={cert.name} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{cert.name}</h2>
            <p className="text-gray-600">
              {cert.issuer} • {cert.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
