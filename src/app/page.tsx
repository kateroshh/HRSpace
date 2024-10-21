"use client";
import { FC } from "react";
import "@/scss/index.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MultiStepForm from "@/components/MultiStepForm/MultiStepForm";

const Home: FC = () => {
  return (
    <div className="page">
      <main className="main">
        <Header />
        <MultiStepForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
