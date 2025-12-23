

const DEFAULT_NOTICES = [
    "🧤 Reminder: Wear gloves in the paint station.",
    "🛷 Route planning meeting today at 16:00.",
    "🎁 Priority orders should be packed first.",
    "🧝 Elf energy breaks: 10 minutes every hour.",
    "❄️ Warehouse temperature check at 18:00.",
];

export default function NoticeBoard({ notices = DEFAULT_NOTICES}){

    const limited = notices.slice(0, 5);

    return (
        <section className="notice-board">
            <h2>Workshop Notice Board</h2>
            <ul>
                {limited.map((text, idx) => (
                    <li key={idx}>{text}</li>
                ))}
            </ul>
        </section>
    );
}