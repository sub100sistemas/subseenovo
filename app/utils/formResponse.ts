function parseJson(text: string): unknown {
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

export function parseFormResponse(raw: unknown): unknown {
  if (typeof raw !== 'string') {
    return raw
  }
  const text = raw.trim()
  const whole = parseJson(text)
  if (whole !== null) {
    return whole
  }
  const lastLine = text.split(/\r?\n/).filter((line) => line.trim() !== '').pop() ?? ''
  return parseJson(lastLine.trim())
}

export function isSuccessResponse(response: unknown): boolean {
  return typeof response === 'object' && response !== null && (response as { success?: unknown }).success === true
}
