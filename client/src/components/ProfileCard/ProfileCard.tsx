

function ProfileCard() {
    return (
        <div className="bg-white rounded-2xl p-8 max-w-md shadow-xl">
            <img
                src="https://i.pravatar.cc/150"
                alt="Profile Avatar"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />

            <h1 className="text-2xl font-bold text-center">
                Jasmine
            </h1>

            <p className="text-center text-gray-500 mb-4">
                Full Stack Developer | AI-Native Builder
            </p>

            <div className="flex justify-center gap-4">
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                    GitHub
                </button>

                <button className="border px-4 py-2 rounded-lg">
                    Resume
                </button>
            </div>
        </div>
    );
}

export default ProfileCard;