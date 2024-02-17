import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import profilepic from "./profilepic.jpeg";
import MainLayout from "./layout/MainLayout";
import { styles } from "./styles";
export default function Home() {
  return (
    <MainLayout>
      <div className="text-center p-10">
        <h2 className={styles.sectionHeadTextLight}>Thuy Pham</h2>
        <h3 className={styles.sectionSubTextLight}>Frontend Developer</h3>
        <p className="rext-md py-5 leading-8 text-gray-800 dark:text-neutral-300">
          Passionate software developer that is intrigued by how technology can
          help improve people's lives
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillInstagram />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>

      <div className="relative mx-auto w-80 h-80">
        <img className="rounded-xl " alt="profilepic" src={profilepic} />
      </div>
    </MainLayout>
  );
}
