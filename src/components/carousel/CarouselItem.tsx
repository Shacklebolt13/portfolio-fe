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
        <div className="flex flex-col items-center px-6 py-4 backdrop-blur-md bg-content1/30 rounded-xl border border-primary/20 shadow-md hover:shadow-lg transition-all hover:scale-105 overflow-hidden">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>

            <div className="relative h-20 w-20 z-10">
                <Image
                    src={largeIcon}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </div>

            {smallIcon && (
                <div className="relative h-8 w-8 mt-2 z-10">
                    <Image
                        src={smallIcon}
                        alt={`${title} badge`}
                        fill
                        className="object-contain"
                    />
                </div>
            )}

            <h4 className="mt-3 text-center font-medium text-content2 z-10">{title}</h4>
        </div>
    );
};

export default CarouselItem;
