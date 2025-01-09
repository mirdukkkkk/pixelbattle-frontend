import { config } from 'src/config'
import { MessageData } from '../api/types'
import { CanvasStorage } from 'src/core/place/storage/canvas'
import Color from '../primitives/Color'

export class WsConnection {
  private static ws: WebSocket

  static get closed() {
    return (
      this.ws.readyState === WebSocket.CLOSED ||
      this.ws.readyState === WebSocket.CLOSING
    )
  }

  public static connect() {
    this.createWebSocket()
    this.setupEventListeners()
  }

  private static createWebSocket() {
    this.ws = new WebSocket(
      config.url.api.replace('http', 'ws') + '/pixels/socket'
    )
  }

  private static setupEventListeners() {
    this.ws.addEventListener('open', this.onOpen.bind(this))
    this.ws.addEventListener('message', this.onMessage.bind(this))
    this.ws.addEventListener('close', this.onClose.bind(this))
    this.ws.addEventListener('error', this.onError.bind(this))
  }

  private static async onMessage(event: MessageEvent<string | Blob>) {
    const data: MessageData =
      event.data instanceof Blob
        ? await new Response(event.data).json()
        : JSON.parse(event.data)

    switch (data.op) {
      case 'PLACE': {
        CanvasStorage.putPixel(data.x, data.y, new Color(data.color))
        break
      }
      case 'ENDED':
        break
    }
  }

  private static onOpen() {}

  private static onError(_: Event) {}

  private static onClose(_: CloseEvent) {}
}