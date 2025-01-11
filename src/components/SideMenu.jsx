import { Link } from "react-router-dom";
import Search from "../components/Search";

const SideMenu = () => {
    return (
        <div className="px-4 h-full sticky top-8">
            <h1 className="mb-4 text-sm font-medium">Search</h1>
            <Search />
            <h1 className="mt-8 mb-4 text-sm font-medium">Filters</h1>
            <div className="flex flex-col gap-2 text-sm">
                <label
                    htmlFor=""
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <input
                        type="radio"
                        name="sort"
                        value={"newest"}
                        className="appearance-none size-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
                    />{" "}
                    Newest
                </label>
                <label
                    htmlFor=""
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <input
                        type="radio"
                        name="sort"
                        value={"most-popular"}
                        className="appearance-none size-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
                    />{" "}
                    Most Popular
                </label>
                <label
                    htmlFor=""
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <input
                        type="radio"
                        name="sort"
                        value={"trending"}
                        className="appearance-none size-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
                    />{" "}
                    Trending
                </label>
                <label
                    htmlFor=""
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <input
                        type="radio"
                        name="sort"
                        value={"oldest"}
                        className="appearance-none size-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
                    />{" "}
                    Oldest
                </label>
            </div>
            <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
                <Link to={"/posts"} className="underline">
                    All
                </Link>
                <Link to={"/posts?cat=general"} className="underline">
                    General
                </Link>
                <Link to={"/posts?cat=web-design"} className="underline">
                    Web Design
                </Link>
                <Link to={"/posts?cat=dev"} className="underline">
                    Development
                </Link>
                <Link to={"/posts?cat=db"} className="underline">
                    Databases
                </Link>
                <Link to={"/posts?cat=seo"} className="underline">
                    Search Engines
                </Link>
                <Link to={"/posts?cat=marketing"} className="underline">
                    Marketing
                </Link>
            </div>
        </div>
    );
};

export default SideMenu;
