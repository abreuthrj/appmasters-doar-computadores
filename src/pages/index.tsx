import classNames from "classnames";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Form, Snackbar } from "../components";
import FormProvider from "../components/Form/utils/FormProvider";
import Image from "next/image";
import { apiFetchStatus } from "../store/api";
import { useStoreSelector } from "../store/store";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

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
    <React.Fragment>
      <div className="flex flex-wrap h-full gap-32 items-stretch py-20 px-2 lg:px-12 lg:py-0 lg:flex-nowrap 2xl:px-40">
        <Head>
          <title>Doação de Computadores</title>
          <meta name="description" content="Doação de computadores usados" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="flex flex-col my-auto lg:w-5/12 w-full gap-44">
          <div className="flex flex-col lg:items-end items-center text-center lg:text-left w-full">
            <h1 className="text-4xl lg:text-5xl text-white">
              Ajude instituições doando
            </h1>

            <h1 className="text-3xl lg:text-4xl font-bold text-blue-400 lg:text-right w-full mt-4">
              computadores usados
            </h1>

            <span className="block border-b-2 border-neutral-500 my-6 w-24 rounded-full"></span>
          </div>

          <div>
            <p className="text-xl text-center text-white xl:text-left">
              Os dispositivos doados serão encaminhado para as instituições
              parceiras listadas mais adiante na página e farão a diferença em
              muitas vidas
            </p>

            <Link href={"/instituicoes"}>
              <div className="xl:float-right justify-center xl:justify-start text-blue-400 flex items-center gap-2 mt-4 cursor-pointer">
                <span className="font-bold text-lg">Ver Instituições</span>
                <MdArrowForward size={22} />
              </div>
            </Link>
          </div>

          <p className="text-neutral-400 xl:text-left text-center">
            Após o preenchimento do formulário, entraremos em contato o mais
            rápido possível, desde já agradecemos todo o suporte
          </p>
        </header>

        <main className="flex lg:w-7/12 w-full lg:items-center">
          <div className="lg:mx-auto w-full lg:w-auto">
            <div className="flex justify-end mb-2">
              <div className="flex items-center gap-2 font-bold text-neutral-500 border border-neutral-500 rounded-md px-4 py-1 text-xs">
                API{" "}
                <span
                  className={classNames({
                    "inline-flex w-4 h-4 rounded-full": true,
                    "bg-green-400": alive,
                    "bg-red-500": !alive,
                  })}
                ></span>
              </div>
            </div>

            <FormProvider>
              <Form />
            </FormProvider>
          </div>
        </main>
      </div>

      <Snackbar
        visible={snackbar.visible}
        text={snackbar.text}
        duration={snackbar.duration}
        type={snackbar.type}
      />
    </React.Fragment>
  );
}
