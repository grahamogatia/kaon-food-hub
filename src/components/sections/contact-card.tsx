import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

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
            Visit us at any of our branches or reach out through the channels below.
          </p>
        </div>

        {/* Tabs for branches */}
        <div className="mx-auto mt-14 max-w-4xl">
          <Tabs defaultValue="pasig" className="w-full">
            <TabsList className="mb-6 flex w-full justify-center gap-2">
              <TabsTrigger value="pasig">Pasig</TabsTrigger>
              <TabsTrigger value="rizal">Rizal</TabsTrigger>
              <TabsTrigger value="caloocan">Caloocan</TabsTrigger>
            </TabsList>

            {/* Pasig Tab */}
            <TabsContent value="pasig">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Main contact */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Pasig Contact Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <ContactRow
                      icon={<Phone className="size-4" />}
                      label="Phone"
                      value="0995-490-7805"
                    />
                    <ContactRow
                      icon={<Mail className="size-4" />}
                      label="Email"
                      value="bgdjr68@yahoo.com"
                    />
                    <ContactRow
                      icon={<Clock className="size-4" />}
                      label="Operating Hours"
                      value={
                        <span>
                          <span className="block">Tuesday to Sunday: 10:00 AM – 7:00 PM</span>
                          <span className="block">Monday: Closed</span>
                          <span className="block mt-2 text-xs text-muted-foreground">
                            🔸 Mondays are open for advance orders only.<br />
                            🔸 Last orders are accepted until 6:45 PM daily.
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
                      value={"Joksonville Townhouse M.H. Del Pilar St., Brgy. Palatiw, Pasig City"}
                    />
                    <Separator />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Rizal Tab */}
            <TabsContent value="rizal">
              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Rizal Contact Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <ContactRow
                      icon={<Phone className="size-4" />}
                      label="Phone"
                      value="Coming Soon"
                    />
                    <ContactRow
                      icon={<Mail className="size-4" />}
                      label="Email"
                      value="Coming Soon"
                    />
                    <ContactRow
                      icon={<Clock className="size-4" />}
                      label="Operating Hours"
                      value="Coming Soon"
                    />
                    <Separator />
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                      <FacebookIcon className="size-4" />
                      Coming Soon
                    </span>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <ContactRow
                      icon={<MapPin className="size-4" />}
                      label="Address"
                      value="Coming Soon"
                    />
                    <Separator />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Caloocan Tab */}
            <TabsContent value="caloocan">
              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Caloocan Contact Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <ContactRow
                      icon={<Phone className="size-4" />}
                      label="Phone"
                      value="0927-791-6050"
                    />
                    <ContactRow
                      icon={<Mail className="size-4" />}
                      label="Email"
                      value="russellyoczon@gmail.com"
                    />
                    <ContactRow
                      icon={<Clock className="size-4" />}
                      label="Operating Hours"
                      value={
                        <span>
                          <span className="block">Monday, Wednesday to Sunday: 10:00 AM – 7:00 PM</span>
                          <span className="block">Tuesday: Closed</span>
                          <span className="block mt-2 text-xs text-muted-foreground">
                            🔸 Tuesday are open for advance orders only.<br />
                            🔸 Last orders are accepted until 6:45 PM daily.
                          </span>
                        </span>
                      }
                    />
                    <Separator />
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                      <FacebookIcon className="size-4" />
                      PISTA CENTRAL NORTH KALOOCAN BRANCH
                    </span>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <ContactRow
                      icon={<MapPin className="size-4" />}
                      label="Address"
                      value={
                        "Lot 17, Blk 3, sampalic st,  Amparo Subd. Gate 3, Bgy 179 North caloocabln"
                      }
                    />
                    <Separator />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
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
