import type { IconType } from 'react-icons'
import {
  LuDumbbell,
  LuLaptopMinimal,
  LuMapPinned,
  LuMegaphone,
  LuPalette,
  LuUsersRound,
} from 'react-icons/lu'

export const iconesDepartamentos: Record<string, IconType> = {
  marketing: LuMegaphone,
  'recursos-humanos': LuUsersRound,
  'tecnologia-da-informacao': LuLaptopMinimal,
  esporte: LuDumbbell,
  artes: LuPalette,
  turismo: LuMapPinned,
}
