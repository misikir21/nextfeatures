"use client";
import React from "react";
import { useRouter } from "/next/navigation"; //this used to define progtamtically way to navigate between pages
function orderproduct() {
  const handleoder = {};
  const router = useRouter;
  router.push("/"); //where you want to take the page
  return (
    <div>
      <h2>order product</h2>
      <button>{handleoder}Order Now</button>
    </div>
  );
}

export default page;
