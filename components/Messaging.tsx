import React, { useEffect, useState } from "react"
import { StreamChat } from "stream-chat"
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  ChannelList,
  LoadingIndicator,
} from "stream-chat-react"
import "stream-chat-react/dist/css/index.css"

import { getFunctions, httpsCallable } from "firebase/functions"
import { useFirebaseApp } from "reactfire"
import { useUser } from "reactfire"

const Messaging = () => {
  const { status, data: currentUser } = useUser()
  const app = useFirebaseApp()
  const [client, setClient] = useState(null)

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(
        process.env.NEXT_PUBLIC_CHAT_API
      )

      const functions = getFunctions(app, "europe-west2")
      const getToken = httpsCallable(
        functions,
        "ext-auth-chat-getStreamUserToken"
      )
      const token = await getToken()
      const streamToken = token.data.toString()

      await chatClient.connectUser(
        { id: currentUser.uid, name: currentUser.displayName },
        streamToken
      )

      const channel = chatClient.channel("messaging", "chat-id", {
        name: "test chat",
        members: [currentUser?.uid],
      })

      await channel.watch()

      setClient(chatClient)
    }

    if (status === "success") init()

    if (client) return () => client.disconnectUser()
  }, [currentUser, status])

  if (!client) return <LoadingIndicator />

  return (
    <Chat client={client} theme="messaging light">
      <ChannelList
        filters={{ type: "messaging", members: { $in: [currentUser?.uid] } }}
        sort={{ last_message_at: -1 }}
      />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}

export default Messaging
