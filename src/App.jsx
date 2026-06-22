import React from "react";
import Header from "./components/Header";
import GstCalculator from "./components/GstCalculator";
import BuilderCard from "./components/BuilderCard";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <Header />

      <main className="flex-1 max-w-[660px] w-full mx-auto px-4 py-10">

        <h1 className="text-[1.7rem] font-extrabold text-gray-900 mb-1">
          GST Calculator
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Calculate GST instantly — add tax to a price or remove it from a total.
        </p>

        <GstCalculator />

        <BuilderCard />

      </main>

      <footer className="text-center py-6 px-4 text-gray-500 text-sm border-t bg-white">

        <p>
          Free GST Calculator · Built by{" "}
          <strong>Sonia</strong>
        </p>

        <p className="mt-2">
          Part of Digital Heroes trial project
        </p>

      </footer>

    </div>
  );
}

export default App;