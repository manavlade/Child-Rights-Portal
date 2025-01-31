
// import { User } from "../models/user.js"
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const register = async (req, res) => {
//     try {
//         const { fullName, email, password } = req.body;

//         if (!fullName || !email || !password) {
//             return res.status(400).json({
//                 message: "Insuffient data",
//                 success: false,
//             });
//         };

//         let user = await User.findOne({ email });

//         if (user) {
//             return res.status(400).json({
//                 message: "Email already exists",
//                 success: false,
//             });
//         };

//         const hashedPassword = await bcrypt.hash(password, 10);


//         await User.create({
//             fullName,
//             email,
//             password: hashedPassword,

//         })

//         return res.status(200).json({
//             message: "Account created successfully",
//             success: true
//         })
//     } catch (error) {
//         console.log(error);
//     }

// }

// export const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             console.log("Missing email or password");
//             return res.status(400).json({
//                 message: "Insufficient data",
//                 success: false,
//             });
//         }

//         let user = await User.findOne({ email });

//         if (!user) {
//             console.log("User not found for email:", email);
//             return res.status(400).json({
//                 message: "Incorrect email or password",
//                 success: false,
//             });
//         }

//         const isHassedMatch = await bcrypt.compare(password, user.password);
//         if (!isHassedMatch) {
//             console.log("Incorrect password for email:", email);
//             return res.status(400).json({
//                 message: "Incorrect email or password",
//                 success: false,
//             });
//         }

//         const tokenData = {
//             userId: user._id,
//         };

//         const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
//             expiresIn: "1d",
//         });

//         user = {
//             _id: user._id,
//             fullName: user.fullName,
//             email: user.email,
//             password: user.password,
//         };


//         return res
//             .status(200)
//             .cookie("token", token, {
//                 maxAge: 1 * 24 * 60 * 60 * 1000,
//                 httpOnly: true,
//                 sameSite: "strict",
//             })
//             .json({
//                 message: `Welcome back ${user.fullName}`,
//                 success: true,
//                 user,
//             });
//     } catch (error) {
//         console.error("Login error:", error);
//         return res.status(500).json({
//             message: "Server error",
//             success: false,
//         });
//     }
// };


// export const logout = async (req, res) => {
//     try {
//         return res.status(200).cookie("token", "", { maxAge: 0 }).json({
//             message: "Logout Successfull",
//             success: true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }


// export const PostUserDetails = async (req, res) => {
//     try {
//         const { PhoneNumber, Age, Gender, Games, Preference, Habbit } = req.body;

//         if (!PhoneNumber || !Age || !Gender || !Games || !Preference || !Habbit) {
//             return res.status(400).json({ message: "All fields are required." });
//         }

//         const newUserDetails = new UserDetails({
//             PhoneNumber,
//             Age,
//             Gender,
//             Games,
//             Preference,
//             Habbit,
//         });

//         const savedUserDetails = await newUserDetails.save();

//         return res.status(201).json({
//             message: "User details successfully saved.",
//             data: savedUserDetails,
//         });
//     } catch (error) {
//         console.error("Error saving user details:", error);

//         // Send error response
//         return res.status(500).json({
//             message: "An error occurred while saving user details.",
//             error: error.message,
//         });
//     }
// };


// export const getUserById = async (req, res) => {
//     try {
//         // Extract the user ID from req.id set by isAuthenticated middleware
//         const id = req.id;

//         if (!id) {
//             return res.status(400).json({
//                 success: false,
//                 message: "User ID is required.",
//             });
//         }

//         // Fetch the user and their tasks
//         const user = await User.findById(id).select("-password"); // Exclude the password
//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found. Create an account first.",
//             });
//         }

//         // Fetch tasks created by the user
//         const tasks = await Task.find({ created_By: id });

//         return res.status(200).json({
//             success: true,
//             user: {
//                 _id: user._id,
//                 fullName: user.fullName,
//                 email: user.email,
//                 createdAt: user.createdAt,
//                 updatedAt: user.updatedAt,
//             },
//             tasks, // All tasks created by the user
//         });
//     } catch (error) {
//         console.error("Error fetching user and tasks by ID:", error);
//         return res.status(500).json({
//             success: false,
//             message: "Server error. Please try again later.",
//         });
//     }
// };



// New Code
import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new user
export const register = async (req, res) => {
    try {
        const { fullName, email, password, phoneNumber, ageGroup, gender, gamesPreference, devicePreference, habit } = req.body;

        if (!fullName || !email || !password || !phoneNumber || !ageGroup) {
            return res.status(400).json({
                message: "Insufficient data. Please provide all required fields.",
                success: false,
            });
        }

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: "Email already exists",
                success: false,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = await User.create({
            fullName,
            email,
            password: hashedPassword,
            phoneNumber,
            ageGroup,
            gender,
            gamesPreference,
            devicePreference,
            habit,
            progress: {}  // Initialize empty progress
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true,
            user
        });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({
            message: "Server error",
            success: false,
            error: error.message
        });
    }
};

// Login a user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Insufficient data. Please provide email and password.",
                success: false,
            });
        }

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false,
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false,
            });
        }

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });

        return res
            .status(200)
            .cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000, // 1 day
                httpOnly: true,
                sameSite: "strict",
            })
            .json({
                message: `Welcome back ${user.fullName}`,
                success: true,
                user: {
                    _id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    ageGroup: user.ageGroup,
                    progress: user.progress
                },
                token
            });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            message: "Server error",
            success: false,
            error: error.message
        });
    }
};

// Logout a user
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logout successful",
            success: true
        });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};

// Get user details
export const getUserDetails = async (req, res) => {
    try {
        const userId = req.id;

        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        return res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        console.error("Error fetching user details:", error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};

// Update user's progress in a game

export const updateUserProgress = async (req, res) => {
    try {
        const userId = req.id;  // Extracted from token
        const { gameId, level, status, score } = req.body;

        if (!gameId || level === undefined || !status || score === undefined) {
            return res.status(400).json({
                message: "Insufficient data. Provide gameId, level, status, and score.",
                success: false
            });
        }

        const updateData = {
            [`progress.${gameId}`]: {
                level,
                status,
                score
            }
        };

        const user = await User.findByIdAndUpdate(userId, { $set: updateData }, { new: true });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Progress updated successfully",
            success: true,
            progress: user.progress
        });
    } catch (error) {
        console.error("Error updating progress:", error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};
