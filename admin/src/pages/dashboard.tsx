import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { BreadcrumbUI } from "@src/components/BreadcrumbUI";
import { useSignals } from "@src/hooks/useSignals";

const Dashboard = () => {
  const Signalments = useSignals().signals;
  const cleanedSignalments = Signalments.filter((signal) =>
    signal.cleaning?.map((clean) => clean.status === "pending").includes(true),
  );
  const series = [Signalments.length, cleanedSignalments.length];
  const options: ApexOptions = {
    labels: ["Signalments", "Nettoyages"],
    colors: ["#FECA45", "#2DAD82"],

    chart: {
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
    },

    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
              label: "uncleaned Signalments",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "22px",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce(
                  (a: number, b: number) => {
                    return Math.abs(b - a);
                  },
                  0,
                );
                return sum;
              },
            },
          },
        },
      },
    },

    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      fontSize: "25px",
      offsetY: 20,
      height: 60,
    },
    dataLabels: {
      enabled: false,
    },
  };
  const path = [
    { name: "Dashboard", path: "/" },
    { name: "", path: "" },
  ];
  return (
    <div className="flex-grow bg-[#FAFBFA] p-4 flex gap-4 flex-col">
      <BreadcrumbUI path={path} />
      <div className="bg-white w-[40%] p-4 shadow-lg border border-stone-100 rounded-md">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">Eco Signal</p>
          {/* <button className="flex items-center space-x-2 px-2 py-1.5 text-white bg-[#2DAD82] hover:bg-[#69d7b2] rounded">
            <span className="text-xs font-semibold">Rafraichir</span>
          </button> */}
        </div>
        <Chart options={options} series={series} type="donut" />
      </div>
    </div>
  );
};

export default Dashboard;
