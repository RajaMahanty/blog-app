import Image from "./Image";

const Comment = () => {
    return (
        <div className="">
            <div className="p-4 bg-slate-50 rounded-xl mb-8">
                <div className="flex items-center gap-4">
                    <Image
                        src={"default-image.jpg"}
                        className={"size-10 rounded-full object-cover"}
                        w={40}
                    />
                    <span className="font-medium">Anonymous User</span>
                    <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <div className="mt-4">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Debitis asperiores tempora, quo earum ad itaque
                        nisi culpa, necessitatibus eum alias aliquam officia
                        recusandae, ea ut harum at esse natus fuga.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comment;
