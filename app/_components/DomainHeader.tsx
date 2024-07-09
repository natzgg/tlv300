import Detective from "@/_assets/Detective.svg";
import Image from "next/image";

const DomainHeader = () => {
  return (
    <div className="flex items-center">
      <div>
        <Image src={Detective} alt="Detective" className="w-10 h-10" />
      </div>
      <h1 className="font-bold text-gray-500">TLV300 Domain Searcher</h1>
    </div>
  );
};

export default DomainHeader;
