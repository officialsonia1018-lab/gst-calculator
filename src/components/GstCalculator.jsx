import { useState,} from "react";
import {  FaPlus,  FaMinus,  FaIndianRupeeSign,} from "react-icons/fa6";
import ResultCard from "./ResultCard";

function GstCalculator() {

  const [mode, setMode] = useState("add");

  const [slab, setSlab] = useState(5);

  const [amount, setAmount] = useState("");

  const [supply, setSupply] = useState("intra");

  const [result, setResult] = useState(null);

  const [copied, setCopied] = useState(false);

  const slabs = [0, 5, 12, 18, 28];

  const formatCurrency = (num) => {
  return Number(num).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  };

  const calculate = () => {

    const amt = parseFloat(amount);

    if (!amt || amt <= 0) {

      setResult(null);

      return;

    }

    let base, gstAmt, finalAmt;

    if (mode === "add") {

      base = amt;

      gstAmt = (base * slab) / 100;

      finalAmt = base + gstAmt;

    }

    else {

      finalAmt = amt;

      base = amt / (1 + slab / 100);

      gstAmt = finalAmt - base;

    }

    setResult({ base, gstAmt,finalAmt,});

  };

  const copyResult = () => {

    if (!result) return;

    const { base, gstAmt, finalAmt } = result;

    const supplyStr =

      supply === "intra"

        ? `CGST : ${(gstAmt / 2).toFixed(2)}
SGST : ${(gstAmt / 2).toFixed(2)}`

        : `IGST : ${gstAmt.toFixed(2)}`;

    const text =

`GST Calculation (${slab}%)

Base Amount : ${base.toFixed(2)}

${supplyStr}

Total GST : ${gstAmt.toFixed(2)}

Final Amount : ${finalAmt.toFixed(2)}`;

    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {

      setCopied(false);

    }, 2000);

  };
  
  return (

    <>

        <div className="bg-white rounded-xl shadow-lg p-7 mb-5">

        <p className="uppercase text-xs font-bold tracking-widest text-gray-500 mb-5">

          Calculate

        </p>

          <div className="flex bg-gray-100 border border-gray-200 rounded-lg p-1 mb-6">

          <button

            onClick={() => {

              setMode("add");          

            }}

            className={` flex-1  py-3  rounded-md   flex items-center  justify-center gap-2 text-sm font-semibold transition 

            ${
              mode === "add"
                ? "bg-white shadow text-green-700"

                : "text-gray-500"
            }
            `} >

            <FaPlus />

            Add GST to Price

          </button>

          <button  onClick={() => {  setMode("remove"); }}

            className={` flex-1 py-3 rounded-md flex items-center justify-center  gap-2  text-sm font-semibold transition
            ${
              mode === "remove"

                ? "bg-white shadow text-green-700"

                : "text-gray-500"
            }`} >

            <FaMinus />

            Remove GST from Total
          </button>
        </div>

        {/* Amount */}

        <div className="mb-5">

        <label className="flex items-center gap-1 text-sm font-semibold mb-2">

  <span>
    {mode === "add"
      ? "Original Price"
      : "Total Amount incl. GST"}
  </span>

  <FaIndianRupeeSign className="text-xs" />

</label>
          <div className="relative">

            <FaIndianRupeeSign
  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
/>

            <input type="number" value={amount} min="0"

              placeholder={
                mode === "add"
                  ? "e.g. 10000"
                  : "e.g. 11800"
              }
              onChange={(e) => { setAmount(e.target.value);  }}

              className=" w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 outline-none focus:border-green-600 "/>
          </div>
        </div>
        {/* GST RATE */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-3"> GST Rate </label>
          <div className="grid grid-cols-5 gap-2">
            { slabs.map((rate) => (
                <button key={rate}
                  onClick={() => {
                    setSlab(rate); }}

                  className={`py-3 rounded-lg border text-sm font-semibold transition
                  ${ slab === rate
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-gray-500 border-gray-300"
                  } `} >

                  {rate}%
                </button>
              ))
            }
          </div>
        </div>

        {/* Supply */}

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2"> Supply Type  </label>

          <select value={supply} onChange={(e) => {
              setSupply(e.target.value);  }}
            className=" w-full  border  border-gray-300  rounded-lg  py-3 px-4 outline-none focus:border-green-600 ">
            <option value="intra"> Intra-state (CGST + SGST) </option>
            <option value="inter">Inter-state (IGST) </option>
          </select>
        </div>

        {/* BUTTON */}

        <button onClick={calculate}  className=" w-full bg-green-600  hover:bg-green-700   text-white  py-3 rounded-lg font-bold  transition  "  >
          Calculate GST </button>
      </div>
      <ResultCard
        result={result}
        slab={slab}
        supply={supply}
        copied={copied}
        copyResult={copyResult}
        formatCurrency={formatCurrency} />
    </>
  );
}
export default GstCalculator;
