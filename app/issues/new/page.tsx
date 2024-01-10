"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl px-8 py-8">
      <TextField.Root className="mb-6">
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea
        placeholder="Description of Issue"
        size={"3"}
        variant="surface"
        className="mb-8"
      />
      <Button className="mt-9">Submit</Button>
    </div>
  );
};

export default NewIssuePage;
