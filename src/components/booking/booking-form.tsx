"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Box } from "@/components/ui/box";
import type { EventType, LocationType } from "@/types/booking";

interface BookingFormProps {
  eventType: EventType;
  title: string;
}

export function BookingForm({ eventType, title }: BookingFormProps) {
  const router = useRouter();
  const { dict: d } = useLocale();
  const b = d.booking;
  const ui = d.ui;
  const STEPS = d.bookingSteps;

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [companyOrOrganization, setCompanyOrOrganization] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [childCount, setChildCount] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [preferredDate1, setPreferredDate1] = useState("");
  const [preferredDate2, setPreferredDate2] = useState("");
  const [locationType, setLocationType] =
    useState<LocationType>("client_site");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const isCorporate = eventType === "corporate";
  const progress = ((step + 1) / STEPS.length) * 100;

  function nextStep() {
    setError(null);
    if (step === 0) {
      if (!companyOrOrganization || !contactName || !contactEmail) {
        setError(b.errors.contactRequired);
        return;
      }
    }
    if (step === 1) {
      if (!preferredDate1) {
        setError(b.errors.dateRequired);
        return;
      }
      if (isCorporate && !teamSize) {
        setError(b.errors.teamSizeRequired);
        return;
      }
      if (!isCorporate && !childCount) {
        setError(b.errors.childCountRequired);
        return;
      }
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function prevStep() {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  async function submit() {
    setLoading(true);
    setError(null);

    const preferredDates = [preferredDate1, preferredDate2].filter(Boolean);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType,
          companyOrOrganization,
          contactName,
          contactEmail,
          contactPhone: contactPhone || undefined,
          teamSize: isCorporate ? Number(teamSize) : undefined,
          childCount: !isCorporate ? Number(childCount) : undefined,
          ageRange: !isCorporate ? ageRange || undefined : undefined,
          preferredDates,
          locationType,
          address: address || undefined,
          message: message || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || ui.somethingWrong);
        return;
      }

      router.push(
        `/contact?success=booking&id=${data.id}&type=${eventType}`
      );
    } catch {
      setError(ui.networkError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box className="cozy-card mx-auto max-w-xl p-6 sm:p-8">
      <p className="mb-1 font-serif text-lg font-medium text-foreground">
        {title}
      </p>
      <Progress value={progress} className="mb-2 h-2.5 rounded-full" />
      <p className="mb-6 text-sm text-muted-foreground">
        {b.stepLabel} {step + 1} / {STEPS.length}:{" "}
        <span className="font-semibold text-foreground">{STEPS[step]}</span>
      </p>

      {step === 0 && (
        <Box className="space-y-4">
          <Box>
            <Label htmlFor="org">
              {isCorporate ? b.companyLabel : b.schoolLabel}
            </Label>
            <Input
              id="org"
              value={companyOrOrganization}
              onChange={(e) => setCompanyOrOrganization(e.target.value)}
              placeholder={
                isCorporate ? b.companyPlaceholder : b.schoolPlaceholder
              }
            />
          </Box>
          <Box>
            <Label htmlFor="name">{b.contactName}</Label>
            <Input
              id="name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
          </Box>
          <Box>
            <Label htmlFor="email">{b.email}</Label>
            <Input
              id="email"
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </Box>
          <Box>
            <Label htmlFor="phone">{b.phone}</Label>
            <Input
              id="phone"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
            />
          </Box>
        </Box>
      )}

      {step === 1 && (
        <Box className="space-y-4">
          {isCorporate ? (
            <Box>
              <Label htmlFor="team">{b.teamSize}</Label>
              <Input
                id="team"
                type="number"
                min={4}
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
              />
            </Box>
          ) : (
            <Fragment>
              <Box>
                <Label htmlFor="kids">{b.childCount}</Label>
                <Input
                  id="kids"
                  type="number"
                  min={4}
                  value={childCount}
                  onChange={(e) => setChildCount(e.target.value)}
                />
              </Box>
              <Box>
                <Label htmlFor="ages">{b.ageRange}</Label>
                <Input
                  id="ages"
                  value={ageRange}
                  onChange={(e) => setAgeRange(e.target.value)}
                  placeholder={b.agePlaceholder}
                />
              </Box>
            </Fragment>
          )}
          <Box>
            <Label htmlFor="date1">{b.preferredDate}</Label>
            <Input
              id="date1"
              type="date"
              value={preferredDate1}
              onChange={(e) => setPreferredDate1(e.target.value)}
            />
          </Box>
          <Box>
            <Label htmlFor="date2">{b.alternateDate}</Label>
            <Input
              id="date2"
              type="date"
              value={preferredDate2}
              onChange={(e) => setPreferredDate2(e.target.value)}
            />
          </Box>
        </Box>
      )}

      {step === 2 && (
        <Box className="space-y-4">
          <Box>
            <Label>{b.location}</Label>
            <Select
              value={locationType}
              onValueChange={(v) => setLocationType(v as LocationType)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="client_site">
                  {isCorporate ? b.atOffice : b.atSchool}
                </SelectItem>
                <SelectItem value="dicezone_arranged">
                  {b.dicezoneVenue}
                </SelectItem>
              </SelectContent>
            </Select>
          </Box>
          <Box>
            <Label htmlFor="address">{b.address}</Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={b.addressPlaceholder}
            />
          </Box>
          <Box>
            <Label htmlFor="msg">{b.details}</Label>
            <Textarea
              id="msg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </Box>
        </Box>
      )}

      {step === 3 && (
        <Box className="space-y-3 rounded-2xl border border-border/60 bg-cozy-warm/50 p-5 text-sm">
          <p>
            <span className="font-medium">{b.reviewOrg}</span>{" "}
            {companyOrOrganization}
          </p>
          <p>
            <span className="font-medium">{b.reviewContact}</span> {contactName}{" "}
            ({contactEmail})
          </p>
          {isCorporate ? (
            <p>
              <span className="font-medium">{b.reviewTeam}</span> {teamSize}
            </p>
          ) : (
            <p>
              <span className="font-medium">{b.reviewChildren}</span> {childCount}
              {ageRange && ` (${ageRange})`}
            </p>
          )}
          <p>
            <span className="font-medium">{b.reviewDates}</span>{" "}
            {[preferredDate1, preferredDate2].filter(Boolean).join(", ")}
          </p>
          <p>
            <span className="font-medium">{b.reviewLocation}</span>{" "}
            {locationType === "client_site"
              ? b.reviewYourSite
              : b.reviewArranged}
          </p>
          {address && (
            <p>
              <span className="font-medium">{b.reviewAddress}</span> {address}
            </p>
          )}
        </Box>
      )}

      {error && (
        <p className="mt-4 text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      <Box className="mt-8 flex justify-between gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          disabled={step === 0 || loading}
        >
          {ui.back}
        </Button>
        {step < STEPS.length - 1 ? (
          <Button type="button" onClick={nextStep}>
            {ui.continue}
          </Button>
        ) : (
          <Button type="button" onClick={submit} disabled={loading}>
            {loading ? ui.submitting : ui.submitInquiry}
          </Button>
        )}
      </Box>
    </Box>
  );
}
