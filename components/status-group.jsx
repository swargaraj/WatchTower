import StatusCard from "@/components/status-card";
const StatusGroup = ({ title, description }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 py-3">
        <h2 className="text-xl font-medium ">{title}</h2>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:gap-6">
        <StatusCard
          title="Website"
          status="Operational"
          uptime="99.8%"
          details="No current issues."
        />

        <StatusCard
          title="API"
          status="Dead"
          uptime="10.1%"
          details="Major Outage"
        />

        <StatusCard
          title="Webhooks"
          status="Down"
          uptime="87.3%"
          details="Degraded Performance"
        />

        <StatusCard
          title="CDN"
          status="Operational"
          uptime="99.9%"
          details="No current issues."
        />
      </div>
    </div>
  );
};

export default StatusGroup;
