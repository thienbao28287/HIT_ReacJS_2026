import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Haha } from "./components/Haha/Haha";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <div>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
