"use client";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

export default function SignupPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const SignupSchema = Yup.object({
        fullName: Yup.string().required("Full name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Min 6 chars").required("Password required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm password required"),
    });

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="mx-auto w-7xl flex items-center justify-center p-6 ">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                        Create Account ✨
                    </h1>

                    <Formik
                        initialValues={{
                            fullName: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                if (values.password === "Welcome@123") router.push("/");
                                setSubmitting(false);
                            }, 600);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <Field
                                        type="text"
                                        name="fullName"
                                        placeholder="John Doe"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <ErrorMessage
                                        name="fullName"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <Field
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Re-enter your password"
                                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
                                >
                                    {isSubmitting ? "Creating..." : "Sign Up"}
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <p className="text-sm text-center mt-6">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="text-green-600 hover:underline font-medium"
                        >
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
