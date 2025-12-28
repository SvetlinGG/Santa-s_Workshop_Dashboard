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

    function setFailed(name, value){

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

    return ()
}