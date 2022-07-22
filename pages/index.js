import axios from "axios";
import classNames from "classnames";
import Head from "next/head";
import { useEffect, useState } from "react";

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
    <div className="h-full">
      <Head>
        <title>Doação de Computadores</title>
        <meta name="description" content="Doação de computadores usados" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-4xl font-bold">
          Doação de computadores usados
        </h1>

        <p className="text-2xl my-4">
          API{" "}
          <span
            className={classNames({
              "text-green-400": alive,
              "text-red-500": !alive,
            })}
          >
            {alive ? "online" : "offline"}
          </span>
        </p>
      </main>
    </div>
  );
}
