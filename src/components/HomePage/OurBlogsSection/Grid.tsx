import { OurBlogsSectionCard } from "./Card";

export const OurBlogsSectionGrid = () => {
  const gridItems = [
    {
      imageName: "1",
      title: "How to Choose the Right Bully Stick for Your Dog",
      description:
        "Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.",
    },
    {
      imageName: "2",
      title: "Saving Lives: Animal House Shelter And Downtown Pet Supply",
      description:
        "Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.",
    },
    {
      imageName: "3",
      title: "Himalayan Yak Chews: 11 Benefits You Need To Know",
      description:
        "Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly. ",
    },
  ];

  return (
    <div className="grid gap-10 grid-flow-row sm:auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {gridItems.map(({ imageName, title, description }) => (
        <OurBlogsSectionCard
          imageName={imageName}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};
