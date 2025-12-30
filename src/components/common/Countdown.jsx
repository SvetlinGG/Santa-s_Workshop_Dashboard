import { useState, useEffect } from "react";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const christmas = new Date(new Date().getFullYear(), 11, 25);
            const now = new Date();
            
            if (now > christmas) {
                christmas.setFullYear(christmas.getFullYear() + 1);
            }
            
            const difference = christmas - now;
            
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            return { days, hours, minutes, seconds };
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        setTimeLeft(calculateTimeLeft());

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown-header">
            <span className="countdown-label">🎄 Christmas:</span>
            <div className="countdown-grid">
                <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.days}</span>
                    <span className="countdown-unit">Days</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.hours}</span>
                    <span className="countdown-unit">Hours</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.minutes}</span>
                    <span className="countdown-unit">Min</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.seconds}</span>
                    <span className="countdown-unit">Sec</span>
                </div>
            </div>
        </div>
    );
}