import React, { useState } from "react";

// component
import ReviewModal from "./ReviewModal";

function AddReviewCard() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (!localStorage.zomatoUser) {
      return alert("Please sign in to post a review");
    }

    setIsOpen(true);
  };

  return (
    <>
      <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <h3 className="text-xl font-medium">Rate your experience for</h3>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <input type="radio" name="review" id="dining" />
          <label htmlFor="dining">Dining</label>
        </div>
      </div>
      <button onClick={openModal} className="text-RedShade-400">
        Write a review
      </button>
    </>
  );
}

export default AddReviewCard;
