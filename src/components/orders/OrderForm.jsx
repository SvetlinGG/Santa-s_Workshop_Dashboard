import { useMemo, useState } from "react";


const PRIORITIES = ["Low", "Normal","High"];

function validate(values){
    const errors = {};

    if (!values.childName || values.childName.trim().length < 2){
        errors.childName = "Child name must be at least 2 characters.";
    }
    if (!values.country || !values.country.trim()){
        errors.country = "Country is required.";
    }
    if (!values.toyId){
        errors.toyId = "Please select a toy.";
    }
    if (!values.priority){
        errors.priority = "Priority is required.";
    }

    return errors;
}

export default function OrderForm({toys, onSubmit, isSubmitting}){
    const [values, setValues] = useState({
        childName: "",
        country: "",
        toyId: "",
        priority: "Normal",
    });

    const [touched, setTouched] = useState({});

    const errors = useMemo(() => validate(values), [values]);
    const canSubmit = Object.keys(errors).length === 0 && !isSubmitting;

    function setField(name, value){

        setValues((v) => ({...v, [name]: value}));
    }

    function onBlur(name){
        setTouched((t) => ({...t, [name]: true }));
    }

    function handleSubmit(e){
        e.preventDefault();
        setTouched({ childName: true, country: true, toyId: true, priority: true });

        const currentErrors = validate(values);
        if (Object.keys(currentErrors).length > 0) return;

        onSubmit(values);
    }

    return (
        <form className="panel form" onSubmit={handleSubmit} >
            <h3>Create Order</h3>

            <label className="field">
                <span>Child Name</span>
                <input
                    value={values.childName}
                    onChange={(e) => setField("childName", e.target.value)}
                    onBlur={() => onBlur("childName")}
                    placeholder="e.g. Maria"
                     />
                     {touched.childName && errors.childName ? (
                        <small className="error">{errors.childName}</small>
                     ) : null}
            </label>

            <label className="field">
                <span>Country</span>
                <input 
                value={values.country}
                onChange={(e) => setField("country", e.target.value)}
                onBlur={() => onBlur("country")}
                placeholder="e.g. Bulgaria"
                 />
                 {touched.country && errors.country ? (
                    <small className="error">{errors.country}</small>
                 ) : null}
            </label>

            <label className="field">
                <span>Toy</span>
                <select 
                    value={values.toyId}
                    onChange={(e) => setField("toyId", e.target.value)}
                    onBlur={() => onBlur("toyId")}
                    >
                     <option value="">Select a toy...</option>
                     {toys.map((t) => (
                        <option key={t.id} value={t.id}>
                            {t.name} ({t.category})
                        </option>
                     ))}
                </select>
                {touched.toyId && errors.toyId ? (
                    <small className="error">{errors.toyId}</small>
                ) : null}
            </label>

            <label className="field">
                <span>Priority</span>
                <select
                    value={values.priority} 
                    onChange={(e) => setField("priority", e.target.value)}
                    onBlur={() => onBlur("priority")}
                    >
                        {PRIORITIES.map((p) => (
                            <option key={p} value={p}>
                                {p}
                            </option>
                        ))}
                    </select>
                    {touched.priority && errors.priority ? (
                        <small className="error">{errors.priority}</small>
                    ) : null}
            </label>
            <button type="submit" className="btn" disabled={!canSubmit}>
                {isSubmitting ? "Creating..." : "Create Order"}
            </button>
        </form>
    );
}