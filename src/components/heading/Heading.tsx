export default function Heading({ title }: Readonly<{ title: string }>) {
    return (
        <div className="text-slate-800
    tracking-widest
    font-semibold
    text-2xl
    mt-10
    mb-10
    underline
    underline-offset-8
    decoration-4
    decoration-accent
    section-header">
            {title}
        </div>
    );
}