import Image from "next/image";
import { recoleta } from "../layout";

function ExampleElement({ data }) {
  return (
    <>
      <section
        className={`flex flex-col justify-center items-center p-4 gap-2`}
      >
        <h2 className={`px-12 text-xl font-bold mb-6 ${recoleta.className}`}>
          <span className="text-red-500">{data.highlightText} </span>
          {data.text}
        </h2>
        <Image
          className="rounded-3xl"
          src={data.image}
          alt="..."
          loading="lazy"
          width={350}
          height={200}
        />
      </section>
    </>
  );
}

export default ExampleElement;
