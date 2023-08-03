import { OurPetCollectionSectionCard } from "./Card";

export const OurPetCollectionSectionGrid = () => {
  const gridItems = [
    {
      imageName: "1",
      breed: "Golden Retriever",
      gender: "Male",
      age: "2 months",
    },
    {
      imageName: "2",
      breed: "Doberman",
      gender: "Male",
      age: "2 months",
    },
    {
      imageName: "3",
      breed: "Apso",
      gender: "Female",
      age: "1 year",
    },
    {
      imageName: "4",
      breed: "Chihuahua",
      gender: "Female",
      age: "1 year",
    },
    {
      imageName: "5",
      breed: "Japanese Spitz",
      gender: "Male",
      age: "2 months",
    },
    {
      imageName: "6",
      breed: "German Shepherd",
      gender: "Male",
      age: "2 months",
    },
    {
      imageName: "7",
      breed: "Husky",
      gender: "Female",
      age: "3 months",
    },
    {
      imageName: "8",
      breed: "Pug",
      gender: "Female",
      age: "4 months",
    },
  ];

  return (
    <div className="mb-[2.462vw] grid justify-items-center gap-4 grid-flow-row sm:auto-rows-fr grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-3 min-[1300px]:grid-cols-4">
      {gridItems.map(({ imageName, breed, gender, age }) => (
        <OurPetCollectionSectionCard
          imageName={imageName}
          breed={breed}
          gender={gender}
          age={age}
        />
      ))}
    </div>
  );
};
