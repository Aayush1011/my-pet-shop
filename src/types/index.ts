export interface LogoProps {
  // paddingTop: string;
  // paddingBottom: string;
  fontSize: string;
  fontColor: string;
}

export interface TopBarButtonProps {
  numberOfItems: string;
}

export interface ButtonType1Props {
  text: string;
  textColor: string;
  buttonColor: string;
  chevronColor: string;
  chevronCircleColor: string;
}

export interface ButtonType2Props {
  text: string;
}

export interface OurServicesSectionCardProps {
  imageName: string;
  title: string;
  description: string;
}

export interface OurPetCollectionSectionCardProps {
  imageName: string;
  breed: string;
  gender: string;
  age: string;
}

export interface OurBlogsSectionProps extends OurServicesSectionCardProps {}

export interface FooterTextComponent {
  textValue1: string;
  textValue2: string;
}
