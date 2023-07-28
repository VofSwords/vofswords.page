import { Head } from "$fresh/runtime.ts";
import { difference } from "$std/datetime/mod.ts";

const Main = () => {
  const expirienceStart = new Date("2018-07-01T00:00:00");
  const { years: yearsOfExpirience } = difference(expirienceStart, new Date(), {
    units: ["years"],
  });

  return (
    <>
      <Head>
        <title>VofSwords</title>
      </Head>
      <main>
        <h2 class="text-xl font-bold">
          Building your success
        </h2>
        <section>
          <p>
            <b class="font-bold">{yearsOfExpirience} years</b> of{" "}
            <b class="font-bold">experience</b> just makes it
          </p>
        </section>
      </main>
    </>
  );
};

export default Main;
