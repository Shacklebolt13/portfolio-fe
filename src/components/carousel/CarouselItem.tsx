import Image from "next/image";
import React from "react";

export interface CarouselItemProps {
    largeIcon: string;
    smallIcon?: string;
    title: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
    largeIcon,
    smallIcon,
    title,
}) => {
    return (
        <div className="flex flex-col items-center px-6 py-4 bg-content1 rounded-xl border border-divider shadow-sm hover:shadow-md transition-all hover:scale-105">
            <div className="relative h-20 w-20">
                <Image
                    src={largeIcon}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </div>

            {smallIcon && (
                <div className="relative h-8 w-8 mt-2">
                    <Image
                        src={smallIcon}
                        alt={`${title} badge`}
                        fill
                        className="object-contain"
                    />
                </div>
            )}

            <h4 className="mt-3 text-center font-medium text-content2">{title}</h4>
        </div>
    );
};

export default CarouselItem;
