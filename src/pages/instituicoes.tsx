import Head from "next/head";
import Link from "next/link";
import { Institution } from "../components";
import { MdArrowBack } from "react-icons/md";

export type InstitutionMediaType = {
  type: "website" | "facebook" | "instagram" | "whatsapp";
  url: string;
};

export type InstitutionType = {
  name?: string;
  description?: string;
  address?: string;
  medias?: InstitutionMediaType[];
};

export type InstituicoesProps = {
  institutions: InstitutionType[];
};

export default function Instituicoes({ institutions }: InstituicoesProps) {
  return (
    <div className="px-6 lg:px-12 2xl:px-80 py-20">
      <Head>
        <title>Instituições</title>
        <meta
          name="description"
          content="Instituições que receberão os computadores doados"
        />
      </Head>

      <header className="flex justify-between mb-40 flex-wrap">
        <Link href={"/"}>
          <div className="flex items-center gap-2 text-blue-400 mb-4 cursor-pointer">
            <MdArrowBack size={24} />
            <span className="rounded-md">Voltar</span>
          </div>
        </Link>

        <h1 className="text-5xl text-neutral-400  w-full">Instituiçoes</h1>
      </header>

      <main>
        {institutions.map((institution, i) => (
          <Institution
            key={`institution-${i}`}
            name={institution.name}
            description={institution.description}
            address={institution.address}
            medias={institution.medias}
          />
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const institutions: InstitutionType[] = [
    {
      name: "Lixo Digital",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat. In fermentum et sollicitudin ac orci. Ut etiam sit amet nisl purus in mollis nunc sed. Sed cras ornare arcu dui vivamus arcu felis bibendum. Integer eget aliquet nibh praesent tristique magna sit amet. Turpis massa tincidunt dui ut ornare. Vivamus at augue eget arcu dictum varius duis at. Nibh sed pulvinar proin gravida hendrerit. Facilisis magna etiam tempor orci. Purus non enim praesent elementum facilisis leo vel. Pulvinar neque laoreet suspendisse interdum consectetur. Proin fermentum leo vel orci porta. Pellentesque adipiscing commodo elit at imperdiet. Morbi non arcu risus quis varius. Ut porttitor leo a diam. Fermentum et sollicitudin ac orci. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Netus et malesuada fames ac turpis egestas maecenas pharetra.",
      address: "Rua Elmaia Cunha, Juiz de Fora - MG",
      medias: [
        {
          type: "facebook",
          url: "https://appmasters.io",
        },
        {
          type: "instagram",
          url: "https://appmasters.io",
        },
        {
          type: "website",
          url: "https://appmasters.io",
        },
        {
          type: "whatsapp",
          url: "https://appmasters.io",
        },
      ],
    },
    {
      name: "Eletrodump",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat. In fermentum et sollicitudin ac orci. Ut etiam sit amet nisl purus in mollis nunc sed. Sed cras ornare arcu dui vivamus arcu felis bibendum. Integer eget aliquet nibh praesent tristique magna sit amet. Turpis massa tincidunt dui ut ornare. Vivamus at augue eget arcu dictum varius duis at. Nibh sed pulvinar proin gravida hendrerit. Facilisis magna etiam tempor orci. Purus non enim praesent elementum facilisis leo vel. Pulvinar neque laoreet suspendisse interdum consectetur. Proin fermentum leo vel orci porta. Pellentesque adipiscing commodo elit at imperdiet. Morbi non arcu risus quis varius. Ut porttitor leo a diam. Fermentum et sollicitudin ac orci. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Netus et malesuada fames ac turpis egestas maecenas pharetra.",
      address: "Rua Elmaia Cunha, Juiz de Fora - MG",
      medias: [
        {
          type: "instagram",
          url: "https://appmasters.io",
        },
        {
          type: "facebook",
          url: "https://appmasters.io",
        },
        {
          type: "website",
          url: "https://appmasters.io",
        },
      ],
    },
    {
      name: "Reborn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat. In fermentum et sollicitudin ac orci. Ut etiam sit amet nisl purus in mollis nunc sed. Sed cras ornare arcu dui vivamus arcu felis bibendum. Integer eget aliquet nibh praesent tristique magna sit amet. Turpis massa tincidunt dui ut ornare. Vivamus at augue eget arcu dictum varius duis at. Nibh sed pulvinar proin gravida hendrerit. Facilisis magna etiam tempor orci. Purus non enim praesent elementum facilisis leo vel. Pulvinar neque laoreet suspendisse interdum consectetur. Proin fermentum leo vel orci porta. Pellentesque adipiscing commodo elit at imperdiet. Morbi non arcu risus quis varius. Ut porttitor leo a diam. Fermentum et sollicitudin ac orci. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Netus et malesuada fames ac turpis egestas maecenas pharetra.",
      address: "Rua Elmaia Cunha, Juiz de Fora - MG",
      medias: [
        {
          type: "website",
          url: "https://appmasters.io",
        },
        {
          type: "whatsapp",
          url: "https://appmasters.io",
        },
      ],
    },
    {
      name: "PCHouse",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat. In fermentum et sollicitudin ac orci. Ut etiam sit amet nisl purus in mollis nunc sed. Sed cras ornare arcu dui vivamus arcu felis bibendum. Integer eget aliquet nibh praesent tristique magna sit amet. Turpis massa tincidunt dui ut ornare. Vivamus at augue eget arcu dictum varius duis at. Nibh sed pulvinar proin gravida hendrerit. Facilisis magna etiam tempor orci. Purus non enim praesent elementum facilisis leo vel. Pulvinar neque laoreet suspendisse interdum consectetur. Proin fermentum leo vel orci porta. Pellentesque adipiscing commodo elit at imperdiet. Morbi non arcu risus quis varius. Ut porttitor leo a diam. Fermentum et sollicitudin ac orci. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Netus et malesuada fames ac turpis egestas maecenas pharetra.",
      address: "Rua Elmaia Cunha, Juiz de Fora - MG",
      medias: [
        {
          type: "website",
          url: "https://appmasters.io",
        },
      ],
    },
    {
      name: "Reciclei",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat. In fermentum et sollicitudin ac orci. Ut etiam sit amet nisl purus in mollis nunc sed. Sed cras ornare arcu dui vivamus arcu felis bibendum. Integer eget aliquet nibh praesent tristique magna sit amet. Turpis massa tincidunt dui ut ornare. Vivamus at augue eget arcu dictum varius duis at. Nibh sed pulvinar proin gravida hendrerit. Facilisis magna etiam tempor orci. Purus non enim praesent elementum facilisis leo vel. Pulvinar neque laoreet suspendisse interdum consectetur. Proin fermentum leo vel orci porta. Pellentesque adipiscing commodo elit at imperdiet. Morbi non arcu risus quis varius. Ut porttitor leo a diam. Fermentum et sollicitudin ac orci. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Netus et malesuada fames ac turpis egestas maecenas pharetra.",
      address: "Rua Elmaia Cunha, Juiz de Fora - MG",
      medias: [],
    },
  ];

  return {
    props: {
      institutions,
    },
  };
}
