export default function Heading({ title, isPageTop }: Readonly<{ title: string, isPageTop?: boolean }>) {
    const baseClasses = `text-slate-800 tracking-widest font-semibold  mb-6
        sm:mb-8 md:mb-10 underline underline-offset-8 decoration-4 decoration-accent leading-8
        sm:leading-10 section-header`;

    const marginClasses = isPageTop ? 'mt-8 sm:mt-8 md:mt-1 sm:text-3xl text-2xl' : 'mt-8 sm:mt-8 md:mt-12 sm:text-2xl text-xl';

    return <div className={`${baseClasses} ${marginClasses}`}>{title}</div>;
}