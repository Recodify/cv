import Heading from "../heading/Heading";

export function Education() {
    return (
        <div className="print:breakbefore">
            <Heading title="EDUCATION" />
            <ul className="list-disc text-slate-600 space-y-2 ml-10">
                <li>Excellent GCSEs and A-Levels</li>
                <li>20+ years industry experience</li>
                <li>Founding and exiting a business valued at double digit £M.</li>
            </ul>
        </div>
    )
}