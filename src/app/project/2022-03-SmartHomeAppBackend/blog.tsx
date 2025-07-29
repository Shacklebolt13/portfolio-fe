
import BlogHeading from "@/components/blog/BlogHeading";
import BlogText from "@/components/blog/BlogText";
import { Spacer } from "@heroui/react";

export default function Blog() {
    return (
        <div className="flex flex-col flex-grow p-4 overflow-scroll scrollbar-hide max-h-[62vh]">
            <BlogHeading text="The requirement" />
            <BlogText>
                <p className="my-2">{"We creating a POC on smart home socket boards. Which would connect our application to 'dumb' appliances like fan or lights. The requirement was to create an application, backend and the socket for allowing the users to control their appliances via their phones."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="My Role" />
            <BlogText>
                <p className="my-2">{"I was the backend developer for the team of 3, working with an android developer, and an embedded developer. I was to design the entire backend infrastructure and integrate the same with both the ends."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="Room and Resource Management" />
            <BlogText>
                <p className="my-2">{"The UI would allow segregation of appliances in terms of rooms. The users can have multiple rooms, each having a set of appliances. Each and every device would have specific QR Code, and the internal device would have a unique code.It would allow users to scan and register the devices to their account."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="User and Permission Management" />
            <BlogText>
                <p className="my-2">{"The backend would use username and password authentication as well as JWT for authentication. Each Resource would be following the owner and borrower model, one user would be the owner, and can allow other borrowers to control their appliances. In order to borrow an appliance, the borrower has to request permission from their owner."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="Real Time Tracking And Control" />
            <BlogText>
                <p className="my-2">{"The backend integrated both ends using Socket.IO (web-sockets), which allows for real time communication between each component. It allows the user to control their appliances from their phones."}</p>
                <p className="my-2">{"The backend would also track in real time, the stats published by the device, namely amperage and voltage or anything else the device choses to. These stats would be streamed directly to the users, allowing them to track the device health."}</p>
            </BlogText>
            <Spacer y={5} />
        </div >
    )
}