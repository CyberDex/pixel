import { Button } from "./Button"
import { Text } from "./Text"
import { View } from "./View"

export interface IComponent {
  x?: number | string | THorSide,
  y?: number | string | TVertSide,
  w?: number | string,
  h?: number | string,
  maxW?: number
  maxH?: number,
}

export type TVertSide =
  | 'top'
  | 'bottom'

export type THorSide =
  | 'left'
  | 'right'

export type TElement =
  | Button
  | Text
  | View