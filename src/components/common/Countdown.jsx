import { useEffect, useMemo, useState } from "react";

function getNextChristmasDate(){
    const now = new Date();
    const year = now.getMonth() === 11 && now.getDate() > 25 ? now.getFullYear() + 1 : now.getFullYear();
    return new Date(year, 11, 25, 0, 0, 0);
}

function formatCountdown(ms){
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
}

export default function Countdown(){
    const target = useMemo(() => getNextChristmasDate(), []);
    const [now, setNow] = useState(() => Date.now());

    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, []);

    const diff = target.getTime() - now;
    const { days, hours, minutes, seconds } = formatCountdown(diff);

    return (
        <section className="panel">
            <h3>🎄 Countdown to Christmas</h3>
            <div className="countdown">
                <div className="timebox"><strong>{days}</strong><span>days</span></div>
                <div className="timebox"><strong>{hours}</strong><span>hours</span></div>
                <div className="timebox"><strong>{minutes}</strong><span>min</span></div>
                <div className="timebox"><strong>{seconds}</strong><span>sec</span></div>
            </div>
        </section>
    );
}