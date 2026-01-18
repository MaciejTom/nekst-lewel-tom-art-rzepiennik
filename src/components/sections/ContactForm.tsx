"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

type ContactFormProps = {
  onSubmit?: (data: FormData) => void
  variant?: "default" | "card"
  className?: string
}

type FormData = {
  name: string
  email: string
  phone?: string
  message: string
  acceptTerms: boolean
}

export function ContactForm({
  onSubmit,
  variant = "default",
  className,
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(formData)
    console.log("Form submitted:", formData)
  }

  const wrapperClass = variant === "card"
    ? "bg-background p-6 md:p-8 rounded-2xl"
    : ""

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid grid-cols-1 gap-6", wrapperClass, className)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="mb-2 block text-foreground">
            Imię i nazwisko
          </Label>
          <Input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-card"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" className="mb-2 block text-foreground">
            Telefon
          </Label>
          <Input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-card"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="mb-2 block text-foreground">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-card"
          required
        />
      </div>

      <div>
        <Label htmlFor="message" className="mb-2 block text-foreground">
          Wiadomość
        </Label>
        <Textarea
          id="message"
          placeholder="Opisz zakres prac, lokalizację, harmonogram..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="min-h-[120px] bg-card"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={formData.acceptTerms}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, acceptTerms: checked === true })
          }
        />
        <Label
          htmlFor="terms"
          className="cursor-pointer text-sm text-muted-foreground"
        >
          Akceptuję politykę prywatności
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90 text-white"
        size="lg"
      >
        Wyślij zapytanie
      </Button>
    </form>
  )
}
