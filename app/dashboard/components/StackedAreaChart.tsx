import { FC } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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

const StackedAreaChart: FC<{ data: AnalyticsData[] }> = ({ data }) => {
  const aggregatedDeviceData: AggregatedData[] = [
    {
      name: "Desktop",
      totalPageViews: data?.reduce((total, item) => total + (item.desktop?.pageViews || 0), 0),
      totalUniqueVisitors: data?.reduce(
        (total, item) => total + (item.desktop?.uniqueVisitors || 0),
        0
      ),
      totalBounceRate:
        data?.reduce((total, item) => total + (item.desktop?.bounceRate || 0), 0) / data.length,
    },
    {
      name: "Mobile",
      totalPageViews: data?.reduce((total, item) => total + (item.mobile?.pageViews || 0), 0),
      totalUniqueVisitors: data?.reduce(
        (total, item) => total + (item.mobile?.uniqueVisitors || 0),
        0
      ),
      totalBounceRate:
        data?.reduce((total, item) => total + (item.mobile?.bounceRate || 0), 0) / data.length,
    },
    {
      name: "Tablet",
      totalPageViews: data?.reduce((total, item) => total + (item.tablet?.pageViews || 0), 0),
      totalUniqueVisitors: data.reduce(
        (total, item) => total + (item.tablet?.uniqueVisitors || 0),
        0
      ),
      totalBounceRate:
        data?.reduce((total, item) => total + (item.tablet?.bounceRate || 0), 0) / data.length,
    },
  ];

  return (
    <div className="border gap-1 border-slate-500/20 bg-white/80 rounded-md min-w-60 p-3 xsm:w-full sm:w-full h-[430px]">
      <span className="text-lg font-medium">User Page View on All Devices</span>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={aggregatedDeviceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="totalPageViews"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="totalUniqueVisitors"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="totalBounceRate"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedAreaChart;
