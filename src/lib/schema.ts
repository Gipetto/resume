import type { ResumeData } from "$types/global"

type MonthYear = {
  month?: number | null
  year?: number | null
}

const toIsoMonth = (date?: MonthYear) => {
  if (!date?.year) return undefined
  return date.month ? `${date.year}-${String(date.month).padStart(2, "0")}` : `${date.year}`
}

export const personSchema = (data: ResumeData) => {
  const primaryUrl = data.contact?.methods?.urls?.[0]
  const sameAs = [...new Set([
    ...(data.contact?.methods?.urls ?? []),
    ...(data.links ?? []).map((link) => link.href),
    data.sideProject?.url,
    data.howIUseAgents?.config.url,
    ...(data.sameAs ?? [])
  ].filter((url): url is string => Boolean(url) && url !== primaryUrl))].sort()

  const jobs = [
    ...(data.currentWork ?? []),
    ...(data.workHistory ?? [])
  ].filter((job) => !job.hidden)

  const roles = jobs.flatMap((job) => job.positions
    .map((position) => ({
      "@type": "OrganizationRole",
      ...(position.title ? { roleName: position.title } : {}),
      ...(() => {
        const startDate = toIsoMonth(position.from)
        return startDate ? { startDate } : {}
      })(),
      ...(() => {
        const endDate = toIsoMonth(position.to)
        return endDate ? { endDate } : {}
      })(),
      organization: {
        "@type": "Organization",
        name: job.company,
        ...(job.url ? { url: job.url } : {})
      }
    }))
    .filter((role) => role.roleName || role.startDate || role.endDate))

  const jobHistory = roles.filter((role) => role.endDate)
  const currentOrganizations = [...new Map(
    roles
      .filter((role) => !role.endDate)
      .map((role) => [`${role.organization.name}|${role.organization.url ?? ""}`, role.organization])
  ).values()]

  const alumniOf = (data.education ?? [])
    .filter((entry): entry is NonNullable<typeof entry> & { institution: string } => Boolean(entry.institution))
    .map((entry) => ({
      "@type": "EducationalOrganization",
      name: entry.institution
    }))

  const postalAddressFields = {
    ...(data.contact?.address?.streetAddress ? { streetAddress: data.contact.address.streetAddress } : {}),
    ...(data.contact?.address?.locality ? { addressLocality: data.contact.address.locality } : {}),
    ...(data.contact?.address?.region ? { addressRegion: data.contact.address.region } : {}),
    ...(data.contact?.address?.postalCode ? { postalCode: data.contact.address.postalCode } : {}),
    ...(data.contact?.address?.countryName ? { addressCountry: data.contact.address.countryName } : {})
  }

  const knowsAbout = [...new Set([
    ...(data.robotData ?? []).flatMap((table) => table.items.map((item) => item.title)),
    ...(data.aiTools ?? []).map((tool) => tool.title)
  ])].sort()

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${data.name.firstName} ${data.name.lastName}`,
    ...(data.name.title ? { jobTitle: data.name.title } : {}),
    ...(primaryUrl ? { url: primaryUrl } : {}),
    ...(data.contact?.methods?.email ? { email: data.contact.methods.email } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    ...(Object.keys(postalAddressFields).length
      ? { address: { "@type": "PostalAddress", ...postalAddressFields } }
      : {}),
    ...(knowsAbout.length ? { knowsAbout } : {}),
    ...(alumniOf.length ? { alumniOf } : {}),
    ...(currentOrganizations.length
      ? { worksFor: currentOrganizations.length === 1 ? currentOrganizations[0] : currentOrganizations }
      : {}),
    ...(jobHistory.length ? { jobHistory } : {})
  }
}

export const personJsonLd = (data: ResumeData | undefined) =>
  data ? JSON.stringify(personSchema(data)).replace(/</g, "\\u003c") : ""