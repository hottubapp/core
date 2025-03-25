import { Channel, ChannelStatus, ChannelOption } from "./channel";

export interface ServerStatus {
  status: ChannelStatus;
  channels: Channel[];
  message: string;
  options: ChannelOption[];
}
