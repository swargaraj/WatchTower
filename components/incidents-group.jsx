import IncidentCard from "@/components/incident-card.jsx";
const StatusGroup = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 py-3">
        <h2 className="text-xl font-medium ">Incidents History</h2>
        <p className="text-sm text-neutral-500">
          Here you can see the incidents history of our services.
        </p>
      </div>

      <div className="space-y-4">
        <IncidentCard
          title="Delayed API Response"
          status="Resolved"
          date="Jun 28, 2024"
        />
        <IncidentCard
          title="Degraded Website Experience"
          status="Resolved"
          date="Jun 20, 2024"
        />
      </div>
    </div>
  );
};

export default StatusGroup;
