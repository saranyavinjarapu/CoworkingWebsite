import Head from "next/head";
import PlanetPlusContainer from "../components/PlanetPlusContainer/PlanetPlusContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Planet Plus Coworking Space</title>
        <meta name="description" content="Planet Plus Coworking Space by ICD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PlanetPlusContainer></PlanetPlusContainer>
    </>
  );
}
