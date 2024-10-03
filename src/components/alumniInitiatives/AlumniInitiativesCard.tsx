import React from 'react';

// Define the props interface
interface AlumniInitiativesCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkUrl: string;
}

const AlumniInitiativesCard: React.FC<AlumniInitiativesCardProps> = ({ imageSrc, title, description, linkUrl }) => {
  return (
    <>
    <section className="flex w-full pt-6 pb-4 gap-2">
      <div className="w-1/5 mt-2">
        <img src={imageSrc} alt={title} className="rounded-lg max-h-[140px]" />
      </div>
      <div className="flex flex-col w-4/5 gap-2">
        <h3 className="text-2xl font-semibold text-red-900">{title}</h3>
        <p>{description}</p>
        <a href={linkUrl} className="text-red-900 cursor-pointer inline-flex flex-row items-center">
          <p className="inline">Learn More</p>
          <span className="material-symbols-outlined">
            &rarr;
          </span>
        </a>
      </div>
     
    </section>
    <hr/>
    </>
    
  );
};

export default AlumniInitiativesCard;
