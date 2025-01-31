import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { PostUserDetails } from "@/api/auth"; // Import the API function
import { SidebarTrigger } from "../ui/sidebar";

const userDetailsSchema = z.object({
    PhoneNumber: z
        .string()
        .length(10, "Phone number must be 10 digits")
        .regex(/^\d+$/, "Phone number must be numeric"),
    Age: z.enum(["5-7", "8-10", "11-16"], { required_error: "Please select an age group" }),
    Gender: z.enum(["Male", "Female", "Other"], { required_error: "Please select a gender" }),
    Games: z.enum(["Indoor", "Outdoor"], { required_error: "Please select a game preference" }),
    Preference: z.enum(["Mobile", "Indoor/Outdoor"], { required_error: "Please select your preference" }),
    Habbit: z.enum(["Watch movies", "Read Books"], { required_error: "Please select your habit" }),
});

const UserDetailsForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userDetailsSchema),
    });

    const onSubmit = async (data) => {
        console.log(data);
        setIsLoading(true); // Start loading
        try {
            const response = await PostUserDetails(
                data.PhoneNumber,
                data.Age,
                data.Gender,
                data.Games,
                data.Preference,
                data.Habit
            );

            // Handle success (display a message or redirect)
            alert("User details submitted successfully!");
            console.log("Response:", response);
        } catch (error) {
            // Handle error
            console.error("Error submitting user details:", error);
            alert(error.message || "Failed to submit user details.");
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 " >
            <SidebarTrigger />

            <div className="w-screen h-screen flex justify-center items-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white shadow-lg rounded-lg p-10 w-full max-w-4xl"
                >
                    <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-10">
                        ✨ Tell Us About Yourself ✨
                    </h1>

                    <div className="grid grid-cols-2 gap-6">
                        {/* Phone Number */}
                        <div>
                            <Label className="block text-xl font-bold text-blue-600 mb-2">
                                Enter Phone Number
                            </Label>
                            <Input
                                id="PhoneNumber"
                                type="text"
                                placeholder="Enter Your Phone Number"
                                {...register("PhoneNumber")}
                                className="w-full p-3 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            {errors.PhoneNumber && (
                                <p className="text-red-500 text-sm mt-1">{errors.PhoneNumber.message}</p>
                            )}
                        </div>

                        {/* Age Group */}
                        <div>
                            <Label className="block text-xl font-bold text-blue-600 mb-2">
                                Select Age Group
                            </Label>
                            <select
                                id="Age"
                                {...register("Age")}
                                className="w-full p-3 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                {["5-7", "8-10", "11-16"].map((age) => (
                                    <option key={age} value={age}>
                                        {age}
                                    </option>
                                ))}
                            </select>
                            {errors.Age && (
                                <p className="text-red-500 text-sm mt-1">{errors.Age.message}</p>
                            )}
                        </div>

                        {/* Gender */}
                        <div>
                            <Label className="block text-xl font-bold text-blue-600 mb-2">
                                Select Gender
                            </Label>
                            <select
                                id="Gender"
                                {...register("Gender")}
                                className="w-full p-3 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                {["Male", "Female", "Other"].map((gender) => (
                                    <option key={gender} value={gender}>
                                        {gender}
                                    </option>
                                ))}
                            </select>
                            {errors.Gender && (
                                <p className="text-red-500 text-sm mt-1">{errors.Gender.message}</p>
                            )}
                        </div>

                        {/* Games */}
                        <div>
                            <Label className="block text-xl font-bold text-blue-600 mb-2">
                                Mention Favourite Game
                            </Label>
                            <select
                                id="Games"
                                {...register("Games")}
                                className="w-full p-3 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                {["Indoor", "Outdoor"].map((game) => (
                                    <option key={game} value={game}>
                                        {game}
                                    </option>
                                ))}
                            </select>
                            {errors.Games && (
                                <p className="text-red-500 text-sm mt-1">{errors.Games.message}</p>
                            )}
                        </div>

                        {/* Preference */}
                        <div>
                            <Label className="block text-xl font-bold text-blue-600 mb-2">
                                Select Your Preference
                            </Label>
                            <select
                                id="Preference"
                                {...register("Preference")}
                                className="w-full p-3 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                {["Mobile", "Indoor/Outdoor"].map((preference) => (
                                    <option key={preference} value={preference}>
                                        {preference}
                                    </option>
                                ))}
                            </select>
                            {errors.Preference && (
                                <p className="text-red-500 text-sm mt-1">{errors.Preference.message}</p>
                            )}
                        </div>

                        {/* Habit */}
                        <div>
                            <Label className="block text-xl font-bold text-blue-600 mb-2">
                                Select Your Habit
                            </Label>
                            <select
                                id="Habit"
                                {...register("Habit")}
                                className="w-full p-3 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                {["Watch movies", "Read Books"].map((habit) => (
                                    <option key={habit} value={habit}>
                                        {habit}
                                    </option>
                                ))}
                            </select>
                            {errors.Habit && (
                                <p className="text-red-500 text-sm mt-1">{errors.Habit.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`px-8 py-4 ${isLoading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-400 hover:bg-green-500 text-white"
                                } font-bold rounded-md transition-colors text-xl`}
                        >
                            {isLoading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserDetailsForm;
