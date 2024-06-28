const StatusBanner = () => {
  return (
    <div className="container mx-auto p-4 mt-5">
      <div className="border rounded-lg p-4 bg-[#FFFFFF] w-full sm:w-full flex items-center">
        <span className="status-dot status-up mr-3 w-3 h-3"></span>All Systems
        are Operational
      </div>
    </div>
  );
};

export default StatusBanner;
