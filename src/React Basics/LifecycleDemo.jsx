import { useEffect } from "react";

function LifecycleDemo() {
  useEffect(() => {
    console.log("🟢 Component mounted");

    return () => {
      console.log("🔴 Component unmounted");
    };
  }, []);

  return <h3>Hi! I am a lifecycle demo component!</h3>;
}

export default LifecycleDemo;
