export type BlogHeadingProps = {
    text: string;
    hideUnderline?: boolean;
    classNames?: {
        text?: string;
        underline?: string;
    }
}

export default function BlogHeading(
    props: BlogHeadingProps
) {
    return (
        <>
            <span className={`text-4xl text-gray-900 dark:text-white${props.classNames?.text ?? ""}`}>
                {props.text}
            </span>
            {!props.hideUnderline && <hr className={`my-2 ${props.classNames?.underline ?? ""}`} />}
        </>
    )
}