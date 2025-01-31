// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//     {
//         fullName: {
//             type: String,
//             required: true
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true
//         },
//         password: {
//             type: String,
//             required: true,
//             unique: true
//         }
//     },
//     { timestamps: true } 
// );

// export const User = mongoose.model('User', userSchema);


import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        ageGroup: {
            type: String,
            enum: ['5-7', '8-10', '11-16'],
            required: true
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other']
        },
        gamesPreference: {
            type: String,
            enum: ['Indoor', 'Outdoor']
        },
        devicePreference: {
            type: String,
            enum: ['Mobile', 'Indoor/Outdoor']
        },
        habit: {
            type: String,
            enum: ['Watch movies', 'Read Books']
        },
        progress: {
            type: Map,
            of: {
                level: { type: Number, default: 1 },
                status: { type: String, enum: ['in-progress', 'completed'], default: 'in-progress' },
                score: { type: Number, default: 0 }
            }
        }
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);