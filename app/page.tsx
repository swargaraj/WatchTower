import Header from "@/layout/header";
import Banner from "@/layout/banner";

import StatusGroup from "@/components/status-group";
import MetricsGroup from "@/components/metrics";
import StatusBanner from "@/components/status-banner";
import IncidentsGroup from "@/components/incidents-group";

export default function Home() {
  return (
    <div className="relative w-full h-full min-h-screen bg-[#F8FAFC]">
      {/* <Banner /> */}
      <Header />
      <StatusBanner />
      <StatusGroup
        title="Platform Status"
        description="Here you can see the current status of our services. We monitor them 24/7 to ensure they are up and running smoothly."
      />
      <MetricsGroup
        title="Metrics"
        description="Here you can see the metrics of our services."
      />
      <IncidentsGroup />
    </div>
  );
}
