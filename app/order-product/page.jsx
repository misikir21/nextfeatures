"use client";
import { useRouter } from "next/navigation"; //this used to define progtamtically way to navigate between pages
function orderproduct() {
  const router = useRouter();
  const handleoder = () => {
    console.log("you added an item to the cart");
    router.push("/"); //where you want to take the page
  };

  return (
    <div>
      <h2>order product</h2>
      <button onClick={handleoder}>Order Now</button>
    </div>
  );
}

export default orderproduct;
