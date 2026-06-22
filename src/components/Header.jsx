import { FaIndianRupeeSign } from "react-icons/fa6";
function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-wrap gap-3">
      <a href="#" className="flex items-center gap-3 font-bold text-lg text-gray-900" >
        <div className="w-9 h-9 rounded-lg bg-green-600 text-white flex items-center justify-center">
  <FaIndianRupeeSign className="text-lg" />
</div> GST Calculator </a>
      <a href="https://digitalheroesco.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition" >
        Built for Digital Heroes </a>
</header>);}

export default Header;
