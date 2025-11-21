// LineChart2.jsx

import "chart.js/auto"
import { Line } from "react-chartjs-2"

export default function LineChart2() {
    const elecGas = [
        { month: "1월", electric: 280, gas: 40 },
        { month: "2월", electric: 220, gas: 28 },
        { month: "3월", electric: 240, gas: 95 },
        { month: "4월", electric: 238, gas: 20 },
        { month: "5월", electric: 202, gas: 57 },
        { month: "6월", electric: 273, gas: 19 },
        { month: "7월", electric: 282, gas: 58 },
    ];

    const [labels, electric, gas] = [
        elecGas.map((d) => d.month),
        elecGas.map((d) => d.electric),
        elecGas.map((d) => d.gas)
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "전기사용량(kwh)",
                data: electric,
                pointHoverRadius: 15,
                yAxisId: "y",
            },

            {
                label: "가스사용량(㎡)",
                data: gas,
                pointHoverRadius: 15,
                yAxisId: "y2",
            }
        ]
    };

    return (
        <>
            <Line data={data} options={{
                scales: {
                    y: {
                        position: "left",
                    },

                    y2: {
                        position: "right",
                        grid: {
                            drawOnChartArea: false,
                        },
                    },
                }
            }} />
        </>
    );
}