"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator"; // Assuming you have a Separator component
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "./ui/button";

// Zod Schema
const formSchemaFTE = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    phoneNumber: z.string().min(10, { message: "Phone number is required" }),
    Age: z.number().min(1, { message: "Age must be at least 1 year" }).max(17, { message: "Age cannot exceed 16 years" }),
    gender: z.enum(["male", "female", "other"], { message: "Please select your gender" }),
    Education: z.string().min(5, { message: "Education is required" }),
    games: z.enum(["indoor", "outdoor"], { message: "Please select a game type" }),
});

// Type inference from the schema
type FormDataFTE = z.infer<typeof formSchemaFTE>;

export function DiagnosticTest() {
    // Use react-hook-form with zod for validation
    const form = useForm<FormDataFTE>({
        resolver: zodResolver(formSchemaFTE),
        defaultValues: {
            name: "",
            phoneNumber: "",
            Age: 0,
            gender: "male", // Default value
            Education: "",
            games: "indoor", // Default value
        },
    });

    // Submit handler
    function onSubmit(values: FormDataFTE) {
        console.log(values);
    }

    return (
        <div className="h-full p-4 space-y-2 mt-10 max-w-3xl mx-auto border border-black rounded-3xl border-solid">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-10">
                    {/* General Information Section */}
                    <div className="space-y-2 w-full">
                        <div>

                            <h3 className="text-lg text-center mt-10  font-medium">For age Group</h3>
                            <h3 className="text-lg font-medium">Enter below details</h3>
                            <p className="text-sm text-muted-foreground">
                                General Information about your Companion
                            </p>
                        </div>
                        <Separator className="bg-primary/10" />
                    </div>

                    {/* Name and Phone Number Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your name" {...field} />
                                    </FormControl>
                                    <FormDescription>This is how you will be addressed.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your phone number" {...field} />
                                    </FormControl>
                                    <FormDescription>We'll use this to contact you if needed.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Age and Gender Fields */}  

                    {/* thoda glitcj hao form fieled mei */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="Age"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Age</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Enter your age" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gender</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="male">Male</SelectItem>
                                                <SelectItem value="female">Female</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Education and Games Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="Education"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Education</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your education level" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="games"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Games</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Game Type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="indoor">Indoor</SelectItem>
                                                <SelectItem value="outdoor">Outdoor</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="w-full flex justify-center">
                        <Button variant="outline" >
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
