import StatusCards from "../components/home/StatusCards";
import NoticeBoard from "../components/home/NoticeBoard";

export default function HomePage(){
    return (
        <div className="page">
            <StatusCards totalToys={0} pendingOrders={0} />
            <NoticeBoard />
        </div>
    );
}