import React from "react";

function page({ params }:{
    params:{
        productid:string
        reviewid:string
    }
}) {
  return (
    <h2>
      review {params.reviewid} for <product>params.pr</product>
    </h2>
  );
}

export default page;
