'use client';

function slideLeft() {
    const avatar = document.getElementById('avatar');
    avatar.style.animation = 'slide-left 1s forwards';
}

function slideRight() {
    const avatar = document.getElementById('avatar');
    avatar.style.animation = 'slide-right 1s forwards';
}


export const Navbar = () => {
    return (
        <nav className="flex container bg-black h-99 p-2 mt-3 mx-6 rounded-3xl border-teal-400 border-2 fixed justify-between">
            <div className="flex items-center justify-start">{/* Left button */}
                <button className="text-white hover:text-teal-400 mr-4 glitch" onClick={slideLeft}>Left</button>
            </div>
            <div className="flex items-center justify-center">
                <img src="https://media.licdn.com/dms/image/C4D03AQFYSqmfIUcOog/profile-displayphoto-shrink_200_200/0/1660930336048?e=1701907200&v=beta&t=rsYIwI6TufJXEoAWfUjBCjVTZlhU1mmu7_qW-ELmI2Q" className="rounded-full w-10 " id="avatar" />
            </div>
            <div className="flex items-center justify-end">

            </div>
        </nav>
    )
}