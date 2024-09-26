import React from 'react';
import DentalInfoCard from './DentalInfoCard';
import YouFirstIcon from '/heart-hand-icon-pearl-dentistry.svg';
import AffordableCareIcon from '/finance-icon-pearl-dentistry.svg';
import ComfortableExperienceIcon from '/pillows-icon-pearl-dentistry.svg';

const DentalInfo = () => {
  return (
    <div className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto text-center mb-12">
      <h1 className="text-3xl font-semibold text-teal-600">A place to look <em>and</em> feel your best!</h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      <DentalInfoCard
        imgSrc={YouFirstIcon}
        title="You-First Approach"
        description="We don’t push treatments. By educating and explaining, we empower our patients to make the right decision for them."
      />
      <DentalInfoCard
        imgSrc={AffordableCareIcon}
        title="Affordable Care"
        description="We believe everyone deserves high-quality care. We offer a number of payment options to make that a reality."
      />
      <DentalInfoCard
        imgSrc={ComfortableExperienceIcon}
        title="Comfortable Experience"
        description="Feeling nervous? Ask about nitrous oxide and in-office conscious sedation. Kick back while we take care of the rest."
      />
    </div>
  </div>
  );
};

export default DentalInfo;
