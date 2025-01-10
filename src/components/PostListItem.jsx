import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
            {/* image */}
            <div className="md:hidden xl:block xl:w-1/3">
                <Image
                    src={"postImg.jpeg"}
                    className={"rounded-2xl object-cover"}
                />
            </div>
            {/* details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to={"/test"} className="text-4xl font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ex, distinctio.
                </Link>
                <div className="flex items-center gap-2 text-gray-200 text-sm">
                    <span className="text-gray-500">Written by</span>
                    <Link className="text-blue-800">Mr. Mahanty</Link>
                    <span className="text-gray-500">on</span>
                    <Link className="text-blue-800">Web Design</Link>
                    <span className="text-gray-500">2 days ago</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia ab, nihil architecto tempore temporibus consequuntur
                    animi consequatur nostrum hic perferendis libero. Iste fugit
                    animi totam amet? Vel blanditiis sunt repellendus.
                </p>
                <Link className="underline text-blue-800 text-sm">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostListItem;
