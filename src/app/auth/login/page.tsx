import React, { FC } from "react";
import dynamic from "next/dynamic";
import strings from "@/assets/strings/strings.json";
import AuthSkeleton from "@/packages/SkeletonLoaders/AuthSkeleton";

const LoginForm = dynamic(() => import("@/packages/Auth/LoginForm"), {
  loading: () => <AuthSkeleton />,
});

export const metadata = {
  title: strings.RoboOTTLogin,
};

const Login: FC = () => {
  return (
    <div className="flex flex-col text-white items-center h-full">
      <LoginForm />
    </div>
  );
};

export default Login;
