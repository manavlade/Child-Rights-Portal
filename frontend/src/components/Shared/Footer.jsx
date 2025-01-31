const FooterPage = () => {
    return (
        <footer className="w-full h-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Subscription Section */}
                <div className="text-center mb-10">
                    <h2 className="text-xl font-semibold text-purple-700">Subscribe for updates</h2>
                    <p className="mt-2 text-gray-700">Stay informed about children's rights and resources</p>
                    <div className="mt-4 flex justify-center">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                        />
                        <button className="px-6 py-2 bg-yellow-300 text-white rounded-r-md hover:bg-blue-700">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                    {/* Column 1 - Logo */}
                    <div>
                        <div className="text-2xl font-bold text-purple-700">Logo</div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-purple-700">Quick Links</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                            <li><a href="#" className="hover:text-purple-500">Home</a></li>
                            <li><a href="#" className="hover:text-purple-500">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-500">Services</a></li>
                            <li><a href="#" className="hover:text-purple-500">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3 - Support Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-purple-700">Support Us</h3>
                        <ul className="mt-2 space-y-2 text-gray-700">
                            <li><a href="#" className="hover:text-purple-500">Donate</a></li>
                            <li><a href="#" className="hover:text-purple-500">Volunteer</a></li>
                            <li><a href="#" className="hover:text-purple-500">Sponsorship</a></li>
                        </ul>
                    </div>

                    {/* Column 4 - Follow Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-purple-700">Follow Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4 mt-2">
                            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-purple-500">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-purple-500">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-purple-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-purple-500">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Legal Section */}
                <div className="mt-10 text-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 pt-6">
                    <p>&copy; 2024 Child Rights. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="hover:underline hover:text-purple-500">Privacy Policy</a>
                        <a href="#" className="hover:underline hover:text-purple-500">Terms of Service</a>
                        <a href="#" className="hover:underline hover:text-purple-500">Contact Information</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default FooterPage;