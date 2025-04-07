import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";

export default function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-neutral">
      <Sidebar />
      <MainContent />
    </div>
  );
}
