import classNames from "classnames";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Form, Snackbar } from "../components";
import FormProvider from "../components/Form/utils/FormProvider";
import Image from "next/image";
import { apiFetchStatus } from "../store/api";
import { useStoreSelector } from "../store/store";

export default function Home() {
  const [alive, setAlive] = useState(false);
  const { snackbar } = useStoreSelector((state) => state.App);

  // Setup listeners
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await apiFetchStatus();
        setAlive(data.alive);

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchApi();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>Doação de Computadores</title>
        <meta name="description" content="Doação de computadores usados" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-wrap justify-center">
        {/* <div className="w-full bg-white flex items-center justify-center mb-14 pt-1">
          <Image src={require("../assets/logo.png")} width={48} height={48} />
        </div> */}

        <div className="my-6 flex flex-col items-center">
          <span className="block border-b-2 border-blue-400 mb-4 w-32 rounded-full"></span>

          <h1 className="text-3xl font-bold text-white">
            Doação de computadores
          </h1>
          <h1 className="text-4xl font-bold text-blue-400 text-right w-full">
            usados
          </h1>
        </div>
      </header>

      <main className="flex flex-grow justify-center py-10">
        <div className="xl:w-[800px] md:w-8/12 sm:w-12/12 mx-auto">
          <p className="mt-4 font-bold text-right text-white">
            api{" "}
            <span
              className={classNames({
                "text-green-400": alive,
                "text-red-500": !alive,
              })}
            >
              {alive ? "online" : "offline"}
            </span>
          </p>

          <FormProvider>
            <Form />
          </FormProvider>
        </div>

        <Snackbar
          visible={snackbar.visible}
          text={snackbar.text}
          duration={snackbar.duration}
          type={snackbar.type}
        />
      </main>
    </div>
  );
}
