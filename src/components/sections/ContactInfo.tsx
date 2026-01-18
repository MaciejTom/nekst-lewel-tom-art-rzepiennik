import { cn } from "@/lib/utils"
import { Phone, Mail, MapPin, LucideIcon } from "lucide-react"

type ContactItemProps = {
  icon: LucideIcon
  label: string
  value: string
  href?: string
  className?: string
}

function ContactItem({ icon: Icon, label, value, href, className }: ContactItemProps) {
  const content = (
    <>
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <div>
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="font-semibold text-foreground">{value}</div>
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "flex items-center gap-4 p-4 bg-background rounded-xl hover:bg-accent/5 transition-colors",
          className
        )}
      >
        {content}
      </a>
    )
  }

  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 bg-background rounded-xl",
        className
      )}
    >
      {content}
    </div>
  )
}

type ContactInfoProps = {
  phone?: string
  email?: string
  address?: string
  className?: string
}

export function ContactInfo({
  phone = "696 092 434",
  email = "pbitarnow@gmail.com",
  address = "ul. Narutowicza 3, 33-100 Tarnów",
  className,
}: ContactInfoProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <ContactItem
        icon={Phone}
        label="Telefon"
        value={phone}
        href={`tel:${phone.replace(/\s/g, "")}`}
      />
      <ContactItem
        icon={Mail}
        label="Email"
        value={email}
        href={`mailto:${email}`}
      />
      <ContactItem
        icon={MapPin}
        label="Adres"
        value={address}
      />
    </div>
  )
}
