import { useEffect } from 'react';

export default function Snow() {
    useEffect(() => {
        const createSnowflake = () => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.innerHTML = '❄';
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            snowflake.style.opacity = Math.random();
            snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
            
            document.body.appendChild(snowflake);
            
            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        };

        const snowInterval = setInterval(createSnowflake, 100);

        return () => {
            clearInterval(snowInterval);
            document.querySelectorAll('.snowflake').forEach(flake => flake.remove());
        };
    }, []);

    return null;
}