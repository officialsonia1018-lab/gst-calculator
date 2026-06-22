import {
  FaCheck,
  FaRegClipboard,
  FaIndianRupeeSign,
} from "react-icons/fa6";

function ResultCard({
  result,
  slab,
  supply,
  copied,
  copyResult,
  formatCurrency,
}) {
  if (!result) return null;

  const { base, gstAmt, finalAmt } = result;

  return (
    <div className="bg-green-100 border border-green-200 rounded-xl p-6 mb-5">

      <div className="flex justify-between items-center flex-wrap gap-3 mb-5">

        <div>

          <p className="uppercase text-xs font-bold tracking-wider text-green-700">
            Total GST Amount
          </p>

         <h2 className="text-4xl font-black text-green-800 flex items-center gap-1">

  <FaIndianRupeeSign />

  {formatCurrency(gstAmt)}

</h2>

        </div>

        <div className="text-right">

          <p className="uppercase text-xs font-bold tracking-wider text-green-700">
            Final Amount
          </p>

        <h2 className="text-2xl font-extrabold text-green-900 flex items-center justify-end gap-1">

  <FaIndianRupeeSign />

  {formatCurrency(finalAmt)}

</h2>
        </div>

      </div>

      <div className="border-t border-green-300 pt-4">

        <div className="flex justify-between py-2 border-b border-green-200">

          <span className="text-green-900">
            Base Amount (excl. GST)
          </span>
<span className="font-bold text-green-800 flex items-center gap-1">

  <FaIndianRupeeSign className="text-xs" />

  {formatCurrency(base)}

</span>
        </div>

        {slab === 0 ? (

          <div className="flex justify-between py-2 border-b border-green-200">

            <span className="text-green-900">
              GST @ 0%
            </span>

           <span className="font-bold text-green-800 flex items-center gap-1">

  <FaIndianRupeeSign className="text-xs" />

  0.00

</span>

          </div>

        ) : supply === "intra" ? (

          <>

            <div className="flex justify-between py-2 border-b border-green-200">

              <span className="text-green-900">
                CGST @ {slab / 2}%
              </span>

             <span className="font-bold text-green-800 flex items-center gap-1">

  <FaIndianRupeeSign className="text-xs" />

  {formatCurrency(gstAmt / 2)}

</span>
            </div>

            <div className="flex justify-between py-2 border-b border-green-200">

              <span className="text-green-900">
                SGST @ {slab / 2}%
              </span>
<span className="font-bold text-green-800 flex items-center gap-1">

  <FaIndianRupeeSign className="text-xs" />

  {formatCurrency(gstAmt / 2)}

</span>

            </div>

          </>

        ) : (

          <div className="flex justify-between py-2 border-b border-green-200">

            <span className="text-green-900">
              IGST @ {slab}%
            </span>
<span className="font-bold text-green-800 flex items-center gap-1">

  <FaIndianRupeeSign className="text-xs" />

  {formatCurrency(gstAmt)}

</span>
          </div>

        )}

        <div className="flex justify-between pt-4">

          <span className="font-bold text-green-950">
            Total Amount (incl. GST)
          </span>

        <span className="font-bold text-xl text-green-950 flex items-center gap-1">

  <FaIndianRupeeSign className="text-sm" />

  {formatCurrency(finalAmt)}

</span>

        </div>

      </div>

      <div className="flex justify-end mt-5">

        <button
          onClick={copyResult}
          className="px-4 py-2 border border-green-300 rounded-lg bg-white hover:bg-green-600 hover:text-white transition flex items-center gap-2 font-semibold text-sm"
        >

          {copied ? <FaCheck /> : <FaRegClipboard />}

          {copied ? "Copied!" : "Copy Result"}

        </button>

      </div>

    </div>
  );
}

export default ResultCard;