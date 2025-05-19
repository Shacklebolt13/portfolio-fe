import Image from "next/image";
import React from "react";

export interface CarouselItemProps {
    largeIcon: string;
    smallIcon?: string;
    title: string;
    href: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
    largeIcon,
    smallIcon,
    title,
    href,
}) => {
    return (
        <a href={href} className="flex flex-col items-center px-4 sm:px-5 md:px-6 py-3 sm:py-4 backdrop-blur-md bg-content1/30 rounded-xl border border-primary/20 shadow-md hover:shadow-lg transition-all hover:scale-105 overflow-hidden">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>

            <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 z-10">
                <Image
                    src={largeIcon}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </div>

            {smallIcon && (
                <div className="relative h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mt-1 sm:mt-2 z-10">
                    <Image
                        src={smallIcon}
                        alt={`${title} badge`}
                        fill
                        className="object-contain"
                    />
                </div>
            )}

            <h4 className="mt-2 sm:mt-3 text-center text-sm sm:text-base md:text-md font-medium text-content2 z-10">{title}</h4>
        </a>
    );
};

export default CarouselItem;
