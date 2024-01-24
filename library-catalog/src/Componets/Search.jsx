import React, { useState } from "react";

function Search() {
  const [buttonText, setButtonText] = useState("Search");

  function toggleInput() {
    const input = document.getElementById("inputSearch");
    const button = document.getElementById("buttonSearch");
    if (input.style.display === "inline-block") {
      input.style.display = "none";
      setButtonText("Search");
    } else {
      setButtonText("Hide");
      input.style.display = "inline-block";
    }
  }

  return (
    <div>
      <button onClick={toggleInput} id="buttonSearch">
        {buttonText}
      </button>
      <input type="text" id="inputSearch" />
    </div>
  );
}

export default Search;
