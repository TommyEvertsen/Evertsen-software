import Image from "next/image";
import MainLogo from "@/public/images/MainLogo.png";
import coding from "@/public/images/coding.jpg";
import styles from "./page.module.css";

export default function Dashboard() {
  const pageStyles = [
    {
      title: "Luksus preg",
      image: coding,
    },
    {
      title: "Professionelt preg",
      image: coding,
    },
    {
      title: "Koselig preg",
      image: coding,
    },
  ];

  const pageLooks = [
    {
      title: "Small",
      image: coding,
    },
    {
      title: "Medium",
      image: coding,
    },
    {
      title: "Large",
      image: coding,
    },
  ];

  return (
    <div className="DashboardWrapper ">
      <div className="introWrapper flex-row md:flex  px-8 md:px-16  md:h-96 overflow-hidden">
        <div className="md:basis-1/2 intro">
          <h1 className="text-xl">Digitaliserer bedrifter.</h1>

          <p className="introText mt-4">
            Jeg spesialiserer meg på å digitalisere små bedrifter.
          </p>
          <p>
            Enten du har starten en restaurant og trenger en nettside eller du
            har en id'e som du vil få ut i verden er jeg her for å hjelpe deg å
            realisere dine tanker og ditt konsept.
          </p>
          <p>
            Evertsen software er et enkeltpersonsforedrag som ble lagd for å
            fylle et tomrom jeg så. Utallige ganger har jeg googlet en
            restaurant for å finne ut at de ikke har nettside. Ingen måte jeg
            kan se menyen på. Mange ganger har jeg prøvd å finne informasjon om
            en håndverker som jeg sønsker å leie inn uten at de har en nettside
            jeg kan se på.
          </p>
          <p>
            Dette ser jeg på som en mulighet for meg til å hjelpe bedrifter som
            kan trenge en utvikler som kan få de på nett og digitalisere
            bedriften
          </p>
        </div>
        <div className="md:flex basis-1/2 justify-center items-center mt-8 md:mt-4">
          <Image
            src={coding}
            alt="Mainlogo"
            loading="eager"
            className={styles.zoomImage}
          ></Image>
        </div>
      </div>

      <div className="aboutWrapper bg-[#245584] text-white mt-8 md:h-64">
        <div className="about px-8 md:px-16 py-8 flex-row md:flex md:gap-4">
          <div className="flex md:basis-1/2 ">
            <p>
              Skreddersy din nettside. Finn stilen som passer ditt konsept.
              Enten du ser for deg et luksuriøst eller hjemmekoselig konsept kan
              jeg hjelpe deg.
            </p>
          </div>
          <div className=" py-8 md:py-0 md:basis-1/2">
            <h2 className="text-xl pb-2">Stiler:</h2>
            <ul className="">
              {pageStyles.map((style) => (
                <li key={style.title}>{style.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="styleWrapper py-8 md:py-16 px-8 md:px-16">
        <h2 className="text-xl">Velg din stil.</h2>
        <div className="style flex-row md:flex md:gap-3">
          {pageStyles.map((style) => (
            <div key={style.title} className="py-4">
              <p className="py-2">{style.title}</p>
              <Image
                src={style.image}
                alt={style.title}
                loading="eager"
                className={styles.blackWhiteImage}
              ></Image>
            </div>
          ))}
        </div>
      </div>

      <div className="aboutWrapper bg-[#245584] text-white mt-8 md:h-64">
        <div className="about px-8 md:px-16 py-8 flex-row md:flex">
          <div className="flex md:basis-1/2">
            <p>
              Med erfaring fra systemutvikling og Front-end. Jeg har jobbet som
              systemutvikler i Hjelseth og Senior software ingeniør i Norges
              geologiske undersøkelse og{" "}
            </p>
          </div>
          <div className="flex py-8 md:py-0 md:basis-1/2">
            <p>
              Med erfaring fra systemutvikling og Front-end. Jeg har jobbet som
              systemutvikler i Hjelseth og Senior software ingeniør i Norges
              geologiske undersøkelse og{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="styleWrapper py-8 md:py-16 px-8 md:px-16">
        <h2 className="text-xl">Velg din stil.</h2>
        <div className="style flex-row md:flex md:gap-3">
          {pageLooks.map((looks) => (
            <div key={looks.title} className="py-4">
              <p className="py-2">{looks.title}</p>
              <Image
                src={looks.image}
                alt={looks.title}
                loading="eager"
                className={styles.opacityImage}
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
