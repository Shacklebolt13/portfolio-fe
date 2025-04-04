"use client";
export default function SkillLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col flex-grow mx-4 my-2">
            {children}
        </div>
    )
}