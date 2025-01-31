"use client";

import { getDataExampleValue } from "@/services/server/dataExample/getDataExampleValue";
import { setDataExampleValue } from "@/services/server/dataExample/setDataExampleValue";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function AskValue() {
  const [value, setValue] = useState("");
  const [resValue, setResValue] = useState("");

  const onSubmit = async () => {
    const dataExempleId = await setDataExampleValue(value);
    const dataExempleValue = await getDataExampleValue(dataExempleId);
    setResValue(dataExempleValue ?? "");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-4xl font-bold">Ask a Value</h1>
      <p className="text-lg">
        Ask a value to a pharmacist and get a quote for your medication.
      </p>
      <div className="flex flex-col gap-2">
        <Label>Ask a Value</Label>
        <Input
          placeholder="Write a Value"
          className="w-full"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Button onClick={onSubmit}>Display Value</Button>
      <p className="text-lg">{resValue}</p>
    </div>
  );
}
