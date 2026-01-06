import CartHero from "./CartHero";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

export default function Cart() {
  return (
    <div className=" flex  flex-col gap-[100px] min-h-screen w-screen justify-center items-center pt-[72px]  ">
      
      <CartHero />

      <div className="flex  w-full justify-center">
        <div className=" flex h-[700px] w-full gap-10 justify-center  ">

          <CartItems />

          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
