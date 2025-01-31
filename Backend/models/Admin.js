import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    activityLog: [{
        action: {
            type: String,
            required: true
        },
        // contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }]
}, { timestamps: true });

export const Admin = mongoose.model('Admin', AdminSchema);