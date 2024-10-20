import { FC } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Rectangle,
  Legend,
} from "recharts";

interface AnalyticsData {
  desktop?: { pageViews?: number; uniqueVisitors?: number; bounceRate?: number };
  mobile?: { pageViews?: number; uniqueVisitors?: number; bounceRate?: number };
  tablet?: { pageViews?: number; uniqueVisitors?: number; bounceRate?: number };
}

interface AggregatedData {
  name: string;
  totalPageViews: number;
  totalUniqueVisitors: number;
  totalBounceRate: number;
}

const BarChartCard: FC<{ data: AnalyticsData[] }> = ({ data }) => {
  const aggregatedDeviceData: AggregatedData[] = [
    {
      name: "Desktop",
      totalPageViews: data.reduce((total, item) => total + (item.desktop?.pageViews || 0), 0),
      totalUniqueVisitors: data.reduce(
        (total, item) => total + (item.desktop?.uniqueVisitors || 0),
        0
      ),
      totalBounceRate:
        data.reduce((total, item) => total + (item.desktop?.bounceRate || 0), 0) / data.length,
    },
    {
      name: "Mobile",
      totalPageViews: data.reduce((total, item) => total + (item.mobile?.pageViews || 0), 0),
      totalUniqueVisitors: data.reduce(
        (total, item) => total + (item.mobile?.uniqueVisitors || 0),
        0
      ),
      totalBounceRate:
        data.reduce((total, item) => total + (item.mobile?.bounceRate || 0), 0) / data.length,
    },
    {
      name: "Tablet",
      totalPageViews: data.reduce((total, item) => total + (item.tablet?.pageViews || 0), 0),
      totalUniqueVisitors: data.reduce(
        (total, item) => total + (item.tablet?.uniqueVisitors || 0),
        0
      ),
      totalBounceRate:
        data.reduce((total, item) => total + (item.tablet?.bounceRate || 0), 0) / data.length,
    },
  ];

  return (
    <div className="flex flex-col px-6 py-3 border shadow gap-1 border-slate-500/10 shadow-black/10 bg-white/80 rounded-md min-w-60 sm:w-full xsm:w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={aggregatedDeviceData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalPageViews"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="totalUniqueVisitors"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartCard;
