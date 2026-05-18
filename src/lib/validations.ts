import { z } from "zod";

export const bookingSchema = z.object({
  eventType: z.enum(["corporate", "kids_education"]),
  companyOrOrganization: z.string().min(2, "Numele organizației este obligatoriu"),
  contactName: z.string().min(2, "Numele de contact este obligatoriu"),
  contactEmail: z.string().email("Email valid obligatoriu"),
  contactPhone: z.string().optional(),
  teamSize: z.coerce.number().int().positive().optional(),
  childCount: z.coerce.number().int().positive().optional(),
  ageRange: z.string().optional(),
  preferredDates: z.array(z.string()).min(1, "Adaugă cel puțin o dată preferată"),
  locationType: z.enum(["client_site", "dicezone_arranged"]),
  address: z.string().optional(),
  message: z.string().optional(),
});

export const rentalSchema = z.object({
  gameSlug: z.string().min(1),
  gameTitle: z.string().min(1),
  contactName: z.string().min(2, "Numele este obligatoriu"),
  contactEmail: z.string().email("Email valid obligatoriu"),
  contactPhone: z.string().optional(),
  startDate: z.string().min(1, "Data de început este obligatorie"),
  endDate: z.string().min(1, "Data de sfârșit este obligatorie"),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Numele este obligatoriu"),
  email: z.string().email("Email valid obligatoriu"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Mesajul trebuie să aibă cel puțin 10 caractere"),
});
