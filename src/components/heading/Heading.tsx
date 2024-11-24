export default function Heading({ title }: Readonly<{ title: string }>) {
    return (
        <h2 className="heading">
            {title}
        </h2>
    );
}