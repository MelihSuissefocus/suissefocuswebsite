export default function TrustBar() {
  const partners = [
    { name: 'Partner 1', logo: '/trust-logos/logo.png' },
    { name: 'Partner 2', logo: '/trust-logos/ict.png' },
    { name: 'Partner 3', logo: '/trust-logos/klara.png' },
    { name: 'Partner 4', logo: '/trust-logos/duo.png' }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-12 md:gap-16">
          {partners.map((partner) => (
            <div key={partner.name} className="h-16 opacity-90 transition-opacity hover:opacity-100">
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 