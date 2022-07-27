import axios from "axios";
import classNames from "classnames";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Form } from "../components";

export default function Home() {
  const [alive, setAlive] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await axios.get(
          "https://doar-computador-api.herokuapp.com"
        );
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

      <header className="flex justify-center">
        <div className="w-[400px] border-l-2 pl-8 border-blue-400 my-8">
          <h1 className="text-3xl font-bold">Doação de computadores</h1>

          <h1 className="text-3xl font-bold text-blue-400">usados</h1>
        </div>
      </header>

      <main className="flex flex-grow justify-center">
        <div className="w-[400px]">
          <p className="mt-4 font-bold text-right">
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

          <Form />
        </div>
      </main>
    </div>
  );
}
