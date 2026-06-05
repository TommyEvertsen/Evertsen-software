import Image from "next/image";
import MainLogo from "@/public/images/MainLogo.png";
import coding from "@/public/images/coding.jpg";
import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <div className="DashboardWrapper ">
      <div className="introWrapper flex-row md:flex  px-8 md:px-16  md:h-96 overflow-hidden">
        <div className="md:basis-1/2 intro">
          <p className="text-xl">Digitaliserer bedrifter</p>

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
            className={styles.introImage}
          ></Image>
        </div>
      </div>

      <div className="aboutWrapper bg-[#245584] text-white mt-8 h-64">
        <div className="about px-16 py-8 flex">
          <div className="flex basis-1/2">
            <p>
              Med erfaring fra systemutvikling og Front-end. Jeg har jobbet som
              systemutvikler i Hjelseth og Senior software ingeniør i Norges
              geologiske undersøkelse og{" "}
            </p>
          </div>
          <div className="flex basis-1/2">
            <p>
              Med erfaring fra systemutvikling og Front-end. Jeg har jobbet som
              systemutvikler i Hjelseth og Senior software ingeniør i Norges
              geologiske undersøkelse og{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
