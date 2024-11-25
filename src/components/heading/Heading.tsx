export default function Heading({ title }: Readonly<{ title: string }>) {
    return (
        <div className="text-slate-800
            tracking-widest
            font-semibold
            text-xl
            sm:text-2xl
            mt-8
            sm:mt-8
            md:mt-10
            mb-6
            sm:mb-8
            md:mb-10
            underline
            underline-offset-8
            decoration-4
            decoration-accent
            leading-8
            sm:leading-10
            section-header">
            {title}
        </div>
    );
}