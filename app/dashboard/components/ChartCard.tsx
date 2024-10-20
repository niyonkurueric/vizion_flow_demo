import { FC } from "react";
import { Pie, PieChart } from "recharts";
interface DesktopPageView {
  name?: string;
  value?: number | undefined;
}

const ChartCard: FC<{
  chartData: DesktopPageView[];
  uniqueVisitorsData: DesktopPageView[];
}> = ({ chartData, uniqueVisitorsData }) => {
  return (
    <div className="border  gap-1 border-slate-500/20 bg-white/80 rounded-md min-w-60 p-3 xsm:w-full sm:w-full">
      <span className="text-lg font-medium">User page view on all devices</span>

      <PieChart width={400} height={300}>
        <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
        <Pie
          data={uniqueVisitorsData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};
export default ChartCard;
