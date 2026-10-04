export function isSuccessResponse(response: unknown): boolean {
  return typeof response === 'object' && response !== null && (response as { success?: unknown }).success === true
}
