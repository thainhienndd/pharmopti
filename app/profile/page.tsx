"use server";

import Button from "@/components/Button";

export default async function Profile() {
  return (
    <div className="flex flex-col gap-2">
      <h1>Profile</h1>
      <p>This is the profile page.</p>
      <Button />
      
    </div>
  );
}
