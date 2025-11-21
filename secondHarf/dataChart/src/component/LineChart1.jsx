// LineChart1.jsx

import "chart.js/auto"
import { Line } from "react-chartjs-2"

export default function LineChart1() {
    const step = [
        { day: 4, stepNumber: 3408 }, { day: 5, stepNumber: 1038 },
        { day: 6, stepNumber: 2345 }, { day: 7, stepNumber: 9027 },
        { day: 8, stepNumber: 2947 }, { day: 9, stepNumber: 9753 },
        { day: 10, stepNumber: 5981 }, { day: 11, stepNumber: 3892 },
        { day: 12, stepNumber: 3948 }, { day: 13, stepNumber: 1957 }
    ];

    // 외부 데이터를 받았다면 필요한 데이터를 확보하기 위한 가공작업이 필요하다.
    const days = step.map((d) => d.day);
    const steps = step.map((d) => d.stepNumber);

    // 일별 걸음수를 라인 그래프로 표현하기
    const stepMax = Math.max(...steps);
    const stepMin = Math.min(...steps);
    const maxIndex = steps.indexOf(stepMax); // indexOf는 데이터가 몇번째 인덱스인지 찾아준다
    const minIndex = steps.indexOf(stepMin);

    const data = {
        labels: days,
        datasets: [
            {
                label: "걸음수",
                data: steps,
                borderColor: "rgb(59, 130, 246)",
                order: 1
            },

            {
                label: "최고점",
                data: steps.map((v, i) => (i === maxIndex ? v : null)),
                borderColor: "transparent",
                pointBackgroundColor: "rgb(240, 50, 50)",
                pointRadius: 8,
                pointStyle: "rectRot",
                order: 3,
            },

            {
                label: "최저점",
                data: steps.map((v, i) => (i === minIndex ? v : null)),
                borderColor: "transparent",
                pointBackgroundColor: "rgb(71, 200, 62)",
                pointRadius: 8,
                pointStyle: "triangle",
                order: 2
            }
        ]
    };

    const options = {

    };

    return (
        <>
            <Line data={data} options={options} />
        </>
    );
}

/*
    기본 라인 그래프
    - 시간이나 순서에 따른 데이터 변화를 선으로 연결한 가장 기본 선 그래프
    - 월별 매출 추이, 일별 방문자수, 일별 걸은 수 등등

    다중 선 그래프
    - 두개 이상의 데이터 셋을 한 그래프에 여러 색상의 선으로 표현
    - 제품들의 월별 매출 비교, 동종 업계 순이익 비교

    계단형 선 그래프
    - 값이 갑자기 변하는 구간을 계단 모양으로 표시
    - 단계별 요금제 변화, 구간별 누적량 등등

    곡선형 선 그래프
    - 선을 부드럽게 연결하여 곡선 형태로 표현
    - 온도나 주가를 점진적인 변화 시각화

    점선 선 그래프, 면적형 선 그래프, 그라데이션 선 그래프
*/