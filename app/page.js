import FadeIntoView from "./components/FadeIntoView";
import ExampleElement from "./components/ExampleElement";
import { recoleta } from "./layout";

export default function Home() {
  const content = [
    {
      highlightText: "Cradlewise does it all -",
      text: "except changing diapers",
      image: "/images/product1.png",
    },
    {
      text: "Smart monitor detects subtle wake-up cues",
      image: "/images/product2.png",
    },
    {
      text: "The bounce calms intuitively with soothing sounds...",
      image: "/images/product1.png",
    },
    {
      highlightText: "just like a parent...",
      image: "/images/product2.png",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto bg-gray-100 flex flex-col justify-center items-center text-center">
      <h1 className="text-gray-500 my-4">THE ALL-IN-ONE SMART CRIB</h1>
      <h1 className={`font-bold text-2xl mx-2 lg:mx-16 ${recoleta.className}`}>
        From detecting early weak-up signs to soothing your baby back to sleep
        with a gentle bouncing motion
      </h1>
      {content.map((data, key) => (
        <FadeIntoView key={key}>
          <ExampleElement data={data} />
        </FadeIntoView>
      ))}
    </div>
  );
}
