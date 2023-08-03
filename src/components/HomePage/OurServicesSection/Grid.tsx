import { OurServicesSectionCard } from "./Card";

export const OurServicesSectionGrid = () => {
  const gridItems = [
    {
      imageName: "1",
      title: "Dog/Cat Grooming",
      description:
        "We are enhancing our skills, salon, and equipment to meet the challenges of pet grooming.",
    },
    {
      imageName: "2",
      title: "Home Treatment",
      description:
        "Our goal is to ensure pet welfare through home treatment and prompt client response.",
    },
    {
      imageName: "3",
      title: "Clinical Treatment",
      description:
        "Our clinic offers professional veterinary care with a focus on disease prevention, diagnosis, and treatment.",
    },
    {
      imageName: "4",
      title: "Puppies Buying & Selling",
      description:
        "We buy and sell common breed puppies like Golden Retriever, Husky, Pug, etc. 100% guarantee on the breed offered.",
    },
    {
      imageName: "5",
      title: "Dog Training",
      description:
        "Our team of dog trainers is passionate, dedicated, and has years of professional experience.",
    },
    {
      imageName: "6",
      title: "Dog Mating",
      description:
        "Quality breeding requires experience and passion. We can arrange and facilitate quality breed mating.",
    },
  ];
  return (
    <div className="lg:px-10 grid gap-9 grid-flow-row grid-flow-row sm:auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {gridItems.map(({ imageName, title, description }) => (
        <OurServicesSectionCard
          imageName={imageName}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};
