import ExhibitionScreen from "../../../components/ExhibitionScreen";

export const mockExhibition = {
  title: "Van Gogh",
  subtitle: "Licht und Farbe",
  period: "15 April – 30 August 2026",
  description:
    "This exhibition presents a selection of works that highlight the evolution of Vincent van Gogh's artistic language. Through expressive color, dynamic brushwork, and carefully curated pieces, visitors are invited to explore the depth and impact of his oeuvre.",
  image: "/van-gogh.jpg",
};

export default function ExhibitionScreenPreview() {
  return <ExhibitionScreen exhibition={mockExhibition} />;
}
