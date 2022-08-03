import { InstitutionType } from "../../pages/instituicoes";

export default function Institution({
  name,
  description,
  address,
  medias,
}: InstitutionType) {
  return (
    <div className="mt-40">
      <div className="flex flex-wrap items-end justify-start mb-8 xl:justify-between">
        <h1 className="text-4xl font-bold">{name}</h1>
        <span className="text-neutral-300">{address}</span>
      </div>

      <p className="mb-24">{description}</p>

      <ul className="flex flex-wrap items-center justify-around">
        {medias
          ?.sort((a, b) => (a.type > b.type ? 1 : -1))
          .map((media, i) => (
            <li key={`media-${i}`} className="mb-4 xl:mb-0">
              <a
                href={media.url}
                target="_blank"
                className="text-blue-400 p-2 font-bold text-sm"
              >
                VER {media.type.toUpperCase()}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
