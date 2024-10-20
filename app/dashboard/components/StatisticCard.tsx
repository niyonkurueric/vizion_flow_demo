import { FC } from "react";
import { FaUsers } from "react-icons/fa";

type StatisticCardProps = {
  title: string;
  value: string;
};

const StatisticCard: FC<StatisticCardProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col px-6 py-3 border shadow gap-1 border-slate-500/10 shadow-black/10 bg-white/80 rounded-md min-w-60">
      <FaUsers className="text-2xl" />
      <span className="text-sm">{title}</span>
      <span className="text-2xl font-medium">{value}</span>
    </div>
  );
};
export default StatisticCard;
