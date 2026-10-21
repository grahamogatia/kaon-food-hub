import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function ContactCard() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fiesta-yellow">
            Get In Touch
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Information
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Reach out through the channels below.
          </p>
        </div>

        {/* Tabs for branches */}
        <div className="mx-auto mt-14 max-w-4xl">
          
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Main contact */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Contact Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <ContactRow
                      icon={<Phone className="size-4" />}
                      label="Phone"
                      value="0947-364-3770"
                    />
                    <ContactRow
                      icon={<Mail className="size-4" />}
                      label="Email"
                      value="bgdaza68@yahoo.com"
                    />
                    <ContactRow
                      icon={<Clock className="size-4" />}
                      label="Operating Hours"
                      value={
                        <span>
                          <span className="block">Tuesday to Sunday: 9:00 AM – 6:00 PM</span>
                          <span className="block">Monday: Closed</span>
                          <span className="block mt-2 text-xs text-muted-foreground">
                            🔸 Mondays are open for advance orders only.<br />
                            🔸 Last orders are accepted until 5:45 PM daily.
                          </span>
                        </span>
                      }
                    />
                    <Separator />
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                      <FacebookIcon className="size-4" />
                      Kaon Food Hub - Pasig
                    </span>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <ContactRow
                      icon={<MapPin className="size-4" />}
                      label="Address"
                      value={"Block 8 Lot E Joksonville Townhomes, M. H. Del Pilar St., Brgy. Palatiw (Kanan), Pasig, NCR 1600, Philippines"}
                    />
                    <Separator />
                  </CardContent>
                </Card>
              </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-muted-foreground">{icon}</span>
      <div>
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </div>
  );
}
