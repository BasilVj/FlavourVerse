import { Banner,SearchRecipe} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <SearchRecipe/>
    </main>
  );
}
