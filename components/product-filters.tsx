"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const filters = [
  {
    id: "category",
    name: "Categoria",
    options: [
      { label: "Bolsas", value: "bags" },
      { label: "Cintos", value: "belts" },
      { label: "Luvas", value: "gloves" },
      { label: "Cachecóis", value: "scarves" },
      { label: "Carteiras", value: "wallets" },
    ],
  },
  {
    id: "size",
    name: "Tamanho",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "one-size", label: "Único" },
    ],
  },
  {
    id: "color",
    name: "Cor",
    options: [
      { label: "Preto", value: "black" },
      { label: "Azul", value: "blue" },
      { label: "Marron", value: "brown" },
      { label: "Verde", value: "green" },
      { label: "Amarelo", value: "yellow" },
    ],
  },
]

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchValues = Array.from(searchParams.entries())

  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categorias</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{" "}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id)
                    ? `( ${
                        section.options.filter(
                          (value) => value.value == searchParams.get(section.id)
                        )[0].label
                      }   )`
                    : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      checked={searchValues.some(
                        ([key, value]) =>
                          key === section.id && value === option.value
                      )}
                      id={`filter-${section.id}-${optIdx}`}
                      onClick={(event) => {
                        const params = new URLSearchParams(searchParams)
                        const checked =
                          event.currentTarget.dataset.state === "checked"
                        checked
                          ? params.delete(section.id)
                          : params.set(section.id, option.value)
                        router.replace(`/?${params.toString()}`)
                      }}
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optIdx}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
