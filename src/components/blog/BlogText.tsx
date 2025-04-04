export type BlogTextProps = {
    classNames?: {
        text?: string;
    }
}
export default function BlogText({
    children,
    ...props
}: React.PropsWithChildren<BlogTextProps>) {
    return (
        <span className={`text-gray-900 dark:text-white text-lg font-light break-words${props.classNames?.text ?? ""}`}>
            {children}
        </span>
    )
}