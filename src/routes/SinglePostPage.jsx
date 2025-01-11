import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* details */}
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laudantium, mollitia.
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="">Written by</span>
                        <Link className="text-blue-800">Mr. Mahanty</Link>
                        <span className="">on</span>
                        <Link className="text-blue-800">Web Design</Link>
                        <span className="">2 days ago</span>
                    </div>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit repudiandae eius repellendus commodi amet dolore,
                        minus voluptates aut voluptatum, dolorum aspernatur iste
                        quas molestias voluptatibus vitae laborum? Minus,
                        mollitia aliquid!
                    </p>
                </div>
                <div className="hidden lg:block w-2/5">
                    <Image
                        src={"./postImg.jpeg"}
                        w={"600"}
                        className={"rounded-2xl"}
                    />
                </div>
            </div>
            {/* content */}
            <div className="flex flex-col md:flex-row gap-12">
                {/* text */}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus eligendi corporis aperiam accusantium.
                        Alias ut, rerum voluptas ex iste vero reprehenderit
                        quidem, dignissimos beatae doloremque maiores voluptatem
                        provident dolores? Necessitatibus.Animi excepturi
                        veritatis itaque quia, eius molestiae facilis voluptas
                        cumque libero vero iusto adipisci fuga ullam saepe vel
                        at alias necessitatibus est earum. Beatae pariatur
                        perferendis et culpa aut similique! Reiciendis expedita
                        quasi rerum quidem maxime corporis? Necessitatibus,
                        itaque? Magni, velit ad quis error veritatis ratione,
                        vitae quo consequuntur numquam expedita reprehenderit
                        ullam earum esse fugiat deserunt vero? Cum, ullam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae non expedita laboriosam ad quis quo distinctio
                        facilis fugit recusandae accusantium tempora natus,
                        eaque ipsa blanditiis culpa omnis autem magni
                        voluptatibus possimus error? Provident doloremque illum
                        odit cumque blanditiis quod voluptates labore non velit
                        eos optio tenetur aspernatur eaque unde, consectetur et
                        a esse tempore possimus dolorum laudantium? Cum fugiat
                        dolorum veniam quidem, nisi natus consequatur eligendi
                        eum quos mollitia distinctio id earum hic laborum odit
                        velit inventore deserunt tenetur saepe. Dolor ipsum
                        odit, voluptas quisquam sapiente deleniti voluptatibus
                        ratione eius maiores consequuntur delectus sed
                        inventore! Fuga corrupti atque esse unde veniam dolorem
                        laudantium dolorum dolor totam aut amet repudiandae quos
                        libero excepturi quam, nostrum, enim tempora? Debitis
                        veniam aliquam libero nostrum hic ex dolorum neque
                        officiis culpa sapiente cumque quis nesciunt corporis
                        cupiditate voluptatibus necessitatibus ea, omnis minus
                        ipsam rerum natus dignissimos, reiciendis eos optio? Cum
                        obcaecati, dolorum reprehenderit eius magni cumque aut
                        nihil distinctio veniam explicabo saepe provident
                        consectetur culpa praesentium.
                    </p>
                    <p>
                        Hic consequuntur repellat quibusdam ducimus nesciunt,
                        eaque voluptates? Laboriosam quisquam tenetur dolorum
                        tempora, ratione cumque porro deserunt ex eveniet beatae
                        perspiciatis nulla, id fugit, exercitationem suscipit
                        error. Adipisci labore maiores eveniet dolorum
                        doloremque distinctio a! Illo sunt neque maiores ex
                        doloribus ipsum tenetur in sit suscipit deleniti autem
                        architecto incidunt, fugiat veritatis voluptas placeat
                        blanditiis, aspernatur repellendus? Nam excepturi
                        aperiam quis esse nihil quasi quos asperiores explicabo
                        exercitationem eum dolorum maxime eligendi ab, a quidem
                        vel voluptatum labore, suscipit repudiandae rerum dicta
                        veritatis iure laudantium! Labore aspernatur maiores
                        dignissimos blanditiis, voluptas illo dolorem quasi sit
                        ex magni laudantium ut! Labore, reprehenderit ipsam
                        sapiente explicabo, perferendis repudiandae quae nam id
                        dolorum saepe, voluptate ipsum. Laboriosam doloremque
                        eveniet praesentium iure velit quasi dolorem veniam
                        adipisci suscipit culpa dignissimos impedit,
                        consequuntur laudantium reprehenderit laborum, nisi
                        explicabo! Dicta minima facere vero. Id.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus eligendi corporis aperiam accusantium.
                        Alias ut, rerum voluptas ex iste vero reprehenderit
                        quidem, dignissimos beatae doloremque maiores voluptatem
                        provident dolores? Necessitatibus.Animi excepturi
                        veritatis itaque quia, eius molestiae facilis voluptas
                        cumque libero vero iusto adipisci fuga ullam saepe vel
                        at alias necessitatibus est earum. Beatae pariatur
                        perferendis et culpa aut similique! Reiciendis expedita
                        quasi rerum quidem maxime corporis? Necessitatibus,
                        itaque? Magni, velit ad quis error veritatis ratione,
                        vitae quo consequuntur numquam expedita reprehenderit
                        ullam earum esse fugiat deserunt vero? Cum, ullam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae non expedita laboriosam ad quis quo distinctio
                        facilis fugit recusandae accusantium tempora natus,
                        eaque ipsa blanditiis culpa omnis autem magni
                        voluptatibus possimus error? Provident doloremque illum
                        odit cumque blanditiis quod voluptates labore non velit
                        eos optio tenetur aspernatur eaque unde, consectetur et
                        a esse tempore possimus dolorum laudantium? Cum fugiat
                        dolorum veniam quidem, nisi natus consequatur eligendi
                        eum quos mollitia distinctio id earum hic laborum odit
                        velit inventore deserunt tenetur saepe. Dolor ipsum
                        odit, voluptas quisquam sapiente deleniti voluptatibus
                        ratione eius maiores consequuntur delectus sed
                        inventore! Fuga corrupti atque esse unde veniam dolorem
                        laudantium dolorum dolor totam aut amet repudiandae quos
                        libero excepturi quam, nostrum, enim tempora? Debitis
                        veniam aliquam libero nostrum hic ex dolorum neque
                        officiis culpa sapiente cumque quis nesciunt corporis
                        cupiditate voluptatibus necessitatibus ea, omnis minus
                        ipsam rerum natus dignissimos, reiciendis eos optio? Cum
                        obcaecati, dolorum reprehenderit eius magni cumque aut
                        nihil distinctio veniam explicabo saepe provident
                        consectetur culpa praesentium.
                    </p>
                    <p>
                        Hic consequuntur repellat quibusdam ducimus nesciunt,
                        eaque voluptates? Laboriosam quisquam tenetur dolorum
                        tempora, ratione cumque porro deserunt ex eveniet beatae
                        perspiciatis nulla, id fugit, exercitationem suscipit
                        error. Adipisci labore maiores eveniet dolorum
                        doloremque distinctio a! Illo sunt neque maiores ex
                        doloribus ipsum tenetur in sit suscipit deleniti autem
                        architecto incidunt, fugiat veritatis voluptas placeat
                        blanditiis, aspernatur repellendus? Nam excepturi
                        aperiam quis esse nihil quasi quos asperiores explicabo
                        exercitationem eum dolorum maxime eligendi ab, a quidem
                        vel voluptatum labore, suscipit repudiandae rerum dicta
                        veritatis iure laudantium! Labore aspernatur maiores
                        dignissimos blanditiis, voluptas illo dolorem quasi sit
                        ex magni laudantium ut! Labore, reprehenderit ipsam
                        sapiente explicabo, perferendis repudiandae quae nam id
                        dolorum saepe, voluptate ipsum. Laboriosam doloremque
                        eveniet praesentium iure velit quasi dolorem veniam
                        adipisci suscipit culpa dignissimos impedit,
                        consequuntur laudantium reprehenderit laborum, nisi
                        explicabo! Dicta minima facere vero. Id.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus eligendi corporis aperiam accusantium.
                        Alias ut, rerum voluptas ex iste vero reprehenderit
                        quidem, dignissimos beatae doloremque maiores voluptatem
                        provident dolores? Necessitatibus.Animi excepturi
                        veritatis itaque quia, eius molestiae facilis voluptas
                        cumque libero vero iusto adipisci fuga ullam saepe vel
                        at alias necessitatibus est earum. Beatae pariatur
                        perferendis et culpa aut similique! Reiciendis expedita
                        quasi rerum quidem maxime corporis? Necessitatibus,
                        itaque? Magni, velit ad quis error veritatis ratione,
                        vitae quo consequuntur numquam expedita reprehenderit
                        ullam earum esse fugiat deserunt vero? Cum, ullam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae non expedita laboriosam ad quis quo distinctio
                        facilis fugit recusandae accusantium tempora natus,
                        eaque ipsa blanditiis culpa omnis autem magni
                        voluptatibus possimus error? Provident doloremque illum
                        odit cumque blanditiis quod voluptates labore non velit
                        eos optio tenetur aspernatur eaque unde, consectetur et
                        a esse tempore possimus dolorum laudantium? Cum fugiat
                        dolorum veniam quidem, nisi natus consequatur eligendi
                        eum quos mollitia distinctio id earum hic laborum odit
                        velit inventore deserunt tenetur saepe. Dolor ipsum
                        odit, voluptas quisquam sapiente deleniti voluptatibus
                        ratione eius maiores consequuntur delectus sed
                        inventore! Fuga corrupti atque esse unde veniam dolorem
                        laudantium dolorum dolor totam aut amet repudiandae quos
                        libero excepturi quam, nostrum, enim tempora? Debitis
                        veniam aliquam libero nostrum hic ex dolorum neque
                        officiis culpa sapiente cumque quis nesciunt corporis
                        cupiditate voluptatibus necessitatibus ea, omnis minus
                        ipsam rerum natus dignissimos, reiciendis eos optio? Cum
                        obcaecati, dolorum reprehenderit eius magni cumque aut
                        nihil distinctio veniam explicabo saepe provident
                        consectetur culpa praesentium.
                    </p>
                    <p>
                        Hic consequuntur repellat quibusdam ducimus nesciunt,
                        eaque voluptates? Laboriosam quisquam tenetur dolorum
                        tempora, ratione cumque porro deserunt ex eveniet beatae
                        perspiciatis nulla, id fugit, exercitationem suscipit
                        error. Adipisci labore maiores eveniet dolorum
                        doloremque distinctio a! Illo sunt neque maiores ex
                        doloribus ipsum tenetur in sit suscipit deleniti autem
                        architecto incidunt, fugiat veritatis voluptas placeat
                        blanditiis, aspernatur repellendus? Nam excepturi
                        aperiam quis esse nihil quasi quos asperiores explicabo
                        exercitationem eum dolorum maxime eligendi ab, a quidem
                        vel voluptatum labore, suscipit repudiandae rerum dicta
                        veritatis iure laudantium! Labore aspernatur maiores
                        dignissimos blanditiis, voluptas illo dolorem quasi sit
                        ex magni laudantium ut! Labore, reprehenderit ipsam
                        sapiente explicabo, perferendis repudiandae quae nam id
                        dolorum saepe, voluptate ipsum. Laboriosam doloremque
                        eveniet praesentium iure velit quasi dolorem veniam
                        adipisci suscipit culpa dignissimos impedit,
                        consequuntur laudantium reprehenderit laborum, nisi
                        explicabo! Dicta minima facere vero. Id.
                    </p>
                </div>
                {/* menu */}
                <div className="px-4 h-max sticky top-8">
                    <h1 className="mb-4 text-sm font-medium">Author</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-8">
                            <Image
                                src={"userImg.jpeg"}
                                className={
                                    "w-12 h-12 rounded-full object-cover"
                                }
                                w={48}
                                h={48}
                            />
                            <Link className="text-blue-800">Mr. Mahanty</Link>
                        </div>
                        <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.
                        </p>
                        <div className="flex gap-2">
                            <Link>
                                <Image src={"facebook.svg"} />
                            </Link>
                            <Link>
                                <Image src={"instagram.svg"} />
                            </Link>
                        </div>
                    </div>
                    <PostMenuAction />
                    <h1 className="mt-8 mb-4 text-sm font-medium">
                        Categories
                    </h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className="underline">All</Link>
                        <Link className="underline" to={"/"}>
                            Web Design
                        </Link>
                        <Link className="underline" to={"/"}>
                            Development
                        </Link>
                        <Link className="underline" to={"/"}>
                            Databases
                        </Link>
                        <Link className="underline" to={"/"}>
                            Search Engines
                        </Link>
                        <Link className="underline" to={"/"}>
                            Marketing
                        </Link>
                    </div>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
                    <Search />
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default SinglePostPage;
