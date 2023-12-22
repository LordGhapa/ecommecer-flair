"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";



import { Button } from "@/components/ui/button";





export function CartSummary() {
  const {
    formattedTotalPrice,
    totalPrice,
    cartDetails,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart()

  const [isLoading, setIsLoading] = useState(false)
  const isDisabled = isLoading || cartCount! === 0

  const shippingAmount = cartCount! > 0 ? 500 : 0
  const totalAmount = totalPrice! + shippingAmount

  async function onCheckout() {
    setIsLoading(true)
    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(cartDetails),
    })
    const data = await response.json()
    const result =await redirectToCheckout(data.id)
    if (result?.error) {
      console.error(result)
    }
    setIsLoading(false)
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Total
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">{formattedTotalPrice}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Taxas</span>
          </dt>
          <dd className="text-sm font-medium">
            {formatCurrencyString({ value: shippingAmount, currency: "BRL" })}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">total</dt>
          <dd className="text-base font-medium">
            {formatCurrencyString({ value: totalAmount, currency: "BRL" })}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <Button disabled={isDisabled} onClick={onCheckout} className="w-full">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Carregando..." : "Continuar"}
        </Button>
      </div>
    </section>
  )
}
