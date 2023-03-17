import React from "react";
import Image from "next/image";
import { useAuth } from "src/hooks/useAuth";
import { RiVipCrown2Line } from "react-icons/ri";
import { AiOutlineHourglass, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { SubscriptionPlanProps } from "./subscription-plan-props";
import { PlanCard } from './../plan-card/planCard';

export const SubscriptionPlan = ({ products }: SubscriptionPlanProps) => {
  console.log(products);

  const { logout } = useAuth();
  return (
    <div className="min-h-screen">
      <div className="border-b-2 py-2 px-4 md:px-10 border-gray-300/20 flex items-center justify-between">
        <Image
          priority
          src={"/logo.svg"}
          alt={"Logo img"}
          width={56}
          height={56}
          className="object-contain cursor-pointer"
        />
        <div onClick={logout} className="cursor-pointer hover:underline">
          Logout
        </div>
      </div>
      <div className="flex flex-col space-y-4 text-center pt-5">
        <h1 className="text-2xl md:text-5xl text-shadow-sm">
          Flexible pricing for teams of any size.
        </h1>
        <p className="text-xl text-shadow">
          Relaxing with watching your favourite movies and tv
        </p>
      </div>
      <div className=" flex justify-center items-center py-20">
        <div className="gap-5 space-y-4 md:space-y-0 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {/* {card plan} */}
          {products
            .map((product) => (
              <PlanCard key={product.id} product={product} />
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};
