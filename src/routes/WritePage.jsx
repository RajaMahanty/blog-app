import { useUser } from "@clerk/clerk-react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const WritePage = () => {
    const { isLoaded, isSignedIn } = useUser();

    if (!isLoaded) {
        return <div className="">Loading...</div>;
    }

    if (isLoaded && !isSignedIn) {
        return <div className="">You should login!</div>;
    }

    return (
        <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
            <h1 className="text-clip font-light">Create a New Post</h1>
            <form className="flex flex-col gap-6 flex-1 mb-6">
                <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
                    Add a cover image
                </button>
                <input
                    className="text-4xl font-semibold bg-transparent outline-none"
                    type="text"
                    placeholder="Blog Title..."
                />
                <div className="flex items-center gap-2">
                    <label htmlFor="" className="text-sm">
                        Choose a category:
                    </label>
                    <select
                        name="cat"
                        className="p-2 rounded-xl bg-white shadow-md"
                    >
                        <option value="general">General</option>
                        <option value="web-design">Web Design</option>
                        <option value="dev">Development</option>
                        <option value="db">Databases</option>
                        <option value="seo">Search Engines</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
                <textarea
                    name="desc"
                    placeholder="A short description"
                    className="p-4 rounded-xl bg-white shadow-md"
                />
                <ReactQuill
                    theme="snow"
                    className="flex-1 rounded-xl bg-white shadow-md"
                />
                <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                    <span className="relative z-10">Send</span>
                </button>
            </form>
        </div>
    );
};

export default WritePage;
