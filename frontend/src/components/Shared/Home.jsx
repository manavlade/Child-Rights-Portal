import About from "./About";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
            <div>
                <div className="w-full h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 font-sans">
                    <Navbar/>
                    <main className="flex flex-col justify-center items-center lg:pt-28 h-full text-center">
                        <h1 className="text-5xl font-bold text-purple-700">✨ Empowering Children with Fun! ✨</h1>
                        <p className="mt-4 text-gray-700 font-medium max-w-lg">
                            Welcome to a magical world where learning about your rights is exciting! Play games, watch videos, and read cool stories to become a super child rights hero!
                        </p>
                        <div className="mt-8 flex space-x-4">
                            <button className="px-6 py-3 bg-yellow-300 text-gray-700 rounded-md hover:bg-yellow-400 font-bold">Learn More</button>
                            <button
                                className="px-6 py-3 bg-green-400 text-white rounded-md hover:bg-green-500 font-bold"

                            >Sign Up</button>
                        </div>
                        <div className="mt-10 w-full flex justify-center items-center">
                            <img
                                src="https://cdn.slidesharecdn.com/ss_thumbnails/childrightspresenation-230825155336-f5e31036-thumbnail.jpg?width=640&height=640&fit=bounds"
                                alt="Placeholder"
                                className="w-2/3 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </main>
                </div>
                <About/>
            </div>
        </>
    )
}

export default Home;