import {Media} from "../../../modals/media.model";

export class Banner{
  id: bigint
  media: Media
  text: string
  destinationId: bigint
  type: string
}
