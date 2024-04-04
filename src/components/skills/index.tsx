import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoPython } from "react-icons/io5";
import { SiPython, SiTailwindcss } from "react-icons/si";
import { SiCsharp } from "react-icons/si";

import { SiTypescript } from "react-icons/si";

export function Skills() {
    return (
        <section id="SKills" className="container w-screen h-screen mt-4 p-10">
            <h1 className="text-personal-color-rose text-center text-4xl font-bold">
                Skills
            </h1>
            <div className="mt-20 flex flex-col gap-4">
                <div>
                    <h3 className="text-white font-bold text-lg">HTML5</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "100%" }}
                        ></div>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg">CSS3</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "100%" }}
                        ></div>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg">JAVASCRIPT</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "100%" }}
                        ></div>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg">REACTJS</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "80%" }}
                        ></div>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg">TYPESCRIPT</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "75%" }}
                        ></div>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg">TAILWIND</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "75%" }}
                        ></div>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg">.NET</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "40%" }}
                        ></div>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg">PYTHON</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "40%" }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex items-center justify-center mt-20 gap-10">
                <IoLogoHtml5
                    className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                    size={50}
                    color="#e34f26"
                />
                <IoLogoCss3
                    className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                    size={50}
                    color="#264de4"
                />
                <IoLogoJavascript
                    className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                    size={50}
                    color="#f0db4f"
                />
                <IoLogoReact
                    className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                    size={50}
                    color="#61dafb"
                />
                <SiTypescript
                        className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                        size={50}
                        color="#007acc"
                    />
                    <SiTailwindcss
                        className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                        size={50}
                        color="#38b2ac"
                    />
                    <SiCsharp
                        className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                        size={50}
                        color="#239120"
                    />
                    <SiPython
                        className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                        size={50}
                        color="#3776ab"
                    />
            </div>

            <div className="mt-14 flex flex-col items-center justify-center gap-10 md:hidden">
                <div className="flex items-center justify-center gap-10">
                    <IoLogoHtml5
                        className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                        size={50}
                        color="#e34f26"
                    />
                    <IoLogoCss3
                        className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                        size={50}
                        color="#264de4"
                    />
                    <IoLogoJavascript
                        className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                        size={50}
                        color="#f0db4f"
                    />
                    <IoLogoReact
                        className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                        size={50}
                        color="#61dafb"
                    />
                </div>
                <div className="flex items-center justify-center gap-10">
                    <SiTypescript
                        className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                        size={50}
                        color="#007acc"
                    />
                    <SiTailwindcss
                        className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                        size={50}
                        color="#38b2ac"
                    />
                    <SiCsharp
                        className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                        size={50}
                        color="#239120"
                    />
                       <SiPython
                        className="transform transition duration-500 hover:scale-110 hover:shadow-lg"
                        size={50}
                        color="#3776ab"
                    />
                </div>
            </div>

        </section>
    );
}
