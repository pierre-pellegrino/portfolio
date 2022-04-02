import React from "react";
import Header from "./components/Header/Header";
import data from "./data/data";
import MainContentProfile from "./components/MainContentProfile/MainContentProfile";
import MainContentList from "./components/MainContentList/MainContentList";
import {
  globalWrapper,
  mainContent,
  mainContentLeft,
  mainContentRight,
} from "./styles/variables.module.scss";

const App = () => {
  return (
    <div className={globalWrapper}>
      <Header data={data.personal_informations} />

      <main className={mainContent}>
        <section className={mainContentLeft}>
          <MainContentProfile title={data.profile.title} content={data.profile.content} />
          <MainContentList title={data.skills.title} content={data.skills.content} />
          {/* <MainContentProfile title={data.hobbies.title} content={data.hobbies.content} /> */}
        </section>
        <section className={mainContentRight}>
          <MainContentList title={data.experience.title} content={data.experience.content} />
          <MainContentList title={data.education.title} content={data.education.content} />
        </section>
      </main>
    </div>
  );
};

export default App;