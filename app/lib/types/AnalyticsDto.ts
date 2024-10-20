interface AnalyticsData {
  date: string;
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageSessionDuration: string;
  desktop: {
    pageViews: number;
    uniqueVisitors: number;
    bounceRate: number;
    averageSessionDuration: string;
  };
  mobile: {
    pageViews: number;
    uniqueVisitors: number;
    bounceRate: number;
    averageSessionDuration: string;
  };
  tablet: {
    pageViews: number;
    uniqueVisitors: number;
    bounceRate: number;
    averageSessionDuration: string;
  };
}
