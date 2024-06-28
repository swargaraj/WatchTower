import Link from "next/link";

const IncidentCard = ({ title, status, date }) => {
  return (
    <div className="border rounded-lg p-4 bg-[#FFFFFF] w-full sm:w-full lg:mb-0 mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium">
          <Link href={"/incident/xyz"}>{title}</Link>
        </h3>
        <span className="px-3 py-1 border bg-green-200 text-green-600 rounded-full text-xs flex items-center">
          {status}
        </span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-medium">Last Occurred</p>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </div>
  );
};

export default IncidentCard;
