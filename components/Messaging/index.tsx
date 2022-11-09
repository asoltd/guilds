import React, { useEffect, useState } from "react"
import { StreamChat } from "stream-chat"
import {
  Chat,
  Channel,
  Window,
  MessageInput,
  Thread,
  ChannelList,
  LoadingIndicator,
  VirtualizedMessageList,
  MessageList,
} from "stream-chat-react"
import "stream-chat-react/dist/css/index.css"

import { getFunctions, httpsCallable } from "firebase/functions"
import { useAuth, useFirebaseApp } from "reactfire"
import { useUser } from "reactfire"
import { CustomListContainer, CustomListItem } from "./ChannelList"
import { ChannelSearchBox } from "./ChannelSearchBox"
import { CustomChannelHeader } from "./ChannelHeader"
import { CustomMessageInput } from "./MessageInput"
import { CustomMessage } from "./Message"
import { CustomDateSeparator } from "./DateSeparator"
import { CustomMessageAvatar } from "./MessageAvatar"

export function Messaging({ variant }) {
  const { status, data: currentUser } = useUser()
  const auth = useAuth()

  const app = useFirebaseApp()
  const [client, setClient] = useState(null)

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance("4snaq6b6vptg")

      const functions = getFunctions(app, "europe-west2")
      const getToken = httpsCallable(
        functions,
        "ext-auth-chat-getStreamUserToken"
      )
      const token = await getToken()
      const streamToken = token.data.toString()

      await chatClient.connectUser(
        {
          id: auth.currentUser.uid,
          name: auth.currentUser.displayName,
          image: auth.currentUser.photoURL,
        },
        streamToken
      )

      const channel1 = chatClient.channel("messaging", "chat-id1", {
        name: "Jakub Frackowiak",
        members: [auth.currentUser?.uid],
      })
      const channel2 = chatClient.channel("messaging", "chat-id2", {
        name: "Rob Pollock",
        members: [auth.currentUser?.uid],
      })
      const channel3 = chatClient.channel("messaging", "chat-id3", {
        name: "Piotr Ostrowski",
        members: [auth.currentUser?.uid],
      })

      await channel1.addMembers([
        {
          user_id: "rijh4F5LYdgem9nPIAhnDRpkixy2",
          channel_role: "channel_moderator",
        },
      ])
      await channel2.addMembers([
        {
          user_id: "rijh4F5LYdgem9nPIAhnDRpkixy2",
          channel_role: "channel_moderator",
        },
      ])
      await channel3.addMembers([
        {
          user_id: "rijh4F5LYdgem9nPIAhnDRpkixy2",
          channel_role: "channel_moderator",
        },
      ])
      await channel1.watch()
      await channel2.watch()
      await channel3.watch()

      setClient(chatClient)
    }

    if (status === "success") init()

    if (client) return () => client.disconnectUser()
  }, [currentUser, status])

  if (!client) return <LoadingIndicator />

  return (
    <Chat
      client={client}
      theme="messaging light"
      customStyles={{
        "--xs-p": "0",
        "--sm-p": "0",
      }}
    >
      <ChannelList
        filters={{
          type: "messaging",
          members: {
            $in: [auth.currentUser.uid],
          },
        }}
        sort={{ last_message_at: -1 }}
        List={CustomListContainer}
        Preview={CustomListItem}
        showChannelSearch
        ChannelSearch={ChannelSearchBox}
      />
      <Channel Message={CustomMessage} DateSeparator={CustomDateSeparator}>
        <Window>
          <CustomChannelHeader variant={variant} />
          <MessageList />
          <MessageInput Input={CustomMessageInput} />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}
