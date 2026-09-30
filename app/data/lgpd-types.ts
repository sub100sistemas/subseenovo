export interface LegalParagraph {
  lines: string[]
}

export interface LegalSubsection {
  label: string
  paragraphs: LegalParagraph[]
}

export interface LegalSection {
  id: string
  title: string
  paragraphs?: LegalParagraph[]
  subsections?: LegalSubsection[]
  bodyClass?: string
}
