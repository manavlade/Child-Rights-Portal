import { Content } from "../models/Content.js";

// Create new content
export const createContent = async (req, res) => {
    try {
        const { title, type, description, ageGroup, tags } = req.body;

        if (!title || !type || !ageGroup) {
            return res.status(400).json({ message: "Title, type, and ageGroup are required." });
        }

        const newContent = new Content({ title, type, description, ageGroup, tags });
        await newContent.save();

        res.status(201).json({ message: "Content created successfully!", content: newContent });
    } catch (error) {
        console.error("Error creating content:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Fetch all content
export const getAllContent = async (req, res) => {
    try {
        const content = await Content.find();
        res.status(200).json(content);
    } catch (error) {
        console.error("Error fetching content:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Fetch content by ID
export const getContentById = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);
        if (!content) {
            return res.status(404).json({ message: "Content not found" });
        }
        res.status(200).json(content);
    } catch (error) {
        console.error("Error fetching content:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Fetch content by age group
export const getContentByAgeGroup = async (req, res) => {
    try {
        const { ageGroup } = req.params;
        const content = await Content.find({ ageGroup });

        if (!content.length) {
            return res.status(404).json({ message: "No content found for this age group" });
        }

        res.status(200).json(content);
    } catch (error) {
        console.error("Error fetching content:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Update content
export const updateContent = async (req, res) => {
    try {
        const { title, type, description, ageGroup, tags } = req.body;

        const updatedContent = await Content.findByIdAndUpdate(
            req.params.id,
            { title, type, description, ageGroup, tags },
            { new: true, runValidators: true }
        );

        if (!updatedContent) {
            return res.status(404).json({ message: "Content not found" });
        }

        res.status(200).json({ message: "Content updated successfully!", content: updatedContent });
    } catch (error) {
        console.error("Error updating content:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Delete content
export const deleteContent = async (req, res) => {
    try {
        const deletedContent = await Content.findByIdAndDelete(req.params.id);
        if (!deletedContent) {
            return res.status(404).json({ message: "Content not found" });
        }

        res.status(200).json({ message: "Content deleted successfully!" });
    } catch (error) {
        console.error("Error deleting content:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
