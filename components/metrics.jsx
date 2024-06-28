import ResponseTimeCard from "@/components/response-time-card";
const MetricsGroup = ({ title, description }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 py-3">
        <h2 className="text-xl font-medium ">{title}</h2>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:gap-6">
        <ResponseTimeCard
          title="API"
          status="Operational"
          latency="28.2ms"
          details="No current issues."
        />
      </div>
    </div>
  );
};

export default MetricsGroup;
