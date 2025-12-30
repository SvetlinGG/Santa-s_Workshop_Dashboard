export default function Skeleton({ width = "100%", height = "20px", className = "" }) {
    return (
        <div 
            className={`skeleton ${className}`}
            style={{ 
                width, 
                height,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderRadius: "4px",
                animation: "skeleton-loading 1.5s infinite ease-in-out"
            }}
        />
    );
}