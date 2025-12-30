import { useState, useEffect } from "react";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState("");

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
            
            return `${days}d ${hours}h ${minutes}m ${seconds}s`;
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
            <span className="countdown-time">{timeLeft}</span>
        </div>
    );
}