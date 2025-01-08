"use client"
import { CardsPaymentMethod } from "@/components/payment-method";

export default function Checkout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-8 sm:p-20">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <CardsPaymentMethod />
      </main>
      <footer className="p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}