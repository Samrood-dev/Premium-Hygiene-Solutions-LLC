import Instagram from "../Icons/instagram";
import { social } from "../utils";

const Social = () => {
    return (
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-center text-center gap-4 md:flex-row md:text-left md:gap-5">
                <div className="rounded-2xl p-2 border-2">
                    <Instagram className="h-14 w-14" />
                </div>
                <div>
                    <h3 className="text-xl md:text-3xl font-semibold">
                        {social.username}
                    </h3>

                    <p className="text-lg text-gray-600">
                        {social.bio}
                    </p>

                    {/* Contact info */}
                    <div className="flex flex-col text-xl text-gray-700 space-y-1 mt-2">
                        <p>
                            📞{" "}
                            <a href={`tel:${social.phone}`} className="hover:text-blue-600">
                                {social.phone}
                            </a>
                        </p>
                        <p>
                            📩{" "}
                            <a
                                href={`mailto:${social.email}`}
                                className="hover:text-blue-600 text-xl"
                            >
                                {social.email}
                            </a>
                        </p>
                    </div>
                </div> 
            </div>

            {/* Button */}
            <a
                href={social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center md:w-auto 
                   px-5 py-2 mt-2 md:mt-0
                   bg-linear-to-r from-pink-500 to-orange-500 
                   text-white rounded-lg text-2xl font-semibold 
                   hover:opacity-90 transition"
            >
                Follow on Instagram
            </a>
        </div>
    );
};

export default Social;
