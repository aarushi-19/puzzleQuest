type Props = {
    title: string;
    description: string;
};

export default function FeatureCard({
    title,
    description
}: Props) {
    return (
        <div
            style={{
                width: "300px",
                padding: "30px",
                borderRadius: "18px",
                background: "#F7F7F7"
            }}
        >
            <h3>{title}</h3>

            <p>{description}</p>
        </div>
    );
}