import { DiagnosticTest } from "@/components/DiagnosticTest"

const testQuestionsPage = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-4 py-8 font-sans" >
                <header className="flex justify-between items-center py-5 border-b border-gray-300">
                    <div className="text-2xl font-bold">child Rights</div>
                    <nav className="flex space-x-4">
                        <a href="/" className="text-gray-700 hover:text-gray-900">Home Page</a>
                        <a href="/about" className="text-gray-700 hover:text-gray-900">About Us</a>
                        <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</a>
                        <div className="relative group">
                            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Resources</span>
                            <div className="absolute hidden group-hover:flex flex-col bg-white border border-gray-300 p-2 mt-2 space-y-1">
                                <a href="/resource1" className="text-gray-700 hover:text-gray-900">Resource 1</a>
                                <a href="/resource2" className="text-gray-700 hover:text-gray-900">Resource 2</a>
                            </div>
                        </div>
                    </nav>
                    <div className="space-x-2">
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Join</button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Start</button>
                    </div>
                </header>
            <DiagnosticTest/>
        </div>
        </>
    )
}

export default testQuestionsPage;