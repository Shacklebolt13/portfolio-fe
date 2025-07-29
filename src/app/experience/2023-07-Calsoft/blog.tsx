import BlogHeading from "@/components/blog/BlogHeading";
import BlogText from "@/components/blog/BlogText";
import { Spacer } from "@heroui/react";
export default function Blog() {
    return (
        <div className="flex flex-col flex-grow p-4 overflow-scroll scrollbar-hide max-h-[62vh]">
            <BlogHeading text="The Single Source of Truth" />
            <BlogText>
                <p className="my-2">{"We had a very complex system of adapters that would connect to 3rd party applications."}</p>
                <p className="my-2">{"As the number of adapters grew, each adapter had a different set of param requirements, validations, etc. which were extremely complex to statically map out in code."}</p>
                <p className="my-2">{"I categorized each adapter into subtypes, and built a generalized solution, using the single source of truth mechanism, that would simply contain, all the details about each and every adapter, their param requirements, validation requirements, and other details."}</p>
                <p className="my-2">{"This could then be used by the various components, and allow easy maintenance and flexibility. It would also make sure, any details exposed to Frontend, would only contain non-sensitive details. It was appreciated for its simplicity and effectiveness. The mechanism is being used even to this day."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="Snap Start Integration" />
            <BlogText>
                <p className="my-2">{"Using JAVA for Lambdas had a long start-up time of nearly 2s. This was a lot especially considering there was lambda to lambda calls as well."}</p>
                <p className="my-2">{"As a solution, I singlehandedly identified incompatible code and modified the entire codebase to be able to employ Snap Start. After the code base, I wrote the entire infra as well, applying Snap Start to all existing Lambdas."}</p>
                <p className="my-2">{"It reduced the start-up time of the lambdas from 2s to nearly 700ms. which is nearly a 65% improvement in API response times."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="Billing Integration W Core" />
            <BlogText>
                <p className="my-2">{"Once our application was ready for the beta, the next step was to introduce billing into our application. to generate revenue for the company. In the existing code, there were hardly any data that can be used to calculate how much to charge a user."}</p>
                <p className="my-2">{"I designed the flow of how such billing related data would be collected, stored and then used for invoice generation, such that the user is billed exactly once for each resources on their application, how duplicate resources were identified and managed."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="Upgrade to JAVA 17" />
            <BlogText>
                <p className="my-2">{"There was a situation that one of the tools that we used for static analysis of our code, was soon going to discontinue support for the java version we were using."}</p>
                <p className="my-2">{"As a result, since we had a microservice-serverless hybrid, each code base had to be migrated to a newer Java version. This required identifying incompatible components and dependencies, upgrading them or replacing them with others. After a detailed analysis of our codebase, I identified, upgraded and substituted dependencies that were essential for our upgrade. This was then document thoroughly for use by other service owners."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="Pagination / Sorting" />
            <BlogText>
                <p className="my-2">{"The technologies we used did not internally support pagination and sorting. And a custom implementation had to be created."}</p>
                <p className="my-2">{"I implemented a custom pagination and sorting mechanism using raw SQL queries. The mechanism was created to be an easy plug and play, that can be used for various components, supporting multiple fields and params."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="Versioning" />
            <BlogText>
                <p className="my-2">{"Due to constant cycles of development and fixes, we soon reached a situation where a single change in the existing functionality could break the entire environment. We had to support multiple versions of APIs in order for other teams to allow time to upgrade the API integrations."}</p>
                <p className="my-2">{"To resolve this issue, I designed a versioning system for supporting multiple major and minor versions. This allowed us to define a generic way to version APIs, that could easily allow major changes without breaking the existing implementations."}</p>
            </BlogText>
            <Spacer y={5} />
        </div>
    )
}