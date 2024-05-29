import { useEffect } from "react";

export default function useSpyInfo() {
  useEffect(() => {
    const report = (event) =>
      console.log("User clicked at position", event.clientX, event.clientY);

    document.addEventListener("click", report);

    return () => {
      console.log("Our spy is now sleeping with 🐟🐠🐟");
      document.removeEventListener("click", report);
    };
  });
}
