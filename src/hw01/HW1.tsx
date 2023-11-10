import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

export type MessageType = {
  id: number
  user: {
    avatar: string
    name: string
  }
  message: {
    text: string
    time: string
  }
}

export const message0: MessageType = {
  id: 0,
  user: {
    avatar: avatar,
    name: 'Aleksandr',
  },
  message: {
    text: 'some textsome textsome textsome textsome textsome textsome text',
    time: '22:00',
  },
}
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar,
    name: 'Ivan',
  },
  message: {
    text: 'зеркальное сообщение для тренировки css',
    time: '22:05',
  },
}

const HW1 = () => {
  return (
    <div id={'hw1'}>
      <div className={s2.hwTitle}>Simple messenger</div>
      <div className={s2.hw}>
        <div>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>

        <MessageSender M={Message} />
      </div>
    </div>
  )
}

export default HW1
