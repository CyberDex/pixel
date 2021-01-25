import { Button } from "./Button"
import { Text } from "./basic/Text"
import { Sprite } from "./Sprite"
import { View } from "./View"

export interface IComponent {
  x?: number | string | THorSide,
  y?: number | string | TVertSide,
  w?: number | string,
  h?: number | string,
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
  | Sprite
  | View