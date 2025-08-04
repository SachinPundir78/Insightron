"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";

interface InterviewFormProps {
  userName: string;
  userId: string;
}

const InterviewForm = ({ userName, userId }: InterviewFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    type: "Technical",
    level: "Junior",
    techstack: "",
    amount: "5",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/vapi/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userid: userId,
        }),
      });

      const result = await response.json();

      if (result.success) {
        router.push("/");
        router.refresh();
      } else {
        console.error("Failed to generate interview:", result.error);
        alert("Failed to generate interview. Please try again.");
      }
    } catch (error) {
      console.error("Error generating interview:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto card-border max-sm:min-w-[310px] lg:min-w-[450px] p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="role" className="mb-2">
            Job Role
          </Label>
          <Input
            id="role"
            name="role"
            type="text"
            className="w-full p-5  rounded-md"
            placeholder="e.g., Frontend Developer"
            value={formData.role}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="type" className="mb-2">
            Interview Type
          </Label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
            required
          >
            <option className="bg-[#494B4D] outline-none" value="Technical">
              Technical
            </option>
            <option className="bg-[#494B4D] outline-none" value="Behavioral">
              Behavioral
            </option>
            <option className="bg-[#494B4D] outline-none" value="Mixed">
              Mixed
            </option>
          </select>
        </div>

        <div>
          <Label htmlFor="level" className="mb-2">
            Experience Level
          </Label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
            required
          >
            <option className="bg-[#494B4D] outline-none" value="Junior">
              Junior
            </option>
            <option className="bg-[#494B4D] outline-none" value="Mid-level">
              Mid-level
            </option>
            <option className="bg-[#494B4D] outline-none" value="Senior">
              Senior
            </option>
          </select>
        </div>

        <div>
          <Label htmlFor="techstack" className="mb-2">
            Tech Stack (comma-separated)
          </Label>
          <Input
            id="techstack"
            name="techstack"
            type="text"
            className="w-full p-5 rounded-md"
            placeholder="e.g., React, TypeScript, Node.js"
            value={formData.techstack}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="amount" className="mb-2">
            Number of Questions
          </Label>
          <select
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
            required
          >
            <option className="bg-[#494B4D] outline-none" value="3">
              3 Questions
            </option>
            <option className="bg-[#494B4D] outline-none" value="5">
              5 Questions
            </option>
            <option className="bg-[#494B4D] outline-none" value="7">
              7 Questions
            </option>
            <option className="bg-[#494B4D] outline-none" value="10">
              10 Questions
            </option>
            <option className="bg-[#494B4D] outline-none" value="15">
              More than 10
            </option>
          </select>
        </div>

        <Button
          type="submit"
          className="w-full btn-primary"
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate Interview"}
        </Button>
      </form>
    </div>
  );
};

export default InterviewForm;
