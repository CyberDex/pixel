
export function getPropertyVal(
  val: number | string,
  max: number
): number {
  if (typeof val === 'number')
    return val

  if (val.indexOf('%') !== -1)
    return Math.round(max / 100 * Number(val.replace('%', '')))

  if (val === 'right' || val === 'bottom')
    return max

  if (val === 'center')
    return max / 2

  return 0
}