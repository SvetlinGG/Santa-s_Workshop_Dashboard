import { useEffect, useState } from "react";


export default function ElfProfile({ elf }){
    const [energy, setEnergy] = useState(Number(elf.energy) || 0);

    useEffect(() => {
        setEnergy(Number(elf.energy) || 0);
    }, [elf.id, elf.energy]);

    function boost(){
        setEnergy((e) => Math.min(100, e + 10));
    }

    return (
        <section className="panel">
            <div className="details-head">
                <div>
                    <h3>{elf.name}</h3>
                    <p className="muted">
                        Role: <strong>{elf.role}</strong>
                    </p>
                </div>

                <button className="btn" onClick={boost}>
                    Boost Energy +10
                </button>
            </div>

            <div className="details-grid">
                <div className="details-row">
                    <span className="label">Elf ID</span>
                    <span className="mono">{elf.id}</span>
                </div>

                <div className="details-row">
                    <span className="label">Energy</span>
                    <span>
                        <div className="energy" style={{ maxWidth: '360px'}}>
                            <div className="energy-bar" style={{ width: `${energy}%` }} />
                        </div>
                        <span className="mono">{energy}/100</span>
                    </span>
                </div>
            </div>
        </section>
    );
}