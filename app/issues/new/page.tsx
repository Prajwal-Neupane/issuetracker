"use client";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}
const NewIssuePage = () => {
  const router = useRouter();
  const [issueData, setIssueData] = useState<IssueForm>({
    title: "",
    description: "",
  });
  const [error, setError] = useState<string>();

  const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setIssueData({
      ...issueData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/issues", issueData);
      router.push("/issues");
    } catch (error) {
      setError("An unexpected error occured!");
    }
  };
  const handleDescriptionChange = (value: string) => {
    setIssueData({
      ...issueData,
      description: value,
    });
  };
  return (
    <div className="max-w-xl px-8 py-8">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form className="" onSubmit={handleSubmit}>
        <TextField.Root className="mb-6">
          <TextField.Input
            placeholder="Title"
            onChange={handleTitleChange}
            name="title"
          />
        </TextField.Root>
        <SimpleMDE
          placeholder="Description of Issue"
          onChange={handleDescriptionChange}
          className="mb-8"
        />
        <Button className="mt-9">Submit</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
