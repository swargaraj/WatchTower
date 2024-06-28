import Header from "@/layout/header";
import Banner from "@/layout/banner";

import StatusGroup from "@/components/status-group";
import ResponseTimeGroup from "@/components/response-time-group";

export default function Home() {
  return (
    <div className="relative w-full h-full min-h-screen bg-[#F8FAFC]">
      <Banner />
      <Header />
      <ResponseTimeGroup
        title="Response Time"
        description="Here you can see the response time of our services."
      />
      <StatusGroup
        title="Platform Status"
        description="Here you can see the current status of our services. We monitor them 24/7 to ensure they are up and running smoothly."
      />
    </div>
  );
}
