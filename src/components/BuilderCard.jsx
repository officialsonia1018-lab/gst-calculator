function BuilderCard() {
  return (

    <div className="bg-white border border-gray-200 rounded-xl px-6 py-5 flex justify-between items-center flex-wrap gap-3">

      <div>
        <p className="text-sm text-gray-500">
          <strong className="text-gray-900">
            Built by:
          </strong>{" "}
          Sonia
        </p>
        <p className="text-sm text-gray-500 mt-1">

          <strong className="text-gray-900">
            Email:
          </strong>{" "}
          officialsonia.1018@gmail.com

        </p>
      </div>

      <a
        href="https://digitalheroesco.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold"
      > Built for Digital Heroes

      </a>
    </div>
  );
}

export default BuilderCard;
