// import mongoose from "mongoose";

// const userDetailSchema = new mongoose.Schema(
//     {
//         PhoneNumber: {
//             type: Number,
//             required: true
//         },
//         Age: {
//             type: String,
//             enum: ['5-7', '8-10', '11-16']
//         },
//         Gender: {
//             type: String,
//             enum: ['Male', 'Female', 'Other']
//         },
//         // Progress: {
//         //     type: String,
//         //     enum: ['in-progress', 'completed'],
//         //     default: 'in-progress'
//         // },
//         Games: {
//             type: String,
//             enum: ['Indoor', 'Outdoor']
//         },
//         Preference: {
//             type: String,
//             enum: ['Mobile', 'Indoor/Outdoor']
//         },
//         Habbit: {
//             type: String,
//             enum: ['Watch movies', 'Read Books']
//         },
//     },
//     { timestamps: true }
// );

// export const UserDetails = mongoose.model('UserDetails', userDetailSchema);