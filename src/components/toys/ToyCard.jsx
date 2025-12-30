import { Link } from "react-router-dom";

export default function ToyCard({ toy }) {
    const getImagePath = (toyName) => {
        const imageName = toyName.toLowerCase().replace(/\s+/g, '-');
        return `/images/images/${imageName}.jpg`; // Fixed path to nested images folder
    };

    const handleImageError = (e) => {
        const imageName = toy.name.toLowerCase().replace(/\s+/g, '-');
        const formats = ['jpg', 'jpeg', 'png', 'avif', 'webp'];
        
        // Try other formats in the correct nested path
        for (let format of formats) {
            const testSrc = `/images/images/${imageName}.${format}`;
            if (e.target.src !== testSrc) {
                e.target.src = testSrc;
                return;
            }
        }
        
        // Final fallback
        e.target.src = '/images/placeholder.jpg';
    };

    return (
        <div className="toy-card">
            <div className="toy-card-image">
                <img 
                    src={getImagePath(toy.name)} 
                    alt={toy.name}
                    onError={handleImageError}
                />
            </div>
            <div className="toy-card-content">
                <Link to={`/toys/${toy.id}`} className="toy-card-title">
                    {toy.name}
                </Link>
                <div className="toy-card-details">
                    <span className="toy-category">{toy.category}</span>
                    <span className={`pill ${toy.difficulty.toLowerCase()}`}>
                        {toy.difficulty}
                    </span>
                </div>
                <div className="toy-card-stock">
                    <span className={toy.inStock ? "status ok" : "status bad"}>
                        {toy.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                </div>
            </div>
        </div>
    );
}