"use client";
import { QueryClient } from "@tanstack/react-query";
import BarChartCard from "./components/BarChartCard";
import ChartCard from "./components/ChartCard";
import StatisticCard from "./components/StatisticCard";
import { getAnalytics } from "@/api/services";
import StackedAreaChart from "./components/StackedAreaChart";

const DashboardPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<AnalyticsData[]>({
    queryKey: ["analytics"],
    queryFn: getAnalytics,
  });

  const data = queryClient.getQueryData<AnalyticsData[]>(["analytics"]) || [];

  const totalPageViews = data.reduce((total, item) => total + item.pageViews, 0);
  const totalUniqueVisitors = data.reduce((total, item) => total + item.uniqueVisitors, 0);
  const totalBounceRate = data.reduce((total, item) => total + item.bounceRate, 0);

  const chartsGroupData = [
    {
      name: "Desktop Page Views",
      value: data.reduce((total, item) => total + (item.desktop?.pageViews || 0), 0),
    },
    {
      name: "Mobile Page Views",
      value: data.reduce((total, item) => total + (item.mobile?.pageViews || 0), 0),
    },
    {
      name: "Tablet Page Views",
      value: data.reduce((total, item) => total + (item.tablet?.pageViews || 0), 0),
    },
  ];

  const chartsUniqueVisitorsData = [
    {
      name: "Desktop Unique Visitors",
      value: data.reduce((total, item) => total + (item.desktop?.uniqueVisitors || 0), 0),
    },
    {
      name: "Mobile Unique Visitors",
      value: data.reduce((total, item) => total + (item.mobile?.uniqueVisitors || 0), 0),
    },
    {
      name: "Tablet Unique Visitors",
      value: data.reduce((total, item) => total + (item.tablet?.uniqueVisitors || 0), 0),
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-medium">Customer</h2>
      <div className="flex mt-4 gap-6">
        <StatisticCard title="Total Page Views" value={totalPageViews.toString()} />
        <StatisticCard title="Total Unique Visitors" value={totalUniqueVisitors.toString()} />
        <StatisticCard title="Total Bounce Rate" value={totalBounceRate.toString()} />
      </div>

      <h2 className="mt-10 text-2xl font-medium">Analytics</h2>

      <div className="mt-4 grid grid-cols-3 gap-5">
        <ChartCard chartData={chartsGroupData} uniqueVisitorsData={chartsUniqueVisitorsData} />
        <BarChartCard data={data} />
        <StackedAreaChart data={data} />
      </div>
    </div>
  );
};
export default DashboardPage;
