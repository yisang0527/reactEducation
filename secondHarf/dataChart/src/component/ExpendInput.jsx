// ExpendInput.jsx
// App.jsx에 등록하기

import { useState, useEffect } from "react";
import BarChartCard from "./BarChartCard";

export default function ExpendInput() {
    const [expendList, setExpendList] = useState([]);
    const [money, setMoney] = useState(0);
    const [detail, setDetail] = useState("");
    const [day, setDay] = useState("");
    const [showChart, setShowChart] = useState(false);
    const [chartData, setChartData] = useState(null); // 막대 차트 컴포넌트에 보내는 것

    useEffect(() => {
        const jsonData = localStorage.getItem("expendList");
        if (jsonData) {
            setExpendList(JSON.parse(jsonData));
        }
    }, []);

    const save = () => {
        if (!money || !day) {
            alert("금액과 날짜는 반드시 입력"); return;
        }

        const newItem = {
            id: Date.now(), money: Number(money), detail, day
        };

        setExpendList((p) => {
            const newData = [...p, newItem]
            // 금액, 내용, 날짜 로컬 스토리지에 저장
            localStorage.setItem("expendList", JSON.stringify(newData));
            return newData;
        });
        setMoney(0);
        setDetail("");
        console.log(expendList);
    };

    // 차트 버튼을 클릭하면 동작할 함수
    const chartActive = () => {
        if (expendList.length === 0) {
            alert("등록된 내역이 없다! 쯧");
            return;
        };

        // 날짜별 지출 총금액을 막대 그래프로 표현
        const totalByDate = expendList.reduce((a, c) => {
            if (!a[c.day]) a[c.day] = 0;
            a[c.day] += c.money;
            return a; // "2025-11-09" : 150000
        }, {});
        // totalByData = {
        // "2025-11-09" : 150000,
        // "2025-11-10" : 40000,
        // "2025-11-11" : 1230000
        // } 

        const labels = Object.keys(totalByDate).sort();
        const data = labels.map((d) => totalByDate[d]);
        const label = "날짜별 지출 합계";

        setChartData({ labels, data, label });

        setShowChart(true);
    };

    return (
        <>
            <div className="flex flex-col items-start">
                금액 <input type="number" value={money} onChange={(e) => setMoney(e.target.value)} className="mb-2.5 border" />
                내용 <input type="text" value={detail} onChange={(e) => setDetail(e.target.value)} className="mb-2.5 border" />
                날짜 <input type="date" value={day} onChange={(e) => setDay(e.target.value)} className="mb-10 border" />

                <button onClick={save} className="cursor-pointer border w-14 mb-2.5">등록</button>
            </div>

            <div className="flex flex-col items-start">

                {
                    showChart ?
                        <BarChartCard labels={chartData.labels} data={chartData.data} label={chartData.label} /> :
                        <button onClick={chartActive} className="cursor-pointer border w-14 mb-10">차트</button>
                }

            </div>
        </>
    );
}

/*
    num = [1, 2, 3, 4, 5] 1부터 5까지 총합
    num.reduce((a,c) => {
        a += c;
        return a;
    }, 0)
*/