import React, { useState } from "react";
import { faqData } from "../../../../data/data";

export default function FaqVm() {
  // const [openedElements,setOpenedElements]=useState([])

  const [faqItems, setFaqItems] = useState(faqData);

  const handleButton = (id) => {
    const updatedFaq = faqItems.map((f) => ({
      ...f,
      row: f.row.map((q) => (q.id === id ? { ...q, open: !q.open } : q)),
    }));
    // console.log(`${data1.row[0].question} :::element tapidi`)
    setFaqItems(updatedFaq);
  };

    return { faqItems, handleToggle };
}
