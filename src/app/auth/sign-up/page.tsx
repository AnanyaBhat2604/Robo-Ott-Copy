import React, { FC } from "react";
import dynamic from "next/dynamic";
import strings from "@/assets/strings/strings.json";
import AuthSkeleton from "@/packages/SkeletonLoaders/AuthSkeleton";

const SignUpForm = dynamic(() => import("@/packages/Auth/SignUpForm"), {
  loading: () => <AuthSkeleton />,
});

export const metadata = {
  title: strings.RoboOTTSignup,
};

const SignUp: FC = () => {
  return (
    <div className="flex flex-col text-white items-center h-full">
      <SignUpForm />
    </div>
  );
};

export default SignUp;
