import { z } from "zod";
import loginImg from "../../assets/sigup.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Login } from "@/api/auth"; // Assuming you have an API function for login
import { useNavigate } from "react-router-dom"; // Import navigate
import { useState } from "react"; // For managing loading state

const loginSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LoginForm = () => {
    const navigate = useNavigate(); // Initialize navigate
    const [isLoading, setIsLoading] = useState(false); // Loading state for button

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        setIsLoading(true); // Start loading
        try {
            const response = await Login(data.email, data.password); // API call

            // Show success message
            alert(response.message);

            // Navigate to /dashboard on success
            navigate("/dashboard");
        } catch (error) {
            console.error("Login failed:", error.message);
            alert("Login failed. Please check your credentials.");
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div>
            <div className="min-h-screen flex flex-col md:flex-row">
                {/* Right Section */}
                <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center px-6 md:px-16 py-8 md:py-0">
                    <div className="max-w-md mx-auto">
                        {/* Heading */}
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Log in to your account
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Welcome back! Select a method to log in:
                        </p>

                        {/* Divider */}
                        <div className="flex items-center justify-center my-4">
                            <span className="block w-1/3 border-t border-gray-300"></span>
                            <span className="mx-4 text-gray-600">Or</span>
                            <span className="block w-1/3 border-t border-gray-300"></span>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 mb-2">
                                    Email id
                                </label>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Enter Email address"
                                    className="w-full"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <Input
                                        type="password"
                                        id="password"
                                        placeholder="Enter Password"
                                        className="w-full"
                                        {...register("password")}
                                    />
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                        👁️ {/* Replace with an eye icon if needed */}
                                    </span>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password.message}
                                    </p>
                                )}
                                <a
                                    href="#"
                                    className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                                >
                                    Forgot password
                                </a>
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full ${isLoading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700 text-white"
                                    }`}
                            >
                                {isLoading ? "Logging In..." : "Log In"}
                            </Button>
                        </form>

                        {/* Footer */}
                        <p className="text-center text-gray-600 mt-4">
                            Don’t have an account?{" "}
                            <a href="/signup" className="text-blue-600 hover:underline">
                                SignUp
                            </a>
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-blue-600 flex items-center justify-center md:flex">
                    {/* Image is hidden on small mobile screens (below md) */}
                    <img
                        src={loginImg}
                        alt="signin"
                        height={624}
                        className="hidden md:block"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
