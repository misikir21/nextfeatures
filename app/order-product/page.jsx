"use client";
import React from "react";
import { useRouter } from "./next/navigation";
function orderproduct() {
  const handleoder = {};
  const router = useRouter;
  router.push("/");
  return (
    <div>
      <h2>order product</h2>
      <button>{handleoder}Order Now</button>
    </div>
  );
}

export default page;
