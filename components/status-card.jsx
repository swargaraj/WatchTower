import Link from "next/link";
const StatusCard = ({ title, status, uptime, details }) => {
  return (
    <div className="border rounded-lg p-4 bg-[#FFFFFF] w-full sm:w-full lg:mb-0 mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium">
          <Link href={"/monitor/xyz"}>{title}</Link>
        </h3>
        <span className="px-3 py-1 border rounded-full text-xs flex items-center">
          <span
            className={`status-dot w-2 h-2 ${
              status === "Operational"
                ? "status-up"
                : status === "Dead"
                ? "status-dead"
                : "status-down"
            } mr-2`}
          ></span>{" "}
          {status}
        </span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-medium">Uptime</p>
        <p className="text-gray-500 text-sm">{details}</p>
      </div>
      <div>
        <div className="container bars flex space-x-0.5">
          {Array.from({ length: 80 }, (_, i) => (
            <div
              key={i}
              className={`bars ${
                status === "Operational"
                  ? "bg-green-400"
                  : status === "Dead"
                  ? "bg-red-400"
                  : "bg-amber-300"
              } flex-1 h-10 rounded hover:opacity-80 cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
      <div className="container mt-2">
        <div className="flex items-center">
          <span
            className={`pr-2 flex-shrink-0 ${
              status === "Operational"
                ? "text-green-400"
                : status === "Dead"
                ? "text-red-400"
                : "text-amber-300"
            } text-xs`}
          >
            May
          </span>
          <div
            className={`h-px ${
              status === "Operational"
                ? "bg-green-400"
                : status === "Dead"
                ? "bg-red-400"
                : "bg-amber-300"
            } w-full`}
          ></div>
          <span
            className={`px-2 flex-shrink-0 ${
              status === "Operational"
                ? "text-green-400"
                : status === "Dead"
                ? "text-red-400"
                : "text-amber-300"
            } text-xs`}
          >
            {uptime}
          </span>
          <div
            className={`h-px ${
              status === "Operational"
                ? "bg-green-400"
                : status === "Dead"
                ? "bg-red-400"
                : "bg-amber-300"
            } w-full`}
          ></div>
          <span
            className={`pl-2 flex-shrink-0 ${
              status === "Operational"
                ? "text-green-400"
                : status === "Dead"
                ? "text-red-400"
                : "text-amber-300"
            } text-xs`}
          >
            July
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
